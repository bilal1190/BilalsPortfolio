function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center bg-indigo-950">
			<div className="text-lg text-white dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
				
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					All Rights Reserved
				</a>
				.{' '}
				
			</div>
		</div>
	);
}

export default AppFooterCopyright;
