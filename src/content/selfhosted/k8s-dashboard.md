---
title: K8s Dashboard
status: Live
menuIcon: https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/kubernetes-dashboard.png
license: Open source (Apache)
runtimeEnvironment: Kubernetes
sso: SSO via Azure AD (integration via Pomerium proxy)
authorization: Driven by Kubernetes Cluster Roles and Users, user objects are created via Argo CD
mfa: Yes (YubiKey WebAuthN, Microsoft Authenticator)
downtimeImpact: Low - only the service itself is not available
failoverStrategy: Failover - pods rescheduled to another node
exposure: Ingress
managedBy: argocd
relatedArticles:
    links:
        - title: Kubernetes Dashboard documentation
          href: https://github.com/kubernetes/dashboard/tree/master/docs
---
<br>

Easy way to see the "source of truth" of the cluster state. I normally use [Lens](https://k8slens.dev/) for development but when I am on a PC where it's not installed, kubernetes dashboard is a decent alternative. I still hope they will turn [Lens](https://k8slens.dev/) into a Web UI though 🤞
