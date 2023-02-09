---
title: Argo CD
status: Live
menuIcon: https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/argocd.png
license: Open source (Apache)
sso: SSO via Azure AD (integration via native OIDC)
authorization: Driven by Azure AD groups, only administrators have access
mfa: Yes (YubiKey WebAuthN, Microsoft Authenticator)
downtimeImpact: Low - only change deployment impacted
failoverStrategy: Failover - pods rescheduled to another node
exposure: Ingress
managedBy: ansible
relatedArticles:
    links:
        - title: Argo CD documentation
          href: https://argo-cd.readthedocs.io/en/stable/
---

## Description

Argo CD deploys all resources in the cluster from the [kubernetes](https://github.com/homecentr/kubernetes) github repository. Deployment can be easily debugged via Web UI.

<br>

The service itself is deployed using ansible but the ingress definition is defined in the [kubernetes](https://github.com/homecentr/kubernetes) repository. This means that when you set up a clean cluster it may take a while until the Web UI is available (Argo CD has to deploy an ingress for itself).

## Considered alternatives
- **Flux CD** - I originally started with this, but it doesn't have native UI and you can't define dependencies between Helm and Raw bundles which was a dealbreaker for me, I use a mix of both (I apply CRDs via separate raw bundles),
- **Fleet** - I really liked this, the dependency management is really cool, the problem started when you need to debug a helm chart which you end up doing by reading console logs of the pods. The documentation is also not 100% up to date, I've found many features just by searching github issues and then found out they are implemented just not mentioned in the docs.