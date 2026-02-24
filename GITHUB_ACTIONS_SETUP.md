# GitHub Actions & Vercel CI/CD Setup Guide

## Overview

Three GitHub Actions workflows have been configured for automated testing and deployment:

1. **CI (Continuous Integration)** — `ci.yml`
2. **Production Deployment** — `deploy-vercel.yml`
3. **Preview Deployment** — `preview-deployment.yml`

---

## Workflow Details

### 1. CI Workflow (`ci.yml`)
**Triggers:** Push to `main`/`develop` + all pull requests

**Steps:**
- Install dependencies
- Run ESLint
- Build the project
- Verify build artifacts exist

**Purpose:** Validates code quality and build integrity on all changes

---

### 2. Production Deployment (`deploy-vercel.yml`)
**Triggers:** Push to `main` branch only

**Steps:**
- Install dependencies
- Run linter
- Build project
- Deploy to Vercel production

**Purpose:** Automatically deploys to production when changes are merged to main

---

### 3. Preview Deployment (`preview-deployment.yml`)
**Triggers:** All pull requests to `main`

**Steps:**
- Install dependencies
- Build project
- Deploy to Vercel as preview URL
- Comment preview link on PR

**Purpose:** Generates a unique preview URL for each PR for testing before merge

---

## Required Setup

### Step 1: Get Vercel Project Details

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your VirgilReality project
3. Go to **Settings** → **General**
4. Copy the following values:
   - **Project ID** (under "Project ID")
   - **Org ID** (your organization/team ID)

### Step 2: Create Vercel Token

1. Go to Vercel Account Settings → [Tokens](https://vercel.com/account/tokens)
2. Create a new token with these scopes:
   - `read` (for reading project info)
   - `write` (for deployments)
3. Copy the token value

### Step 3: Add GitHub Secrets

1. Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**
2. Create three new secrets:

| Secret Name | Value |
|---|---|
| `VERCEL_TOKEN` | Your Vercel token from Step 2 |
| `VERCEL_ORG_ID` | Organization ID from Step 1 |
| `VERCEL_PROJECT_ID` | Project ID from Step 1 |

**How to add secrets:**
- Click "New repository secret"
- Enter name and value
- Click "Add secret"

---

## Workflow Behavior

### On Pull Request
1. CI workflow runs (lint + build check)
2. If CI passes, preview deployment runs
3. Preview URL is posted as a comment on the PR
4. Review changes in the preview before merging

### On Push to Main
1. CI workflow runs
2. If all checks pass, production deployment automatically triggers
3. Your site updates at the production URL

### On Push to Develop
- Only CI workflow runs (no deployment)
- Good for testing branches without deploying

---

## Important Notes

- **Node Version:** Configured for Node 20.x (Ubuntu latest)
- **Build Command:** `tsc -b && vite build`
- **Output Directory:** `dist/`
- **Vercel Settings:** Ensure your Vercel project is configured to:
  - Build command: `npm run build`
  - Output directory: `dist`
  - Install command: `npm ci`

---

## Troubleshooting

### Deployment Fails
1. Check the workflow run logs in GitHub Actions
2. Verify all secrets are correctly set
3. Ensure Vercel project settings match (output dir should be `dist`)

### Preview URLs Not Appearing
1. Check if preview deployment workflow actually ran
2. Verify `VERCEL_TOKEN` is valid and not expired
3. Check GitHub Actions logs for errors

### Build Fails in CI
1. Run `npm run lint` locally to check for linting errors
2. Run `npm run build` locally to check for build errors
3. Ensure all dependencies are correctly declared in `package.json`

---

## Next Steps

1. Push the workflow files to your repository
2. Set up the three secrets in GitHub
3. Create a test PR to verify preview deployments work
4. Merge to main and verify production deployment
