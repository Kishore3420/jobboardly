// app/jobs/[id]/page.js
import { notFound } from 'next/navigation';
import { jobs } from '@/data/jobs';
import JobDetailClient from './JobDetailClient';

export async function generateStaticParams() {
	console.log('🏗️ Pre-generating', jobs.length, 'job pages...');

	return jobs.map((job) => ({
		id: job.id.toString(),
	}));
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params;
	const jobId = parseInt(resolvedParams.id);
	const job = jobs.find((j) => j.id === jobId);

	if (!job) {
		return {
			title: 'Job Not Found',
			description: 'The requested job could not be found.',
		};
	}

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://job-boardly.vercel.app/';
	const jobUrl = `${siteUrl}/jobs/${job.id}`;

	return {
		title: `${job.title} at ${job.company} | Job Portal`,
		description: `${job.title} position at ${job.company} in ${job.location}. ${job.description.substring(
			0,
			150
		)}...`,
		keywords: [job.title, job.company, job.location, ...job.skills],
		authors: [{ name: 'Job Portal' }],

		openGraph: {
			title: `${job.title} at ${job.company}`,
			description: `${job.title} position at ${job.company} in ${job.location}. Salary: ${job.salary}. Apply now!`,
			url: jobUrl,
			siteName: 'Job Portal',
			locale: 'en_US',
			type: 'website',
		},

		twitter: {
			card: 'summary_large_image',
			title: `${job.title} at ${job.company}`,
			description: `${job.title} position at ${job.company} in ${job.location}. Salary: ${job.salary}. Apply now!`,
		},

		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},

		alternates: {
			canonical: jobUrl,
		},
	};
}

export default async function JobDetailPage({ params }) {
	const resolvedParams = await params;
	const jobId = parseInt(resolvedParams.id);
	const job = jobs.find((j) => j.id === jobId);

	if (!job) {
		notFound();
	}

	const formatDateForSchema = (dateString) => {
		if (!dateString) return new Date().toISOString();

		const date = new Date(dateString);

		if (isNaN(date.getTime())) {
			const now = new Date();
			if (dateString.includes('day')) {
				const days = parseInt(dateString.match(/\d+/)?.[0] || 0);
				now.setDate(now.getDate() - days);
				return now.toISOString();
			} else if (dateString.includes('week')) {
				const weeks = parseInt(dateString.match(/\d+/)?.[0] || 0);
				now.setDate(now.getDate() - weeks * 7);
				return now.toISOString();
			} else if (dateString.includes('month')) {
				const months = parseInt(dateString.match(/\d+/)?.[0] || 0);
				now.setMonth(now.getMonth() - months);
				return now.toISOString();
			}
			return new Date().toISOString();
		}

		return date.toISOString();
	};

	const structuredData = {
		'@context': 'https://schema.org/',
		'@type': 'JobPosting',
		title: job.title,
		description: job.description,
		identifier: {
			'@type': 'PropertyValue',
			name: job.company,
			value: job.id.toString(),
		},
		hiringOrganization: {
			'@type': 'Organization',
			name: job.company,
		},
		jobLocation: {
			'@type': 'Place',
			address: {
				'@type': 'PostalAddress',
				addressLocality: job.location,
			},
		},
		baseSalary: {
			'@type': 'MonetaryAmount',
			currency: 'USD',
			value: {
				'@type': 'QuantitativeValue',
				value: job.salary?.replace(/[^\d]/g, '') || '0',
			},
		},
		employmentType: job.type?.toUpperCase() || 'FULL_TIME',
		datePosted: formatDateForSchema(job.posted),
		skills: job.skills || [],
		workHours: job.type === 'Full-time' ? '40 hours per week' : undefined,
	};

	return (
		<>
			{/* Structured Data Script */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>

			{/* Client Component for Interactive Features */}
			<JobDetailClient job={job} />
		</>
	);
}
export const dynamic = 'force-static';
export const revalidate = 86400;
