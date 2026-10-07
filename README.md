# Agent Economy Blog

A curated blog about AI agents and the autonomous economy, built with Astro and deployed on Vercel.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
/
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes and pages
│   │   ├── blog/       # Blog posts
│   │   ├── index.astro # Homepage
│   │   └── about.astro # About page
│   └── content/        # Blog content (MDX files)
├── public/             # Static assets
├── astro.config.mjs    # Astro configuration
└── vercel.json         # Vercel deployment config
```

## 📝 Adding New Posts

Edit `src/pages/index.astro` and `src/pages/blog/index.astro` to add new posts to the list.

Create new post pages in `src/pages/blog/[slug].astro` or as separate `.astro` files.

## 🌐 Deployment to Vercel

### Option 1: GitHub + Vercel Integration (Recommended)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create agent-economy-blog --public --source=. --push
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Framework preset: Astro
   - Deploy

3. **Done!** Vercel will auto-deploy on every push.

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🎨 Customization

- Edit `src/layouts/Layout.astro` to change the site design
- Modify colors in the `<style>` tags
- Add new pages in `src/pages/`
- Add tags and categories as needed

## 📦 Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Vercel](https://vercel.com/) - Hosting and deployment
- Vanilla CSS - No frameworks, easy to customize

## 🔗 Links

- Live Site: https://agenteconomy.cn
- Astro Docs: https://docs.astro.build/

---

Built with 🤖 for the agent economy community.
