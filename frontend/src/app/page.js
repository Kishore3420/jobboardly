import Link from 'next/link';
import { HiOutlineChevronRight, HiOutlineSun, HiOutlineLightningBolt, HiOutlineCheck } from 'react-icons/hi';

export default function HomePage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				<div className='text-center'>
					<div className='animate-fade-in'>
						<h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
							Find Your Dream Job with
							<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
								{' '}
								AI Precision
							</span>
						</h1>
						<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
							Experience the future of job search with our AI-powered matching system. Get personalized
							job recommendations and discover opportunities that align perfectly with your skills.
						</p>
					</div>

					<div className='animate-slide-up'>
						<Link href='/jobs' className='btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2'>
							<span>Explore Jobs</span>
							<HiOutlineChevronRight className='w-5 h-5' />
						</Link>
					</div>

					<div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='text-center animate-slide-up' style={{ animationDelay: '0.1s' }}>
							<div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
								<HiOutlineSun className='w-8 h-8 text-blue-600' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-2'>AI-Powered Matching</h3>
							<p className='text-gray-600'>
								Our advanced AI analyzes your skills and preferences to find the perfect job matches.
							</p>
						</div>

						<div className='text-center animate-slide-up' style={{ animationDelay: '0.2s' }}>
							<div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
								<HiOutlineLightningBolt className='w-8 h-8 text-purple-600' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-2'>Instant Applications</h3>
							<p className='text-gray-600'>
								Apply to multiple jobs with one click and track your applications in real-time.
							</p>
						</div>

						<div className='text-center animate-slide-up' style={{ animationDelay: '0.3s' }}>
							<div className='w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
								<HiOutlineCheck className='w-8 h-8 text-emerald-600' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-2'>Quality Opportunities</h3>
							<p className='text-gray-600'>
								Every job is vetted to ensure you only see high-quality opportunities from top
								companies.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
