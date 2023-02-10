---
title: qBittorrent
status: Evaluated
menuIcon: https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/qbittorrent.png
license: Open source (MIT)
runtimeEnvironment: Kubernetes
sso: SSO via Azure AD (integration via Pomerium proxy)
authorization: Driven by Azure AD groups - all authenticated users have access
mfa: Yes (YubiKey WebAuthN, Microsoft Authenticator)
downtimeImpact: Low - only service itself is down
failoverStrategy: Failover - pods rescheduled to another node
exposure: Ingress
managedBy: argocd
relatedArticles:
    links:
        - title: qBittorrent official site
          href: https://www.qbittorrent.org/
---

## Description

qBittorrent is a simple Torrent downloader with a Web UI. This Web UI has a built-in authentication which is useless because it can't integrate SSO. Hence it has to be disabled via an initial config file.