---
title: Dell PowerEdge R530
menuIcon: /icons/dell.png
relatedArticles:
    kbTags:
    - dell-poweredge
    links:
    - title: Owner's manual
      href: https://dl.dell.com/topicspdf/poweredge-r530_owners-manual_en-us.pdf
---

<br>

![Dell PowerEdge R530](/dell-r530.png)

<br>

Compared to [R510](/hardware/dell-poweredge-r510) this server is much faster and with better performance per watt ratio. 8 hdd slots make it perfect for a hyperconverged cluster. Another great thing is that it supports both Xeon v3 and v4 CPUs which means an easy and fairly cheap upgrade path.

## Components

<table>
    <tr><th>CPU</th><td>2x Xeon E5-2630L v3@1.80 GHz</td></tr>
    <tr><th>Memory</th><td>4x 32GB DDR4 2R 1866 MHz</td></tr>
    <tr><th>GPU</th><td>nVidia Quadro P400</td></tr>
    <tr><th>PSU</th><td>2x Dell 750W (0V1YJ6A00)</td></tr>
    <tr><th>RAID controller</th><td>PERC H730</td></tr>
    <tr><th>Remote management</th><td>iDRAC 8 Express</td></tr>
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
| Slot # | PCIe version | PCIe lanes | Height | Length | Associated CPU | Usage |
|-------|---------------|-------------|-----|----------|-------------|--------|
| 1 | 3.0 | 16 | Full height | 16 | #1 | GPU Quadro P400 |
| 2 | 3.0 | 8 | Full height | 8 | #1 |  |
| 3 | 3.0 | 16 | Low profile | 16 | #1 | NVMe to PCIe adapter with SSD drive |
| 4 | 2.0 | 1 | Low profile | 1 | 1 (Controller Hub) |  |
| 5 | 2.0 | 4 | Low profile | 8 | 1 (Controller Hub) |  |

### USB ports

| Port | Usage |
|-----|-------|
| Front 1 |  |
| Front 2 |  |
| Back 1 | Coral |
| Back 2 |  |
| Internal | Boot drive |

## Power consumption

All power consumptions have been measured using an [EMOS Wattmeter](https://merxu.com/en/offer/emos-wattmeter-power-consumption-meter-p5801-ce71555a-9da0-4ce2-90d3-c49ff2e18e62/) (similar to Kill-a-watt) at 230V. Devices were booted and idle for at least 5 minutes before capturing the reading.

### Base setup
Server had the same CPUs, RAM, PSUs and GPU as described in the table above. All disks except for the system SSD and a USB thumbdrive were removed.

#### Configuration
- Fans at `37% PWM/7440 RPM`
- System profile set to `Performance-per-watt (OS)`
- Power configuration redundancy set to `Redundant`
- Hot spare `enabled`
- PFC `enabled`
- OS CPU governor set to `performance`
- CPU C-states `enabled` (cores in C6 state when measured)

Base consumption **88W**


### Alternative configurations
| Change | Consumption | Difference |
|-------|-------------------|----------|
| Fans set manually to `20% PWM` | 81W | -7W |
| Fans set manually to `10% PWM` | 80W | -8W |
| OS CPU governor set to `powersave` | 87W | -1W |
| Hot spare `disabled` | 97W | +9W |
| One PSU removed | 83W | -4W |
| nVidia Quadro P400 removed | 79W | -9W |
| nVidia Quadro P400 - fan disabled | 88W | none |
| nVidia Quadro P400 - GPU in P8 mode | 86W | -2W |
| Added one 3.5"/3TB/5400rpm WD Red drive | 92 W | +4W |
| Added one 2.5"/1TB/7200rpm SAS drive | 94.5W | +6.5W |
| Added one 3.5"/2TB/7200rpm SAS drive | 96.5W | +8.5W |
