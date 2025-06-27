export async function fetchJob(id) {
	const res = await fetch(`${process.env.API_URL}/jobs/${id}`, {
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
	const res = await fetch(`${process.env.API_URL}/jobs`, {
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
