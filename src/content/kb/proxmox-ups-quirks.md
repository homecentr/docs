---
title: Proxmox USB quirk for Eaton UPS
tags:
    - proxmox
    - ups
---

The latest kernel has the USB HID quirk disabled which causes the Eaton UPS disconnect and connect constantly which crashes the NUT UPS driver. This can be fixed by adding the `usbhid.quirks=0x0463:0xffff:0x08` parameter to [kernel boot parameters via grub](https://linuxconfig.org/how-to-set-kernel-boot-parameters-on-linux).