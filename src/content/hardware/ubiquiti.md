---
title: Ubiquiti networking
menuIcon: /icons/ubiquiti.png
relatedArticles:
    kbTags:
    - ubiquiti
---

## Gateway / USG-PRO4

<br>

<img src="/ubiquiti-usg-pro4.png" alt="Ubiquiti USG-PRO4" class="content-center" style="max-width: 70%">

USG-PRO4 is predecessor of the Ubiquiti Dream Machine, it's rack mountable and easily managed via [Unifi Controller](/selfhosted/unifi-controller). The only annoyance is lack of SFP ports for internal LAN. So far it's been running in my rack for about two years and I had to restart it once during that time when it started randomly misbehaving.

## Core switch / US-24

<img src="/ubiquiti-us-24.png" alt="Ubiquiti US-24" class="content-center"  style="max-width: 70%">

<br>

US-24 is a 24-port managed (i.e. L3) switch. I bought a version without PoE because the PoE version was more than twice more expensive than this one at the time but it's been one of few regrets. I ended up having many more PoE devices than I anticipated and then ended up buying smaller PoE switches which make the setup more complicated.

## PoE L3 switch / US-8-150W
<br>
<img src="/ubiquiti-us-8-150w.png" alt="Ubiquiti US-8-150W" class="content-center" style="max-width: 70%">

<br>

US-8-150W is an 8-port PoE switch. Funny enough it's better than its successors which either have less PoE ports (lite version) or can handle load. The only drawback about this switch is that it's not officially supposed to be rack mounted because of the cooling. The switch itself has holes you can use to attach one rack ear but other one (the longer one) you have to buy yourself.

## Access Point / UAP-nanoHD
<br>
<img src="/ubiquiti-uap.jpg" alt="Ubiquiti Access point" class="content-center" style="max-width: 50%">

Wifi access points supporting the standards b/g/n/ac. I use nanoHDs to cover the habited floors of my house given that they have a better range and performance than the AC-Lite.

To all who will try to attach the Ubiquiti APs to a ceiling which is not hollow (i.e. doesn't have space between the ceiling you see in the room and the actual structural ceiling): tt's a pain in the ass to attach it. Especially when you run shielded SFTP cables everywhere through the house like I did. These cables are stiff and don't bend well. Based on my experience, either get cables which are easier to bend or put the AP somewhere else than the ceiling and don't forget to get a high ladder so that you can properly see how the notches align otherwise it's a looong trial and error experience...

## Access Point / UAP-AC-Lite

Wifi access points supporting the standards b/g/n/ac. I use it to provide wifi in the basement where I originally didn't think I would need wifi but that's where the electrical switchboard is and hence it's also where I need to install some of the home automation devices which don't support direct ethernet connection. Got this one second hand for just $30, a bargain!