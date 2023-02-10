---
title: Homepage
status: Live
menuIcon: https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/homepage.png
license: Open source (GPL-3.0)
runtimeEnvironment: Kubernetes
sso: SSO via Azure AD (integration via native OIDC)
authorization: Accessible to all signed in users
mfa: Yes (YubiKey WebAuthN, Microsoft Authenticator)
downtimeImpact: Low - only the homepage itself is not available, users can use direct URLs to access individual services
failoverStrategy: Failover - pods rescheduled to another node
exposure: Ingress
managedBy: argocd
relatedArticles:
    links:
        - title: Homepage documentation
          href: https://gethomepage.dev/
---

Homepage is a clean and simple starting page to the homelab ecosystem. I really like the service auto-discovery and simple configuration via yaml.

## Considered alternatives
- **Heimdall** - allows changing the homepage via UI which I don't want,
- **Organizr** - overly complicated, unable to integrate SSO,
- **Homer** - fairly similar to Homepage, cool project but I'm not a fan of the design.