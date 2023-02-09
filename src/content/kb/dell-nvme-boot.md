---
title: Booting from an NVMe drive
tags: [ dell-poweredge ]
---

Dell servers (tested on 11th and 13th gen) can't boot from an NVMe drive natively. There is a workaround using [Clover](https://github.com/CloverHackyColor/CloverBootloader) which you install on a USB thumbdrive. The server then boots Clover from the thumbdrive which then passes the boot to the device configured in the `config.plist`.

To create the `config.plist` config file you must first know the PART_UUID of the partition it should boot from, see the [guide](https://forum.proxmox.com/threads/bootable-nvme-install-on-old-hardware-made-easy-with-pcie-adapter-and-clover.78120/) how to find it out and complete the `config.plist`.