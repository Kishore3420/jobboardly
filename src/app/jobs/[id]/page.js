'use client';
import { useParams, useRouter } from 'next/navigation';
import { jobs } from '@/data/jobs';
import { useApplication } from '@/contexts/ApplicationContext';

export default function JobDetailPage() {
	const params = useParams();
	const router = useRouter();
	const { applyToJob, isJobApplied } = useApplication();

	const job = jobs.find((j) => j.id === parseInt(params.id));

	if (!job) {
		return (
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center'>
				<h1 className='text-2xl font-bold text-gray-900 mb-4'>Job Not Found</h1>
				<button onClick={() => router.back()} className='btn-secondary'>
					Go Back
				</button>
			</div>
		);
	}

	const handleApply = () => {
		applyToJob(job.id);
	};

	const getMatchScoreColor = (score) => {
		if (score >= 90) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
		if (score >= 80) return 'bg-amber-100 text-amber-800 border-amber-200';
		return 'bg-blue-100 text-blue-800 border-blue-200';
	};

	const applied = isJobApplied(job.id);

	return (
		<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
				{/* Header Section */}
				<div className='bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-12 text-white'>
					<div className='flex items-start justify-between'>
						<div className='flex-1'>
							<h1 className='text-3xl md:text-4xl font-bold mb-4'>{job.title}</h1>
							<div className='flex flex-wrap items-center gap-6 text-blue-100 mb-6'>
								<div className='flex items-center space-x-2'>
									<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
										/>
									</svg>
									<span className='font-semibold text-lg'>{job.company}</span>
								</div>
								<div className='flex items-center space-x-2'>
									<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
									<span className='text-lg'>{job.location}</span>
								</div>
								<div className='flex items-center space-x-2'>
									<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
									<span className='text-lg'>{job.posted}</span>
								</div>
							</div>
						</div>

						<div className={`px-4 py-2 rounded-full border ${getMatchScoreColor(job.ai_match_score)}`}>
							<span className='font-bold'>{job.ai_match_score}% Match</span>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className='p-8'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='md:col-span-2'>
							<div className='mb-8'>
								<h2 className='text-2xl font-semibold text-gray-900 mb-4'>Job Description</h2>
								<div className='prose max-w-none text-gray-700'>
									<p>{job.description}</p>
								</div>
							</div>

							<div className='mb-8'>
								<h2 className='text-2xl font-semibold text-gray-900 mb-4'>Requirements</h2>
								<ul className='space-y-3 text-gray-700'>
									{job.skills.map((skill, index) => (
										<li key={index} className='flex items-start'>
											<svg
												className='w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M5 13l4 4L19 7'
												/>
											</svg>
											<span>{skill}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className='space-y-6'>
							<div className='bg-gray-50 rounded-xl p-6'>
								<h3 className='text-lg font-semibold text-gray-900 mb-4'>Job Overview</h3>
								<div className='space-y-4'>
									<div>
										<span className='block text-sm text-gray-500'>Salary</span>
										<span className='font-medium text-gray-900'>{job.salary}</span>
									</div>
									<div>
										<span className='block text-sm text-gray-500'>Job Type</span>
										<span className='font-medium text-gray-900'>{job.type}</span>
									</div>
									<div>
										<span className='block text-sm text-gray-500'>Location</span>
										<span className='font-medium text-gray-900'>{job.location}</span>
									</div>
								</div>
							</div>

							<button
								onClick={handleApply}
								disabled={applied}
								className={`w-full ${applied ? 'btn-disabled' : 'btn-primary'}`}
							>
								{applied ? (
									<div className='flex items-center justify-center space-x-2'>
										<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										<span>Applied</span>
									</div>
								) : (
									<div className='flex items-center justify-center space-x-2'>
										<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M12 6v6m0 0v6m0-6h6m-6 0H6'
											/>
										</svg>
										<span>Apply Now</span>
									</div>
								)}
							</button>

							<button onClick={() => router.back()} className='btn-secondary w-full'>
								Back to Jobs
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
