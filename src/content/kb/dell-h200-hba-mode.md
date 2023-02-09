---
title: Flashing PERC H200 to HBA mode
tags: [ dell-poweredge ]
---

By default H200 and H310 come in RAID only mode which doesn't play well with ZFS. There is a possibility to flash new firmware to the controller allowing it to switch to HBA mode which exposes the drives directly to the operating system.

Note: flashing the firmware disables the activity LEDs on the caddies. This is expected because the LEDs are driven by the controller which has no idea if the drive are doing anything when in HBA mode.

Follow the [guide](https://techmattr.wordpress.com/2016/04/11/updated-sas-hba-crossflashing-or-flashing-to-it-mode-dell-perc-h200-and-h310/) to flash the firmware. Please note that failure to follow the process may brick your controller.