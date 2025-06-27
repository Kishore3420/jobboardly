import Link from 'next/link';
import { HiOutlineOfficeBuilding, HiOutlineLocationMarker, HiOutlineChevronRight } from 'react-icons/hi';

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
								<HiOutlineOfficeBuilding className='w-4 h-4' />
								<span className='font-medium'>{job.company}</span>
							</div>
							<div className='flex items-center space-x-1'>
								<HiOutlineLocationMarker className='w-4 h-4' />
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
						<HiOutlineChevronRight className='w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200' />
					</div>
				</div>
			</div>
		</Link>
	);
}
