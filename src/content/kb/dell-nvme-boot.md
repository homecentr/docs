---
title: Booting from an NVMe drive
tags: [ dell-poweredge, proxmox ]
---

Dell servers (tested on 11th and 13th gen) can't boot from an NVMe drive natively. There is a workaround using [Clover](https://github.com/CloverHackyColor/CloverBootloader) which you install on a USB thumbdrive. The server then boots Clover from the thumbdrive which then passes the boot to the device configured in the `config.plist`. Example of the config is shown below:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Boot</key>
  <dict>
    <key>Timeout</key>
    <integer>5</integer>
    <key>DefaultVolume</key>
    <string>LastBootedVolume</string>
  </dict>
  <key>GUI</key>
  <dict>
    <key>Custom</key>
    <dict>
      <key>Entries</key>
      <array>
        <dict>
          <key>Path</key>
          <string>\EFI\systemd\systemd-bootx64.efi</string>
          <key>Title</key>
          <string>Proxmox</string>
          <key>Type</key>
          <string>Linux</string>
          <key>Volume</key>
          <string>!!!TBA!!!</string>
          <key>VolumeType</key>
          <string>Internal</string>
        </dict>
      </array>
    </dict>
  </dict>
</dict>
</plist>
```

In the example above replace the partition UUID (all letters must be capital). How to find out the UUID:
- Start the machine and boot into Clover
- In Clover GUI press F3 and choose the partition
- Once booted into Proxmox or other linux distro run `blkid` to show UUIDs of the partitions (for proxmox it's the partition with number 2 at the end)
- Update the `config.plist` on the flashdrive with the desired partition and reboot

Please note that the ID points to a partition, not a hard drive and hence you need to do this excercise again when you reinstall the system.