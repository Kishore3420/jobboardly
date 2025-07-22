'use client';

import Link from 'next/link';
import { useApplication } from '../contexts/ApplicationContext';

const Navbar = () => {
	const { appliedJobs } = useApplication();
	const appliedJobsCount = appliedJobs.length;
	return (
		<nav className='bg-blue-600 text-white shadow-lg'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16'>
					<div className='flex items-center'>
						<Link href='/jobs' className='text-xl font-bold hover:text-blue-200 transition-colors'>
							JobBoardly
						</Link>
					</div>
					<div className='flex items-center space-x-4'>
						<Link href='/jobs' className='hover:text-blue-200 transition-colors'>
							Browse Jobs
						</Link>
						<div className='bg-blue-700 px-3 py-1 rounded-full text-sm font-medium'>
							Jobs Applied: {appliedJobsCount}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
