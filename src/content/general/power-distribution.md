---
title: "Power distribution"
menuIcon: /icons/power.png
menuOrder: 6
---

![Power distribution diagram](/power.png)

## Devices

All power consumptions have been measured using an [EMOS Wattmeter](https://merxu.com/en/offer/emos-wattmeter-power-consumption-meter-p5801-ce71555a-9da0-4ce2-90d3-c49ff2e18e62/) (similar to Kill-a-watt) at 230V. Devices were booted and idle for at least 5 minutes before capturing the reading.

<table class="power-consumption-table">
    <tr>
        <th>Device</th>
        <th>Power connector</th>
        <th>Idle power consumption</th>
    </tr>
    <tr>
        <td><a href="/hardware/dell-poweredge-r510">Dell Poweredge R510</a></td>
        <td><img src="/icons/iec-c14.png" alt="IEC C14" height="22"></td>
        <td>130W</td>
    </tr>
    <tr>
        <td><a href="/hardware/dell-poweredge-r530">Dell Poweredge R530</a></td>
        <td><img src="/icons/iec-c14.png" alt="IEC C14" height="22"></td>
        <td>105W</td>
    </tr>
    <tr>
        <td><a href="/hardware/hp-elitedesktop-800-g1">HP EliteDesk 800 G1</a></td>
        <td><img src="/icons/iec-c6.png" alt="IEC C6" height="22"></td>
        <td>15W</td>
    </tr>
    <tr>
        <td><a href="/hardware/ubiquiti#gateway--usg-pro4">Ubiquiti USG-PROD4</a></td>
        <td><img src="/icons/iec-c6.png" alt="IEC C6" height="22"></td>
        <td>19W</td>
    </tr>
    <tr>
        <td><a href="/hardware/ubiquiti#core-switch--us-24">Ubiquiti US-24</a></td>
        <td><img src="/icons/iec-c6.png" alt="IEC C6" height="22"></td>
        <td>15W</td>
    </tr>
    <tr>
        <td><a href="/hardware/ubiquiti#poe-l3-switch--us-8-150w">Ubiquiti US-8-150W</a></td>
        <td><img src="/icons/iec-c6.png" alt="IEC C6" height="22"></td>
        <td>15W.5<br>(with 3 connected PoE devices)</td>
    </tr>
    <tr>
        <td><a href="/hardware/tplink-sg1008pe">TP-Link SG1008PE</a></td>
        <td><img src="/icons/iec-c14.png" alt="IEC C6" height="22"></td>
        <td>33W<br>(with 7 connected PoE devices)</td>
    </tr>
    <tr>
        <td>Mikrotik LHG antenna</td>
        <td><img src="/icons/cee-76.png" alt="CEE 7/6" height="22"></td>
        <td>3.5W</td>
    </tr>
</table>

See the Dell servers' pages for detailed power consumption of different server configurations.

## Outages and breakdowns

| Incident | Impact |
|---------|----------|
| <nobr>Power outage < UPS capacity</nobr> | ✅ No impact (we get these approx. once every 2-3 months, they last less than a second but UPS still registers them) |
| <nobr>Power outage > UPS capacity</nobr> | ⚠️ Homelab shuts down until power restored |
| <nobr>UPS1 failure</nobr> | ⚠️ Internet access lost. Services available on internal network |
| <nobr>UPS2 failure</nobr> | ⚠️ Network lost |
| <nobr>Redundant PSU failure</nobr>  | ✅ Server keeps working and iDRAC raises an alert |
| <nobr>Non-redundant PSU failure</nobr>  | ✅ Services keep working but node redundancy is lost. |

As you can see from the above there are several single points of failure where a UPS failure can paralyze the network. This is due to the fact that the Ubiquiti hardware does not have redundant power supplies. This could be solved by an ATS (automatic transfer switch) but these are very expensive a given the likelyhood of a UPS failure I currently don't see it as worth it.

## UPS

I am using two [Eaton UPS](/hardware/eaton-5e-usb-ups) which are consumer grade simply because of the price. Enterprise grade UPS costs 5-7 times more and given that power outages are rara in Czechia they suffice for what I need. Great benefit is that both UPS have a USB port and are compatible with [Network UPS Tools](/selfhosted/nut).

## Shutdown procedure

When power outage occurs, the [NUT](/selfhosted/nut) will get notified by UPS over USB interface. NUT will wait a configured delay (~15 mins) to avoid shutting down the system because of a short term outage. The proxmox nodes will start their shutdown procedure which first shuts down all virtual machines and then the physical hosts themselves. The split between the two UPS is designed to let the security cameras work as long as possible.