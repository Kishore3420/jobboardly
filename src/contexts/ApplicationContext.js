'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
	const [appliedJobs, setAppliedJobs, isLoaded] = useLocalStorage('appliedJobs', []);

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
				isLoaded,
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
