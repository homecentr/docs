---
title: Storage
menuIcon: /icons/stack.png
menuOrder: 5
---

![Storage diagram](/storage.png)

The storage favours fault tolerance and data integrity above anything else. By looking at the diagram above, many will ask why I am not using a RAID array. To be honest I have been considering it for quite some time but both array types have a caveat:
- RAID1 (mirror) would cut the usable space in half and would mean keeping 4 copies of the same data which to me seems excessive
- RAID0 (stripe) would keep the capacity the same but the fault tolerance would decrease because failure of a single drive would render a whole node unusable

For these reasons I treat the disks separately and rely on gluster to replicate the data across two replicas (+ arbiter keeping metadata to prevent splitbrain). This way a single disk failure means the cluster keeps working, just the affected volumes will run without redundancy until the disk is replaced and the gluster volume rebuilt.

Given that I am using a mix of consumer grade and second-hand enterprise grade hardware disk failures are a matter of when and not if. I also don't keep a cupboard full of spare drives so it might take some time to get a replacement disk so I wanted to make sure the cluster keeps working as well as possible in this situation.

## Alternatives

Findind a suitable software for distributed storage has been probably the most difficult part of building the homelab. It may seem easy at first but there's a lot of proprietary and paid solutions which don't justify their cost and in general these solutions are designed for large scale enterprise grade clusters of tens of servers which I don't have or need.

Considered options
- **Longhorn** - I had high hopes for Longhorn and deployed it to a cluster of three nodes (in a virtualized Lab). Everything worked correctly until I did an availability test. I simply "unplugged" the VM on which the pod using the PVC was running and waited and waited...and the pod was never rescheduled. I am not sure why this happened, I went through the tutorials several times but never got it working so I gave up.
- **Portworx** - seems good, never tried it because of the free subscription limitations. Another factor is that Pure Storage can chose to change the subscription rules at any time and then I would immediately have to redesign the whole storage...not worth it.
- **Ceph** - seems pretty complicated but there are automation options ([Proxmox](/selfhosted/proxmox) can handle the deployment for you or there's [rook](https://rook.io/) to deploy). The dealbreaker for me was the hardware requirements. Ceph requires 3 equally sized nodes and highly recommends 10 gbps network.
- **Linbit** - dived into the docs several times and never got out how this thing works let alone how should I install and configure it. It's probably me being too dumb but hey if it's too complicated to understand in two hours it's probably not a good fit for a homelab...

## Gluster
I was a bit discouraged by some of the feedback I found online regarding difficulties when cluster gets into a bad state but there is a huge benefit it has. It does not store files in a custom file system but rather just places them on any compatible underlying filesystem so even if the whole gluster daemon dies you end up with a bunch of disks containing your data which you can read without it which means I have an easy recovery for worst case scenario - just remove gluster altogether and re-install it.

Another benefit is extremely light installation. Where the other solutions require many daemons you have to configure, gluster runs as a single daemon and that's all you have to worry about.

### Kubernetes integration
Integrating Kubernetes with Gluster presented yet another challenge. Standard Kubernetes have a native Gluster storage driver which has two problems - it's not in K3s and it's deprecated because it's based on [Heketi](https://github.com/heketi/heketi) which has been unsupported for quite some time.

There is a project trying to take its place - [Kadalu](https://docs.kadalu.tech/k8s-storage/latest/). I have tried this several times and although it survived the "pull the plug" test well, after a couple of days it developed issues with the fuse mounts where the pods started randomly loosing access to the volumes. Another drawback is that it creates a fuse mount per pod which is a design which makes sense but my usecase is easier so why not simplify the whole set up.

I ended up separating the integration to two parts:
- Getting gluster volumes to the VMs hosting the Kubernetes cluster - I just create the FUSE mounts myself using Ansible and use [node-problem-detector](/selfhosted/node-problem-detector) to check if all volumes are healthy and can be accessed
- Provisioning Kubernetes PVCs/PVs - for this I use the [local-path-provisioner](https://github.com/rancher/local-path-provisioner) which treats the mounts as standard local directories and provides a clean and Kubernetes native way to handle the directories.

## Backup strategy

I use several tiers of back up to protect against various events which may occur:

| Event | Protection |
|------|----------------|
| Disk failure | Gluster replication |
| Node failure | Gluster replication |
| Site failure | Off-site backup |
| Human error | ZFS snapshots |
| Application error | ZFS snapshots |

The reason for using both snapshots and off-site back up is that I don't backup all data off-site, just the important and irreplacible part. Snapshots are also order of magnitude faster to recover than downloading data from a remove location.

### Off-site backup

I use [rClone](/selfhosted/rclone) to backup data periodically to Azure Blob Storage. I have considered these alternatives:
- **AWS S3 Glacier** - cheaper storage but more expensive retrieval
- **Backblaze B2** - expensive, it's a hot storage I don't need
- **pCloud** - for 0.5-1TB the lifetime deal is not worth it (when comparing against archive tiers of storage in AWS and Azure)

I am also using the [Azure Active Directory](/cloud/azure-active-directory) which makes it easier to keep all the stuff in one place.
