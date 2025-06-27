// app/jobs/layout.js
export const metadata = {
	title: {
		template: '%s | Job Portal',
		default: 'Jobs | Job Portal',
	},
	description: 'Find your dream job with our comprehensive job listings.',
};

export default function JobsLayout({ children }) {
	return children;
}
