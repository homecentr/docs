---
title: Ubiquiti Unifi set controller IP address
tags:
    - ubiquiti
---

Unifi devices save the [Unifi Controller](/selfhosted/unifi-controller) inform URL address when they are adopted by a controller. To get the current value, SSH into a device and execute the `info` command.

To change the value, use the following command:

```bash
set-inform http://ip.of.the.controller:8080/inform
```