import {
	FiGithub,
	FiLinkedin,
	FiFacebook,
	FiInstagram,	
} from 'react-icons/fi';
// import SiReplit from 'react-icons/si'
import AppFooterCopyright from '../components/shared/AppFooterCopyright';
// import ScrollToTop from "react-scroll-to-top";

const socialLinks = [
	
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/bilal1190',
	},
	{
		id: 2,
		icon: <FiLinkedin />,  	 		
		url: 'https://www.linkedin.com/in/bilal-hamza-bb52651bb/',
	},
	{ 	
		id: 3,
		icon: <FiFacebook />,
		url: 'https://www.facebook.com/profile.php?id=100005406527625',
	},
	{ 	
		id: 4	,
		icon: <FiInstagram />,
		url: 'https://instagram.com/bh0_6?igshid=OGQ5ZDc2ODk2ZA==',
	},
];

function Footer() {
	return (
		<>
		<div className="mx-auto bg-cd-drak">	
			<div className="pt-10 sm:pt-30  border-t-2 border-slate-600">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28" >
					<p className="text-3xl sm:text-4xl text-white dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 bg-indigo-900 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg dark:bg-ternary-dark hover:bg-gray-100 drop-shadow-2xl p-4 duration-300">
								<i className="text-xl sm:text-2xl md:text-xl bg-indigo-950">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
				<AppFooterCopyright />
			</div>
		</div>
	</>
	);
}

export default Footer;
