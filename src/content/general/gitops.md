---
title: GitOps
menuIcon: /icons/git.png
menuOrder: 7
relatedArticles:
    kbTags:
    - lab-environment
---

To make sure knowledge does not get lost and applying changes is safe and repeatable I try to automate as much of change management as possible. For this I have split the homelab into three parts.

![Architecture diagram](/architecture.png)

## Cloud / Terraform

[Cloud repository](https://github.com/homecentr/cloud) contains [Terraform](https://www.terraform.io/) resource definitions for products which support it and make sense (Cloudflare, Azure).

Changes are applied using GitHub Actions workflows - dev environment whenever a feature branch is pushed. Production on a push to master branch.

## Platform / Ansible

[Platform repository](https://github.com/homecentr/platform) contains [Ansible](https://ansible.com) playbooks and roles which can take three freshly installed Proxmox machines and set up the whole stack from scratch. This is very useful when testing new changes because it allows me to spin up a non-production environment in a couple of minutes.

The roles take care of basic set up like ntp, ssh configuration and others all the way to configuring Proxmox SSO, creating VMs, setting up Gluster volumes, setting up K3s cluster etc. Because all changes are tested in a non-production environment I don't have to worry about the automation destroying any valuable data.

Changes made in this repository are currently applied manually from an arbitrary workstation. The long term plan is to have a local GitHub Actions runner which would apply them automatically.

## Kubernetes / Argo CD

[Kubernetes repository](https://github.com/homecentr/kubernetes) contains [Argo CD](/selfhosted/argo-cd) Applications which define everything running inside of the Kubernetes cluster. The reason why I didn't use Ansible for this as well is that Ansible is good at adding resources but it's no good in cleaning up after itself and given that I plan to try (and then possibly remove) apps I get my hands on I want to make sure the cluster is kept clean. [Argo CD](/selfhosted/argo-cd) tracks all resources it creates for each app and removes them on app removal. Another benefit is the great user interface.

Changes are applied automatically by pushing them to a specific branch which Argo CD monitors (you can change the branch using ansible variables in the [platform](https://github.com/homecentr/platform) repo).