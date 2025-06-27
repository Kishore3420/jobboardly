import { jobs } from '@/data/jobs';
import JobCard from '@/components/JobCard';

export default function JobsPage() {
	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<div className='text-center mb-12'>
				<h1 className='text-4xl font-bold text-gray-900 mb-4'>Discover Your Next Opportunity</h1>
				<p className='text-xl text-gray-600 mb-8'>{jobs.length} curated job opportunities waiting for you</p>

				<div className='flex flex-wrap justify-center gap-4 mb-8'>
					<div className='bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200'>
						<span className='text-sm font-medium text-gray-700'>🎯 AI-Matched</span>
					</div>
					<div className='bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200'>
						<span className='text-sm font-medium text-gray-700'>⚡ Quick Apply</span>
					</div>
					<div className='bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200'>
						<span className='text-sm font-medium text-gray-700'>🏆 Top Companies</span>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{jobs.map((job, index) => (
					<div key={job.id} className='animate-slide-up' style={{ animationDelay: `${index * 0.1}s` }}>
						<JobCard job={job} />
					</div>
				))}
			</div>
		</div>
	);
}
