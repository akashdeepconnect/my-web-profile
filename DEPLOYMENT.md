# GitHub Pages Deployment Guide

This guide explains how to deploy your Next.js portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your project code ready to push

## Configuration Changes Made

The following changes have been made to enable GitHub Pages deployment:

### 1. next.config.ts
- Added `output: 'export'` for static site generation
- Added `basePath` configuration for GitHub Pages subdirectory
- Set `images.unoptimized: true` (GitHub Pages doesn't support Next.js Image Optimization)

### 2. GitHub Actions Workflow
- Created `.github/workflows/deploy.yml` for automatic deployment
- Builds and deploys on every push to the `main` branch

### 3. package.json
- Added `export` script for manual static export

## Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it whatever you like (e.g., `my-portfolio`)
3. Don't initialize with README (we already have files)

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save the settings

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live!

### Step 5: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example: `https://akashdeep.github.io/my-portfolio/`

## Updating Your Site

Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site.

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push
```

## Custom Domain (Optional)

To use a custom domain:

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add a CNAME record in your domain's DNS settings pointing to `YOUR_USERNAME.github.io`

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are in package.json
- Verify next.config.ts is correct

### Images Not Loading
- Make sure images are in the `public` folder
- Use relative paths: `/image.jpg` not `./image.jpg`
- Check that `images.unoptimized: true` is in next.config.ts

### 404 Errors
- Verify the basePath in next.config.ts matches your repo name
- Check that GitHub Pages is enabled in repository settings

### Styles Not Loading
- Clear browser cache
- Check browser console for errors
- Verify Tailwind CSS is properly configured

## Local Testing

To test the static export locally:

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
# You can serve it with any static server, for example:
npx serve out
```

## Notes

- GitHub Pages serves static files only (no server-side rendering)
- The site is rebuilt on every push to main branch
- Build time is typically 2-3 minutes
- Free hosting with 100GB bandwidth per month

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Review the [Next.js Static Export documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
3. Check [GitHub Pages documentation](https://docs.github.com/en/pages)

---

**Note**: This configuration uses Next.js static export, which means some Next.js features (like API routes, ISR, SSR) are not available. Your portfolio is a client-side application that works perfectly for this use case.