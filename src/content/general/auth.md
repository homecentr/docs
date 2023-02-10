---
title: Auth & SSO
menuIcon: /icons/security.png
menuOrder: 9
---

My homelab uses the zero-trust approach which means that all traffic must be authenticated in some way. The exposed endpoints (usually web user interfaces) should use single sign-on for user convenience. The approach to integrate SSO differs depending on what capabilities each service has.

## Services compatible with OAuth/OIDC/SAML
These services are the easiest. You just need to register them with your OAuth/OIDC/SAML provider and configure the service. The benefit is that the service understand who is signed in and you can then assign permissions in service specific way and/or in your auth provider.

## Services without authentication
Services without authentication can be exposed via an auth proxy which handles both authentication and authorization like [Pomerium](/selfhosted/pomerium). The main drawback is that because these services are not built with authentication in mind, many users usually share the same permissions and context.

## Services with proprietary authentication
These are the worst ones to expose. Not just that you have to expose them through the proxy, you also have to figure a way to disable the built-in authentication. An example of this is for example [qBittorrent](/selfhosted/qbittorrent) which has completely useless authentication but at least you can disable it.

## Authorization
Pomerium allows you to define access on proxy level by assigning users to [Azure AD](/cloud/azure-active-directory) groups. The only annoyance is that you have to use group id in the configuration and not names which is a bit cumbersome but this is an Azure AD limitation.

## Why not selfhosted solution?
I have tested [Authentik](https://goauthentik.io/) and although I like it a lot I ended up using a cloud solution. The reason is that for Cloudflare based [remote access](/general/remote-access) I need to expose the auth provider to public internet where it can face DDoS and other attack. Authentik has not (Feb 2023) passed any security audit and a homelab hardware is by far not good enough to scale with an unavoidable attack. On the other hand SaaS provider like Microsoft is handling these attacks on a daily basis so it's easier to offload this risk to them. Especially when the product is provided free of charge 🙂