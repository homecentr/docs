---
title: Dell PowerEdge R510
menuIcon: /icons/dell.png
relatedArticles:
    kbTags:
    - dell-poweredge
    links:
    - title: Owner's manual
      href: https://dl.dell.com/manuals/all-products/esuprt_ser_stor_net/esuprt_poweredge/poweredge-r510_owner%27s%20manual_en-us.pdf
---

<br>

![Dell PowerEdge R510](/dell-r510.png)

<br>

This was my first enterprise grade server. I was lucky to buy it for ~$100 in 2021 including the disks and memory. At that time I had no idea how good of a catch it was for the price... it has much lower performance to watt ratio compared to the [R530](./dell-poweredge-r530) but given how cheap it was, it has some buffer for the electricity cost :)

## Components

<table>
    <tr><th>CPU</th><td>TBA</td></tr>
    <tr><th>Memory</th><td>TBA</td></tr>
    <tr><th>GPU</th><td>TBA</td></tr>
    <tr><th>PSU</th><td>2x TBA</td></tr>
    <tr><th>RAID controller</th><td>PERC H200 flashed to HBA mode</td></tr>
    <tr><th>Remote management</th><td>iDRAC 6 Enterprise</td></tr>
    <tr>
        <th>Disks</th>
        <td>
            1x 500GB Kingston NV1 NVMe SSD<br>
            2x 3.5"/2TB/7200rpm Seagate<br>
            1x 3.5"/3TB/5400rpm WD Red
        </td>
    </tr>
    <tr>
    </tr>
</table>

## Extensibility

### PCIe slots
| Slot # | PCIe version | PCIe lanes | Height | Length | Usage |
|-------|---------------|-------------|-----|----------|--------|
| 1 | 2.0 | 4 | Full height |  | Dual port NIC for storage network connection |
| 2 | 2.0 | 4 | Full height |  | NVMe to PCIe adapter with SSD drive |
| 3 | 2.0 | 8 | Full height |  |  |
| 4 | 2.0 | 4 | N/A (RAID only) | N/A (RAID only) | PERC H200 |

### USB ports

| Port | Usage |
|-----|-------|
| Front 1 |  |
| Front 2 |  |
| Back 1 |  |
| Back 2 |  |
| Internal 1 | Boot drive |
| Internal 2 |  |
