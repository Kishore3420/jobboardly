// app/jobs/[id]/JobDetailClient.js
'use client';
import { useRouter } from 'next/navigation';
import { useApplication } from '@/contexts/ApplicationContext';
import {
	HiOutlineOfficeBuilding,
	HiOutlineLocationMarker,
	HiOutlineClock,
	HiOutlineCheck,
	HiOutlinePlus,
} from 'react-icons/hi';

export default function JobDetailClient({ job }) {
	const router = useRouter();
	const { applyToJob, isJobApplied } = useApplication();

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
									<HiOutlineOfficeBuilding className='w-5 h-5' />
									<span className='font-semibold text-lg'>{job.company}</span>
								</div>
								<div className='flex items-center space-x-2'>
									<HiOutlineLocationMarker className='w-5 h-5' />
									<span className='text-lg'>{job.location}</span>
								</div>
								<div className='flex items-center space-x-2'>
									<HiOutlineClock className='w-5 h-5' />
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
											<HiOutlineCheck className='w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0' />
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
										<HiOutlineCheck className='w-5 h-5' />
										<span>Applied</span>
									</div>
								) : (
									<div className='flex items-center justify-center space-x-2'>
										<HiOutlinePlus className='w-5 h-5' />
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
