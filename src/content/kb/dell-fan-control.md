---
title: Controlling fan speed via IPMI
tags: [ dell-poweredge ]
relatedArticles:
    - name: Owner's manual
      href: https://dl.dell.com/manuals/all-products/esuprt_ser_stor_net/esuprt_poweredge/poweredge-r510_owner%27s%20manual_en-us.pdf
---

Fan speed can be controlled manually (for example when iDRAC does not allow you to go below a certain threshold). First you must enable IPMI and then you can send the commands below.

```
### Dell Fan Control Commands
#
#
# Hex to Decimal: http://www.hexadecimaldictionary.com/hexadecimal/0x1a/
#
#
# print temps and fans rpms
ipmitool -I lanplus -H <iDRAC-IP> -U <iDRAC-USER> -P <iDRAC-PASSWORD> sensor reading "Ambient Temp" "FAN 1 RPM" "FAN 2 RPM" "FAN 3 RPM"
#
# print fan info
ipmitool -I lanplus -H <iDRAC-IP> -U <iDRAC-USER> -P <iDRAC-PASSWORD> sdr get "FAN 1 RPM" "FAN 2 RPM" "FAN 3 RPM"
#
# enable manual/static fan control
ipmitool -I lanplus -H <iDRAC-IP> -U <iDRAC-USER> -P <iDRAC-PASSWORD> raw 0x30 0x30 0x01 0x00
#
# disable manual/static fan control
ipmitool -I lanplus -H <iDRAC-IP> -U <iDRAC-USER> -P <iDRAC-PASSWORD> raw 0x30 0x30 0x01 0x01
#
# set fan speed to 0 rpm
ipmitool -I lanplus -H <iDRAC-IP> -U <iDRAC-USER> -P <iDRAC-PASSWORD> raw 0x30 0x30 0x02 0xff 0x00
#
# set fan speed to 20 %
ipmitool -I lanplus -H <iDRAC-IP> -U <iDRAC-USER> -P <iDRAC-PASSWORD> raw 0x30 0x30 0x02 0xff 0x14
#
# set fan speed to 30 %
ipmitool -I lanplus -H <iDRAC-IP> -U <iDRAC-USER> -P <iDRAC-PASSWORD> raw 0x30 0x30 0x02 0xff 0x1e
#
# set fan speed to 100 %
ipmitool -I lanplus -H <iDRAC-IP> -U <iDRAC-USER> -P <iDRAC-PASSWORD> raw 0x30 0x30 0x02 0xff 0x64
```