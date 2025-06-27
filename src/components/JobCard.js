import Link from 'next/link';

export default function JobCard({ job }) {
	const getMatchScoreColor = (score) => {
		if (score >= 90) return 'badge-success';
		if (score >= 80) return 'badge-warning';
		return 'badge-info';
	};

	const getMatchScoreText = (score) => {
		if (score >= 90) return 'Excellent Match';
		if (score >= 80) return 'Good Match';
		return 'Potential Match';
	};

	return (
		<Link href={`/jobs/${job.id}`}>
			<div className='card p-6 cursor-pointer group'>
				<div className='flex justify-between items-start mb-4'>
					<div className='flex-1'>
						<h3 className='text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2'>
							{job.title}
						</h3>
						<div className='flex items-center space-x-4 text-gray-600 mb-3'>
							<div className='flex items-center space-x-1'>
								<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
									/>
								</svg>
								<span className='font-medium'>{job.company}</span>
							</div>
							<div className='flex items-center space-x-1'>
								<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								<span>{job.location}</span>
							</div>
						</div>
					</div>

					<div className='flex flex-col items-end space-y-2'>
						<div className={`badge ${getMatchScoreColor(job.ai_match_score)}`}>
							{job.ai_match_score}% {getMatchScoreText(job.ai_match_score)}
						</div>
						<span className='text-sm text-gray-500'>{job.posted}</span>
					</div>
				</div>

				<p className='text-gray-600 mb-4 line-clamp-2'>{job.description}</p>

				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-4'>
						<span className='text-sm font-semibold text-gray-900'>{job.salary}</span>
						<span className='text-sm text-gray-500'>{job.type}</span>
					</div>

					<div className='flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700'>
						<span>View Details</span>
						<svg
							className='w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
						</svg>
					</div>
				</div>
			</div>
		</Link>
	);
}
