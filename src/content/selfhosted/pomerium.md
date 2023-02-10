---
title: Pomerium
status: Live
menuIcon: /icons/pomerium.png
license: Open source (Apache)
runtimeEnvironment: Kubernetes
sso: SSO via Azure AD
authorization: Depends on usage, Azure AD groups are available
mfa: Yes, Yubikey is supported
downtimeImpact: High - all services authenticated by Pomerium are unavailable
failoverStrategy: Highly available - multiple instances running concurrently, database to be made HA
exposure: Dedicated IP (10.1.2.131)
managedBy: argocd
relatedArticles:
    links:
        - title: Pomerium documentation
          href: https://www.pomerium.com/docs
---
<br>

Pomerium is an identity aware authentication and authorization proxy. This means you can hide services which don't have any authentication implemented behind Pomerium and add this feature.

## Considered alternatives
- **Authelia** - good project but Pomerium configuration is more straightforward and Kubernetes integration is on a much higher level,
- **Authentik** - great project, used it for a while but it has many features I don't need given that I'm using an external identity provider ([Azure AD](/cloud/azure-active-directory)). If I wanted to host a full blown identity provider Authentik would be the way to go.