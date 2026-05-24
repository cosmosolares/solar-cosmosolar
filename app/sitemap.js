import { getAllArticles } from '@/lib/articles';

export default function sitemap() {
  const baseUrl = 'https://solar-cosmosolar.vercel.app';

  // Rutas estáticas reales del proyecto
  const routes = ['', '/acerca', '/comunidad', '/entorno', '/organismo'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Artículos dinámicos
  const articleRoutes = getAllArticles().map((article) => ({
    url: `${baseUrl}/articulos/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...routes, ...articleRoutes];
}
