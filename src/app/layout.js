import './globals.css';
import { ApplicationProvider } from '@/contexts/ApplicationContext';
import Navbar from '@/components/Navbar';

export const metadata = {
	title: 'PattemJobs - AI-Powered Job Marketplace',
	description: 'Find your perfect job with AI-powered matching',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='bg-gray-50 min-h-screen'>
				<ApplicationProvider>
					<Navbar />
					<main>{children}</main>
				</ApplicationProvider>
			</body>
		</html>
	);
}
