import cl from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.loadingio}>
				<div className={cl.ldio}>
					<div>
						<div>
							<div></div>
						</div>
						<div>
							<div></div>
						</div>
						<div>
							<div></div>
						</div>
						<div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
