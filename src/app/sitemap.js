// app/sitemap.js
import { jobs } from '@/data/jobs';

export default function sitemap() {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://job-boardly.vercel.app/';

	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${baseUrl}/jobs`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
	];

	const jobPages = jobs.map((job) => ({
		url: `${baseUrl}/jobs/${job.id}`,
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 0.8,
	}));

	return [...staticPages, ...jobPages];
}
