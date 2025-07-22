export default function JobDetailSkeleton() {
	return (
		<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<div className='bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse'>
				<div className='bg-gray-300 px-8 py-12'>
					<div className='h-8 bg-gray-400 rounded mb-4 w-3/4'></div>
					<div className='h-4 bg-gray-400 rounded mb-2 w-1/2'></div>
					<div className='h-4 bg-gray-400 rounded w-1/3'></div>
				</div>
				<div className='p-8'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='md:col-span-2'>
							<div className='h-6 bg-gray-300 rounded mb-4 w-1/4'></div>
							<div className='space-y-2'>
								<div className='h-4 bg-gray-200 rounded'></div>
								<div className='h-4 bg-gray-200 rounded'></div>
								<div className='h-4 bg-gray-200 rounded w-3/4'></div>
							</div>
						</div>
						<div className='space-y-6'>
							<div className='bg-gray-100 rounded-xl p-6'>
								<div className='h-5 bg-gray-300 rounded mb-4 w-1/3'></div>
								<div className='space-y-4'>
									<div className='h-4 bg-gray-200 rounded w-1/2'></div>
									<div className='h-4 bg-gray-200 rounded w-2/3'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
