import { useEffect, useRef } from 'react';

export default function useScroll(element, canload, callback, elseCallback) {
	const observer = useRef();

	useEffect(
		(...args) => {
			observer.current = new IntersectionObserver(([target]) => {
				if (target.isIntersecting && canload) {
					callback(...args);
				} else if (elseCallback) {
					elseCallback(...args);
				}
			});
			observer.current.observe(element.current);

			return function () {
				observer.current.unobserve(element.current);
			};
		},
		[callback]
	);
}
