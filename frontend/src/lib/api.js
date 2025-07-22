export async function fetchJob(id) {
	console.log(`Fetching job with ID: ${id}`);
	// console.log(`API URL: ${process.env.API_URL}/jobs/${id}`);
	if (!id) {
		throw new Error('Job ID is required');	
	}
	const res = await fetch(`http://localhost:5000/api/job/${id}`, {
		next: {
			revalidate: 3600,
			tags: ['job', `job-${id}`],
		},
	});

	if (!res.ok) {
		if (res.status === 404) {
			return null;
		}
		throw new Error('Failed to fetch job');
	}

	return res.json();
}

export async function fetchAllJobs() {
	// console.log(`Fetching all jobs from: ${process.env.API_URL}/jobs`);
	// if (!process.env.API_URL) {
	// 	throw new Error('API_URL is not defined in environment variables');
	// }
	const res = await fetch(`http://localhost:5000/api/jobs`, {
		next: {
			revalidate: 1800,
			tags: ['jobs'],
		},
	});

	if (!res.ok) {
		throw new Error('Failed to fetch jobs');
	}

	return res.json();
}
