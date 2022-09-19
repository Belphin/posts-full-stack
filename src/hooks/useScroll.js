import { useEffect, useRef } from 'react';

export default function useScroll(parentRef, childRef, canLoad, callback) {
	const observer = useRef();

	useEffect(() => {
		const options = {
			root: parentRef.current,
			rootMargin: '0px',
			threshold: 0,
		};

		observer.current = new IntersectionObserver(([target]) => {
			if (target.isIntersecting && canLoad) {
				console.log(1);
				callback();
			}
		}, options);

		observer.current.observe(childRef.current);

		return function () {
			observer.current.unobserve(childRef.current);
		};
	}, [callback]);
}
