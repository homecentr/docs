---
title: Architecture
menuIcon: /icons/structural.png
menuOrder: 2
---

![Architecture diagram](/architecture.png)

## Hardware
My homelab is running on two "full-sized" Dell servers ([R510](../hardware/dell-poweredge-r510) and [R530](../hardware/dell-poweredge-r530)) and one [mini PC](../hardware/hp-elitedesktop-800-g1). The mini PC is used as an "arbiter" which allows maintaining cluster quorum and is really just a servant to the other two servers. It does not run any workload except for critical services without which the network would not work (DNS, DHCP etc.) in case one or both Dell servers dies.

## Proxmox VE

Proxmox allows me to separate different the workloads. The majority of the resources are utilized by Kubernetes nodes which run the apps. Occasionally I use the same hardware to run other workloads e.g. development environments or GitHub Actions runners for my side projects. This allows me to run this workload on separate VMs easily without interfering with the Kubernetes nodes which run the services I rely on daily.

I am running the nodes in a clustered mode but at this point it is just to be able to manage all Proxmox nodes from one user interface. I am not using any cluster availability features because Kubernetes has more advanced handling of these scenarios.

## Gluster
You can find more details on why I chose Gluster in the [storage](./storage) page but long story short with the hardware I have it seems to be the best fit.

I am running Gluster directly on Proxmox level for two reasons:
- To keep the Kubernetes nodes "stateless" (i.e. I can remove and a new VM from scratch without any gluster volume rebuilding/changes). This is to keep managing Kubernetes easier, if a nodes starts behaving funky I don't have to find the root cause, I can just replace it in a bit.
- To keep the storage close to the disks. I don't want the VMs to know which volume is on which disk, they shouldn't need to care about it. From the Kubernetes nodes' point of view it's like cloud storage that is provided to them as a service.

## Kubernetes

At the beginning I should say I am not a big fan of [Kubernetes](./kubernetes) but in on-premise scenarios it makes sense. I have tried simplifying the lab to use Docker Swarm but that's unfortunately not properly supported anymore and no matter what you do at one point you start needing some of the K8s' features and then it's just easier to give up and use what the rest of the community is using. Learning curve is steep but at least it's a good CV item 🙂

Another reason for Kubernetes is [MetalLB](./kubernetes) which allows me publishing services under dedicated ip addresses. This is beneficial for networks isolation because if a service has a dedicated IP, I can control inbound traffic on network level (see my [network](./network) design where it comes handy).

## Cloud components

It does not make sense to self host all components and in some cases it's not really even possible (e.g. remote off-site backup storage). For this reason I use a couple of cloud SaaS products in most cases these are available free of charge and I choose products which have a likelyhood of remaining free and open in the long run to avoid vendor lock in.
