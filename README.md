# Next.js Business Website Framework

A reusable **Next.js (App Router) + TypeScript framework** for building
fast, SEO‑ready small‑business websites.

This framework is designed so it can be **copied into a new repository**
and used as the starting point for a new website project.

Each new project becomes **fully independent** --- changes made in the
new project will **not affect this framework**.

---

# Project Structure

The framework keeps the **Next.js `app/` directory at the root** of the
repository.

## Key Concepts

Folder Purpose

---

`app/_lib` Business logic, configuration, data models
`app/_ui` Reusable UI components
`app/services` Service pages and service content
`app/contact-us` Contact form, validation, email logic
`app/languages` Multi‑language support
`app/_lib/org` Organisation profile, SEO, services, branding

---

# Starting a New Project From This Framework

Follow these steps to create a **new independent project** using this
framework.

The new project will **NOT be linked to this repository**.

---

# Step 1 --- Create a New Empty GitHub Repository

Create a new repository on GitHub.

Example:

    https://github.com/Bazrahimi/new-project-name

Important:

- Do NOT add a README
- Do NOT add `.gitignore`
- Do NOT add a license

The repository should be completely **empty**.

---

# Step 2 --- clone the new-project repository in local machine

---

# Step 3 --- Copy the Framework Into the New Project

Clone the framework temporarily:

```bash
git clone --depth 1 https://github.com/Bazrahimi/brothers-rendering.git _framework_tmp
```

Copy the framework files into the new project:

```bash
rsync -av --exclude ".git" _framework_tmp/ ./
```

Remove the temporary folder:

```bash
rm -rf _framework_tmp
```

Your project should now look like:

    new-project-name/
    ├── app/
    ├── package.json
    ├── next.config.ts
    └── ...

---

# Step 4 --- Verify Git Remote

Make sure the project only points to your new repository.

```bash
git remote -v
```

Expected result:

    origin  git@github.com:your-username/new-project-name.git (fetch)
    origin  git@github.com:your-username/new-project-name.git (push)

There should be **no reference to `brothers-rendering`**.

If the remote is using HTTPS, change it to SSH:

```bash
git remote set-url origin git@github.com:your-username/new-project-name.git
```

---

# Step 5 --- Commit the Framework as the Starting Point

Run:

```bash
git add -A
git commit -m "Initial project created from framework"
git push -u origin main
```

Now the new project is **fully independent**.

Updates in the new project **will not affect the framework repository**.

---

# Step 6 --- Install Dependencies

Install project dependencies:

```bash
pnpm install
```

Notes:

- `pnpm install` installs dependencies from `package.json`
- `pnpm i` is a shortcut for install
- `pnpm add` is used only when adding **new dependencies**

---

# Step 7 --- Run the Development Server

Start the development server:

```bash
pnpm dev
```

Open in browser:

    http://localhost:3000

---

---

# Step 8 — Create Environment Variables

This framework uses environment variables for API keys and SEO controls.

First create a local environment file from the example:

```bash
cp .env.example .env.local

------------------------------------------------------------------------


# Maintainer

Built by **Baz Rahimi**\
Kateb Technology
```
