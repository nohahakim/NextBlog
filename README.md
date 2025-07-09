# Web Dev Blog – Next.js 15

A **content-driven blog** built with the Next.js **App Router**, Markdown files for posts, and a MongoDB-backed contact form.  
Use it as a starting point for personal or team blogs focused on front-end & full-stack development.

---

## ✨ Features

| Area                | Details                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| Core                | **Next.js 15** (App Router), React 19, Incremental Static Regeneration (`revalidate`)                          |
| Content             | Write posts in plain **Markdown** (`posts/*.md`) with front-matter (title, date, excerpt, flag for “featured”) |
| Styling             | **CSS Modules** + CSS custom-properties for dark/light friendly palette                                        |
| Syntax Highlighting | Lightweight **Prism** build – only JavaScript & CSS registered to keep the bundle small                        |
| Contact form        | `/contact` page ➜ **/api/contact** route ➜ MongoDB collection **messages** (single `DATABASE_URL` env var)     |
| SEO                 | Dynamic `<title>` & `<meta>` from post data and layout template                                                |
| Responsive UI       | Mobile-first layout, auto-scaling image grid                                                                   |
| Ready for prod      | `.gitignore`, `next.config.mjs`, sample `favicon.ico`, Vercel-friendly                                         |

---

## 🛠️ Tech Stack

- **Next.js 15**
- **React 19**
- **MongoDB (6 driver)**
- `react-markdown`
- `react-syntax-highlighter`
- `gray-matter`

---

## 🚀 Quick Start

```bash
# 1 – Clone and install
git clone <your-fork-url> web-dev-blog
cd web-dev-blog
npm install   # or pnpm / yarn / bun

# 2 – Add env vars
cp .env.example .env
# Edit .env and set DATABASE_URL="mongodb+srv://<user>:<pass>@cluster0.mongodb.net/blog?retryWrites=true&w=majority"

# 3 – Run locally
npm run dev
open http://localhost:3000
```

---

## 📁 Project Structure (high-level)

```
app/              # App Router entrypoints
  page.js         # Home → hero + featured posts
  posts/[…]/      # Dynamic post routes
  api/contact/    # Route handler → saves messages in MongoDB
components/       # Reusable UI & layout pieces
lib/posts-util.js # Markdown helpers: parse, sort, feature filter
posts/            # Markdown content (add your own!)
public/           # Static images (posts & avatar)
```

## 🔧 Available Scripts

| Command         | What it does                                                       |
| --------------- | ------------------------------------------------------------------ |
| `npm run dev`   | Start dev server on [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Create production build                                            |
| `npm run start` | Run the compiled build                                             |
| `npm run lint`  | ESLint checks                                                      |

---

## ⚙️ Environment Variables

| Name           | Required | Purpose                                                      |
| -------------- | -------- | ------------------------------------------------------------ |
| `DATABASE_URL` | **Yes**  | MongoDB connection string used in `app/api/contact/route.js` |

---

## 📝 Writing Posts

1. Create a file in `posts/` (e.g., `my-first-post.md`).

2. Add front-matter:

   ```yaml
   ---
   title: "My First Post"
   date: "2025-07-09"
   excerpt: "What I learned building with Next.js."
   image: "my-first-post.png"
   isFeatured: true
   ---
   ```

3. Write Markdown below the front-matter.

4. Add any images to `public/images/posts/my-first-post/`.

---

## 🐳 Deployment

The project works out-of-the-box on **Vercel**:

1. Push to GitHub.
2. Create a new Vercel project and import the repo.
3. Add the `DATABASE_URL` env var in Vercel dashboard.
4. Deploy – ISR and API routes are handled automatically.

---

## 📄 License

MIT – see [LICENSE](LICENSE) for details.
