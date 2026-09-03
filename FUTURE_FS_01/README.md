# Shaik Sameer - Professional Portfolio

A complete responsive full-stack portfolio website for showcasing skills, projects, career goals and contact information.

## Features
- Responsive design
- Home, About, Skills, Projects, Career and Contact sections
- Dark/light mode and mobile navigation
- Contact form with MySQL storage
- Node.js + Express REST API
- Projects API
- SEO-friendly metadata

## Stack
HTML5, CSS3, JavaScript, Node.js, Express.js, MySQL, Git and GitHub.

## Run
1. Run `backend/database/portfolio.sql` in MySQL.
2. Open terminal in `backend` and run `npm install`.
3. Copy `.env.example` to `.env` and enter your MySQL password.
4. Run `npm start`.
5. Open `frontend/index.html` or use VS Code Live Server.

## API
GET `/api/health`
GET `/api/projects`
POST `/api/projects`
POST `/api/contact`

## GitHub
```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Customize
Update your email, GitHub, LinkedIn, education and project links in `frontend/index.html`. Replace the localhost API URL in `frontend/js/script.js` after backend deployment.

## Author
**Shaik Sameer** — Full Stack Web Developer
