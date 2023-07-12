import Image from './image';
import dynamic from 'next/dynamic';
import CustomLink from './custom-link';
import { footer } from 'data/global';
const LeadsForm = dynamic(() =>
	import('/components/elements/leads-form')
);

const Footer = () => {
	return (
		<footer className="bg-mmx-panel bg-fixed bg-cover bg-top relative">
			<LeadsForm />
			<div
				id="main-footer"
				className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-12"
			>
				{footer.columns.map((footerColumn, index) => (
					<div
						key={`footerKey${index}`}
						className="col mt-10 lg:mt-0 bg-white rounded p-4 shadow-lg border-2 border-yellow-600"
					>
						<p className="uppercase tracking-wide font-bold  text-gray-600">
							{footerColumn.title}
						</p>
						<ul className="mt-2 px-5">
							{footerColumn.links &&
								footerColumn.links.map((link, linkIndex) => (
									<li
										key={`footerLinkKey${linkIndex}`}
										className="py-3 lg:py-2 text-2xl lg:text-xl mx-1 my-4 font-medium text-lime-700 hover:text-lime-800"
									>
										<CustomLink link={link}>
											{link.text}
										</CustomLink>
									</li>
								))}
							{footerColumn.descriptions &&
								footerColumn.descriptions.map(
									(desc, descIndex) => (
										<li
											key={`footerLinkKey${descIndex}`}
											className="py-3 lg:py-2 text-2xl lg:text-xl mx-1 my-4 font-medium text-lime-700 hover:text-lime-800"
										>
											{desc}
										</li>
									)
								)}
						</ul>
					</div>
				))}
				<div key="ht">
					<div className="rounded p-6 bg-white h-auto w-auto text-center border-2 border-yellow-600">
						{footer.logo && (
							<Image
								media={footer.logo}
								className="bg-opacity-75 object-contain"
								width="200"
								height="105"
							/>
						)}
					</div>
				</div>
			</div>
			<div
				id="small-text"
				className="text-sm bg-black bg-opacity-75 py-6 text-yellow-200"
			>
				<div className="container">{footer.smallText}</div>
			</div>
		</footer>
	);
};

export default Footer;
