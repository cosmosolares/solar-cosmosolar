export default function robots() {
  const baseUrl = 'https://solar.com'; // Change to actual domain when deployed

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
