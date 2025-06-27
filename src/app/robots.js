// app/robots.js
export default function robots() {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://job-boardly.vercel.app/';

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/private/', '/admin/'],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
