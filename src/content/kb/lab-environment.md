---
title: Creating lab environment
tags: [ lab-environment ]
---

To allow for safe testing of changes made to the cluster I always test them in a non-production environment before merging them to the master branch and applying them to the production environment. Given that I don't have two full sets of servers I had to get a bit resourceful.

I set up a Proxmox cluster inside of Hyper-V which may sound a bit counterintuitive but Hyper-V supports nested virtualization (you have to explicitly enable it for each VM) and if you have a decent desktop/laptop with at least 32 GB of RAM, you can spin up three Proxmox instances. It's not perfect in terms of performance but it's more than usable.

See [platform](https://github.com/homecentr/platform) repository which contains Powershell scripts which set the lab automatically from scratch, then just to follow the readme instructions.