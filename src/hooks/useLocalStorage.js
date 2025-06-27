import { useState, useEffect } from 'react';
function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(initialValue);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		try {
			if (typeof window !== 'undefined' && window.localStorage) {
				const item = window.localStorage.getItem(key);
				if (item) {
					setStoredValue(JSON.parse(item));
				}
			}
		} catch (error) {
			console.error(`Error loading ${key} from localStorage:`, error);
		} finally {
			setIsLoaded(true);
		}
	}, [key]);

	useEffect(() => {
		if (isLoaded) {
			try {
				if (typeof window !== 'undefined' && window.localStorage) {
					window.localStorage.setItem(key, JSON.stringify(storedValue));
				}
			} catch (error) {
				console.error(`Error saving ${key} to localStorage:`, error);
			}
		}
	}, [key, storedValue, isLoaded]);

	return [storedValue, setStoredValue, isLoaded];
}

export { useLocalStorage };
