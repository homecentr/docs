---
title: CoreDNS
status: Live
menuIcon: https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/coredns.png
license: Open source (Apache)
runtimeEnvironment: Kubernetes
sso: N/A
authorization: N/A
mfa: N/A
downtimeImpact: Critical - client devices cannot reach internet or any local services
failoverStrategy: Highly Available - the service runs in two separate instances (running on different nodes), each published on its own dedicated IP. Clients will automatically fail over to the secondary DNS if the primary one does not work.
exposure: Dedicated IPs (10.1.2.128 & 10.1.2.129)
managedBy: argocd
relatedArticles:
    links:
        - title: CoreDNS documentation
          href: http://coredns.io/
---
<br>

CoreDNS is used as a local DNS server for network clients. CoreDNS has plugins which allow it to handle client queries:
- static entries for known devices (e.g. printers, network devices etc.)
- dynamic entries for services hosted in the Kubernetes cluster
- forward remaining queries to external DNS servers (e.g. [Cloudflare](https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/)) and cache them to improve performance

<br>

The configuration in coredns overrides entries for the homelab public domain. This is by design to follow the [split horizon](/general/remote-access) strategy where locally the same DNS entries point to local addresses and externally they point to Cloudflare tunnel for [remote access](/general/remote-access).