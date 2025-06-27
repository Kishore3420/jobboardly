'use client';
import { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
	const [appliedJobs, setAppliedJobs] = useState([]);

	//get applied jobs from localStorage if available
	const storedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
	if (storedJobs.length > 0) {
		setAppliedJobs(storedJobs);
	}
	// Save applied jobs to localStorage whenever they change
	localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));

	const applyToJob = (jobId) => {
		if (!appliedJobs.includes(jobId)) {
			setAppliedJobs((prev) => [...prev, jobId]);
		}
	};

	const isJobApplied = (jobId) => {
		return appliedJobs.includes(jobId);
	};

	const getAppliedJobsCount = () => {
		return appliedJobs.length;
	};

	return (
		<ApplicationContext.Provider
			value={{
				appliedJobs,
				applyToJob,
				isJobApplied,
				getAppliedJobsCount,
			}}
		>
			{children}
		</ApplicationContext.Provider>
	);
}

export function useApplication() {
	const context = useContext(ApplicationContext);
	if (!context) {
		throw new Error('useApplication must be used within an ApplicationProvider');
	}
	return context;
}
