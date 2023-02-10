---
title: Security
menuIcon: /icons/cyber-security.png
menuOrder: 8
---
Security is the upmost value when building anything, afterall it's my job. When I started building the homelab, as a developer I was looking out for tools which would help detect security issues. After all I normally write code but homelab means running someone else's code and following best practices for 3rd party tools which are often new to me. So far I am using these:

## Lynis

[Lynis](https://cisofy.com/lynis/) checks Linux systems against recommended best practices. It's up to you which you follow and which you don't but it's a great starting point.

## Kubescape

Kubernetes is a nightmare in terms of security. There is so many moving pieces and configuration options it's extremely easy to create a vulnerability. Ask anyone running containers as root or exposing wrong ports... [Kubescape](/selfhosted/kubescape) helps with this by scanning the cluster as a whole and scanning individual resources. I automatically scan all resources deployed to the cluster as a part of my [GitOps](/general/gitops) process.

## Snyk

[Snyk](https://snyk.io/) can do many things but I use it mostly for image scanning. In some cases I had to build custom container images. For those I scan them automatically in the CI pipeline.