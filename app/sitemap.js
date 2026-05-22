import { getAllArticles } from '@/lib/articles';

export default function sitemap() {
  const baseUrl = 'https://solar.com'; // Change to actual domain when deployed

  // Base routes
  const routes = ['', '/ciencia', '/tecnologia', '/nosotros', '/checkout'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })
  );

  // No product routes needed

  // Dynamic articles
  const articleRoutes = getAllArticles().map((article) => ({
    url: `${baseUrl}/ciencia/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...routes, ...articleRoutes];
}
