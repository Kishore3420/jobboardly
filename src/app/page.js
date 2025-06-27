import Link from 'next/link';

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
							<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M13 7l5 5m0 0l-5 5m5-5H6'
								/>
							</svg>
						</Link>
					</div>

					<div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='text-center animate-slide-up' style={{ animationDelay: '0.1s' }}>
							<div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
								<svg
									className='w-8 h-8 text-blue-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-2'>AI-Powered Matching</h3>
							<p className='text-gray-600'>
								Our advanced AI analyzes your skills and preferences to find the perfect job matches.
							</p>
						</div>

						<div className='text-center animate-slide-up' style={{ animationDelay: '0.2s' }}>
							<div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
								<svg
									className='w-8 h-8 text-purple-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M13 10V3L4 14h7v7l9-11h-7z'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-2'>Instant Applications</h3>
							<p className='text-gray-600'>
								Apply to multiple jobs with one click and track your applications in real-time.
							</p>
						</div>

						<div className='text-center animate-slide-up' style={{ animationDelay: '0.3s' }}>
							<div className='w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
								<svg
									className='w-8 h-8 text-emerald-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
									/>
								</svg>
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
