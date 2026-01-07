# Astro SSG Blog — AWS S3 + CloudFront + GitHub Actions

Demo repository accompanying a series of technical articles on how to set up, serve, and deploy a static blog with **Astro (SSG)** on **AWS**, using **S3 + CloudFront** and **automated CI with GitHub Actions and OIDC**.

The goal is not to create a universal framework or template, but to show a **simple, realistic, and maintainable architecture**, designed for a technical portfolio or a well-made personal blog.

---

## What does this repository do?

This repo contains a complete example of:

- Static blog generated with **Astro (Static Site Generation)** using the official Astro demo as a base
- Build that produces flat HTML (`/dist`)
- Site publishing on **Amazon S3**
- Global distribution with **CloudFront**
- Own domain + HTTPS (outside the code, explained in the articles)
- **Automatic deployment** when pushing to main
- Secure authentication with AWS using OIDC (no access keys)

If the build fails, there is no deployment.  
If deployment occurs, the CloudFront cache is automatically invalidated.

---


## Why does this repository exist?

Because many technical portfolios talk about architecture, cloud, or CI/CD in abstract terms, but rarely do you see anything that is:

- small
- understandable
- reproducible
- and aligned with how real projects are worked on today

This repository serves as a **demonstrable technical basis** for explaining decisions, trade-offs, and design criteria in a simple context, without unnecessary noise.

---

## Project structure

Translated with DeepL.com (free version)

```text
.
├── src/                 # Código del blog Astro
├── public/              # Assets estáticos
├── dist/                # Output del build (SSG)
├── infra/               # Ejemplos de configuración AWS (IAM, policies, etc.)
│   ├── s3-bucket-policy.json
│   ├── iam-access-policy-s3-cloudfront.json
│   └── ...
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions (build + deploy)
├── package.json
└── README.md
```

### `infra/` directory

The `infra/` directory contains **example files** related to AWS:

* Trust policies for OIDC
* Minimum access policies for S3 and CloudFront
* Guideline configuration for IAM Roles

This is not complete infrastructure as code, but rather **practical references** designed to help you understand what permissions are needed and why.

---

## Deployment flow

```text
git push origin main
↓
GitHub Actions
↓
Build Astro (SSG)
↓
Sync dist/ → S3
↓
Invalidate CloudFront
↓
Updated website
```

* No long credentials
* No manual steps
* No complex pipelines

---

## Requirements

* Node.js (version aligned with `package.json`)
* npm
* AWS account (for S3 + CloudFront + Route 53)
* Repository on GitHub


---

## Related articles

Complete series explaining the context and technical decisions step by step:

1️⃣ Part 1: [A blog shouldn't be a SaaS](https://rodrigodemiguel.es/articles/astro-ssg-aws-s3-cloudfront-part-1/)  
2️⃣ Part 2: [Preparing an Astro blog with good judgment](https://rodrigodemiguel.es/articles/astro-ssg-aws-s3-cloudfront-part-2/)  
3️⃣ Part 3: [S3 + CloudFront to serve a fast and cheap static blog](https://rodrigodemiguel.es/articles/astro-ssg-aws-s3-cloudfront-part-3/)  
4️⃣ Part 4: [Custom domain with Route 53 and CloudFront for an Astro SSG blog](https://rodrigodemiguel.es/articles/astro-ssg-aws-s3-cloudfront-part-4/)  
5️⃣ Part 5: [Automate deployment of an Astro SSG blog with GitHub Actions and AWS](https://rodrigodemiguel.es/articles/astro-ssg-aws-s3-cloudfront-part-5/)  

> The articles explain the *why* and *how* of each decision.

---

## Final notes

This project prioritizes:

* clarity over complexity
* reasonable security over shortcuts
* easy long-term maintenance

It does not claim to be the most modern or comprehensive solution.
It aims to be the one that is **least disruptive and best fulfills its function**.

---

## Code origin & attribution

The initial codebase of this repository was generated using:

```
npm create astro@latest
```

The default project structure, configuration files, and example code produced by the Astro CLI have **not been modified** and are used strictly as a starting point for this demo.

All architectural decisions, deployment configuration, CI setup, AWS integration, and infrastructure examples included in this repository are original work created for educational and portfolio purposes.

Astro is an open-source project licensed under the MIT License.  
More information: https://astro.build