import { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import MobileNavMenu from './mobile-nav-menu';
import ButtonLink from './button-link';
import Image from './image';
import { getButtonAppearance } from 'utils/button';
import CustomLink from './custom-link';
import { navbar } from 'data/global';

const Navbar = () => {
	const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);

	return (
		<>
			<div className="w-[30vw] max-w-[150px] ml-10 absolute">
				<Link href="/">
					<a id="nav-logo" aria-label="Página inicial">
						<Image
							media={navbar.logo}
							className="object-contain"
							alt="Logomarca Maramax"
							width="900"
							height="600"
						/>
					</a>
				</Link>
			</div>
			<nav
				className="bg-yellow-300 shadow-lg"
			>
				<div className="container flex flex-row justify-end">
					<div id="logo-and-links" className="flex flex-row">
						<div className="p-3 hidden md:flex">
							{/* List of links on desktop */}
							<ul className="list-none md:flex flex-row gap-4 text-lg">
								{navbar.links.map((navLink, index) => (
									<li key={`navKey${index}`}>
										<CustomLink link={navLink}>
											<div className="hover:text-lime-500 text-slate-700 font-semibold px-2 py-1">
												{navLink.text}
											</div>
										</CustomLink>
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* Hamburger menu on mobile */}
					<button
						onClick={() => setMobileMenuIsShown(true)}
						className="p-1 block md:hidden"
						aria-label="Menu principal"
					>
						<MdMenu className="h-12 w-auto" />
					</button>
					{/* CTA button on desktop */}
					{navbar.button && (
						<div id="nav-button" className="hidden md:block">
							<ButtonLink
								button={navbar.button}
								appearance={getButtonAppearance(
									navbar.button.type,
									'light'
								)}
								compact
								aria-label="Menu principal"
							/>
						</div>
					)}
				</div>
			</nav>

			{/* Mobile navigation menu panel */}
			{mobileMenuIsShown && (
				<MobileNavMenu
					navbar={navbar}
					closeSelf={() => setMobileMenuIsShown(false)}
					aria-label="Fechar menu principal"
				/>
			)}
		</>
	);
};

export default Navbar;
