# My Profile Website 

AI-generated website created for **Introduction to DevOps**.  
This repository demonstrates the use of Git for version control and GitHub for publishing a website.

---

## Purpose of the Repository

The purpose of this repository is to practice and demonstrate:

- Using **Git** to track changes to a project  
- Publishing code to a **public GitHub repository**  
- Understanding a basic **DevOps-style workflow** from local development to deployment  

This website was generated using AI tools and then managed, committed, and deployed using Git and GitHub.

### Git Setup and Workflow Steps
The following steps were taken to set up Git and push the project to GitHub:

1. Created a new local project directory for the website.
2. Initialized Git in the project using `git init`.
3. Added website files (HTML, CSS, and JavaScript) to the repository.
4. Staged changes using `git add .`.
5. Committed the files with clear and descriptive commit messages.
6. Created a public GitHub repository.
7. Connected the local repository to GitHub using `git remote add origin`.
8. Pushed the code to the main branch using `git push`.
9. Edited and maintained the README.md file directly in GitHub.
10. (Optional) Enabled GitHub Pages to host the website.

### Challenges and Solutions
One challenge was understanding how GitHub renders Markdown files and how commits work directly in the browser versus locally.  
This was resolved by using GitHub’s Preview feature before committing changes and reviewing commit history to confirm updates were applied correctly.


---

## Project Files



├── index.html        # Main homepage
├── project1.html     # Project page 1
├── project2.html     # Project page 2
├── project3.html     # Project page 3
├── styles.css        # Website styling
└── script.js         # JavaScript functionality

---

## GitHub Actions Continuous Deployment Setup

This repository was updated to use **GitHub Actions** for continuous deployment to GitHub Pages instead of the default automatic branch publishing.

### Objective

The goal of this update was to transition from GitHub’s automatic Pages publishing to a custom deployment pipeline using GitHub’s official Actions workflow. This provides more control, customization, and better alignment with DevOps best practices.

---

## Steps Completed

### 1. Disabled Automatic GitHub Pages Publishing
- Navigated to **Settings → Pages**
- Changed the deployment source to **GitHub Actions**

---

### 2. Created Workflow Directory
Created the following directory structure in the repository:



.github/workflows/


---

### 3. Added deploy.yml Workflow

Created a workflow file:



.github/workflows/deploy.yml


The workflow:

- Triggers on push to the `main` branch
- Allows manual triggering via `workflow_dispatch`
- Uses GitHub’s official Pages deployment actions
- Uploads the repository files as a deployment artifact
- Deploys to the `github-pages` environment

---

## How the Deployment Works

When changes are pushed to the `main` branch:

1. GitHub Actions automatically runs the workflow.
2. The workflow:
   - Checks out the repository
   - Configures GitHub Pages
   - Uploads the site files as an artifact
   - Deploys the website to the `github-pages` environment
3. The site becomes available at the GitHub Pages URL.

---

## Manual Deployment

To manually trigger deployment:

1. Navigate to the **Actions** tab.
2. Select **Deploy static content to Pages**.
3. Click **Run workflow**.
4. Confirm the deployment completes successfully.

---

## Challenges Encountered

- Initial push was rejected because the remote repository contained commits not present locally.
- Resolved by running:



git pull origin main --rebase


- Windows file locking during rebase required manual cleanup of temporary Git rebase directories.
- After resolving these issues, the workflow successfully deployed the site.

---

## Live Website

The deployed website is available at:

https://loopsafe-dev.github.io/My-Profile-Website/

---

## DevOps Concepts Demonstrated

- Continuous Deployment (CD)
- GitHub Actions Workflow Configuration
- YAML-based pipeline setup
- Version control with Git
- CI/CD troubleshooting and debugging
- Deployment environment management