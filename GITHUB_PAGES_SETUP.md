# GitHub Pages Configuration Guide

Follow these exact steps to configure GitHub Pages for your portfolio:

## Step 1: Push Your Code to GitHub

First, make sure all your code (including the `.github` folder) is pushed to GitHub:

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

## Step 2: Configure GitHub Pages Settings

### 2.1 Go to Your Repository Settings

1. Open your repository on GitHub (e.g., `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`)
2. Click on the **"Settings"** tab (top right, near the repository name)

### 2.2 Navigate to Pages Section

1. In the left sidebar, scroll down and click on **"Pages"**
   - It's under the "Code and automation" section
   - Look for the icon that looks like a page/document

### 2.3 Configure the Source

You'll see a section called **"Build and deployment"**

**IMPORTANT:** Select these exact settings:

1. **Source:** Select **"GitHub Actions"** from the dropdown
   - NOT "Deploy from a branch"
   - NOT "None"
   - Choose **"GitHub Actions"**

2. That's it! No need to select a branch or folder when using GitHub Actions.

### Visual Guide:

```
┌─────────────────────────────────────────────┐
│ Build and deployment                        │
├─────────────────────────────────────────────┤
│                                             │
│ Source                                      │
│ ┌─────────────────────────────────────┐   │
│ │ GitHub Actions                    ▼ │   │ ← Select this!
│ └─────────────────────────────────────┘   │
│                                             │
│ Your site is live at                        │
│ https://username.github.io/repo-name/       │
└─────────────────────────────────────────────┘
```

## Step 3: Verify Deployment

### 3.1 Check GitHub Actions

1. Go to the **"Actions"** tab in your repository (top menu)
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (green checkmark ✓)
4. If it fails (red X), click on it to see the error

### 3.2 Access Your Site

Once the workflow completes successfully:

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example:
- Username: `akashdeep`
- Repo: `my-portfolio`
- URL: `https://akashdeep.github.io/my-portfolio/`

## Common Issues

### Issue 1: "Source" dropdown doesn't show "GitHub Actions"

**Solution:** Make sure you've pushed the `.github/workflows/deploy.yml` file to your repository.

```bash
# Check if the file exists locally
ls -la .github/workflows/

# If it exists, push it
git add .github/
git commit -m "Add GitHub Actions workflow"
git push
```

### Issue 2: Workflow doesn't run automatically

**Solution:** Manually trigger it:
1. Go to Actions tab
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select "main" branch
5. Click "Run workflow"

### Issue 3: 404 Error on site

**Solution:** Check these:
1. Workflow completed successfully (green checkmark)
2. GitHub Pages is enabled (Settings → Pages)
3. Source is set to "GitHub Actions"
4. Wait 2-3 minutes after deployment completes

### Issue 4: Can't find "Pages" in Settings

**Solution:** 
1. Make sure your repository is **public** (not private)
2. If private, you need GitHub Pro to use GitHub Pages
3. To make public: Settings → General → Danger Zone → Change visibility

## Screenshot Locations

Here's where to find each setting:

1. **Repository Settings:**
   ```
   Your Repo → Settings (top right tab)
   ```

2. **Pages Section:**
   ```
   Settings → Pages (left sidebar, under "Code and automation")
   ```

3. **Source Dropdown:**
   ```
   Pages → Build and deployment → Source → GitHub Actions
   ```

4. **Actions Tab:**
   ```
   Your Repo → Actions (top menu, between Pull requests and Projects)
   ```

## Need More Help?

If you're still having issues:

1. **Check the workflow logs:**
   - Actions tab → Click on the failed workflow → Click on "build" or "deploy" job
   - Share the error message

2. **Verify file structure:**
   ```bash
   # Run this in your project directory
   ls -la .github/workflows/
   # Should show: deploy.yml
   ```

3. **Check repository visibility:**
   - Settings → General → scroll to bottom
   - Should say "Public" (not Private)

---

**Quick Checklist:**
- [ ] Code pushed to GitHub (including .github folder)
- [ ] Repository is public
- [ ] Settings → Pages → Source = "GitHub Actions"
- [ ] Workflow ran successfully (Actions tab)
- [ ] Waited 2-3 minutes after deployment
- [ ] Accessing correct URL: `https://USERNAME.github.io/REPO-NAME/`