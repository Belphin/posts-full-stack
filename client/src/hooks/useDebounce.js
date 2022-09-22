import { useCallback, useRef } from "react";

export default function useDebounce(callback, delay) {
	const timer = useRef();

	return useCallback(
		(...args) => {
			if (timer.current) clearTimeout(timer.current);
			timer.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);
}
