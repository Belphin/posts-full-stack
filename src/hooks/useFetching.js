import { useState } from 'react';

export default function (calback) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const fetching = async () => {
		try {
			setLoading(true);
			await calback();
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return [fetching, loading, error];
}
