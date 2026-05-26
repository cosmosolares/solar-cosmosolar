import fs from 'fs';
import path from 'path';

// Directory that contains markdown content files
const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Read all markdown files in the `content` folder and return an array of article
 * objects. Each object contains the slug (derived from filename) and the front‑matter
 * fields (title, date, category, image, etc.) plus the raw markdown content.
 */
export function getAllArticles() {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(contentDirectory);

  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = parseFrontMatter(fileContents);

      const article = {
        slug,
        ...data,
        content,
      };

      // Normalize image paths to top‑level /images directory
      if (article.image && article.image.startsWith('/images/ciencia/')) {
        article.image = article.image.replace('/images/ciencia/', '/images/');
      }
      return article;
    })
    // Sort newest first (assuming `date` is ISO string)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return articles;
}

/** Return a single article by its slug */
export function getArticleBySlug(slug) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = parseFrontMatter(fileContents);
  const htmlContent = parseMarkdown(content);
  return {
    slug,
    ...data,
    content,
    htmlContent,
  };
}

/** Filter articles by category (case‑insensitive) */
export function getArticlesByCategory(category) {
  const all = getAllArticles();
  return all.filter(
    (article) => article.category && article.category.toLowerCase() === category.toLowerCase()
  );
}

/** Parse front‑matter (YAML‑like) from a markdown file */
function parseFrontMatter(fileContents) {
  const lines = fileContents.split('\n');
  const data = {};
  let contentStart = 0;

  if (lines[0] === '---') {
    let i = 1;
    for (; i < lines.length && lines[i] !== '---'; i++) {
      const line = lines[i];
      const colonIdx = line.indexOf(':');
      if (colonIdx !== -1) {
        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();
        // Strip surrounding quotes if present
        if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
          value = value.slice(1, -1);
        }
        data[key] = value;
      }
    }
    contentStart = i + 1;
  }

  const content = lines.slice(contentStart).join('\n').trim();
  return { data, content };
}

/** Very lightweight markdown → HTML conversion used for article pages */
function parseMarkdown(markdown) {
  const lines = markdown.split('\n');
  const html = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Lists
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList) {
        html.push('<ul class="markdown-list">');
        inList = true;
      }
      html.push(`<li>${formatInline(line.slice(2))}</li>`);
      continue;
    } else if (inList) {
      html.push('</ul>');
      inList = false;
    }

    if (!line) continue;

    if (line.startsWith('### ')) {
      html.push(`<h3>${formatInline(line.slice(4))}</h3>`);
    } else if (line.startsWith('## ')) {
      html.push(`<h2>${formatInline(line.slice(3))}</h2>`);
    } else if (line.startsWith('# ')) {
      html.push(`<h1>${formatInline(line.slice(2))}</h1>`);
    } else if (line.startsWith('> ')) {
      html.push(`<blockquote>${formatInline(line.slice(2))}</blockquote>`);
    } else {
      html.push(`<p>${formatInline(line)}</p>`);
    }
  }

  if (inList) html.push('</ul>');
  return html.join('\n');
}

function formatInline(text) {
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
  formatted = formatted.replace(/_(.*?)_/g, '<em>$1</em>');
  return formatted;
}
