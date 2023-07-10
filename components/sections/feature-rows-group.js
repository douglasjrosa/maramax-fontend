import classNames from 'classnames';
import CustomLink from '@/components/elements/custom-link';
import TextHeader from '@/components/elements/text-header';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('/components/elements/image'));
const Markdown = dynamic(() => import('react-markdown'));

const FeatureRowsGroup = ({ data }) => {

	var joinNextRow = false;
	return (
		<div className="flex flex-col z-20">
			{data.features.map((feature, index) => {
				const rows = (
					<div
						key={`feature${index}`}
						className={classNames(
							// Common classes
							'flex flex-col-reverse justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg',
							{ 'mb-16': !feature.joinNextRow },
							{
								'md:flex-row': index % 2 === 0,
								'md:flex-row-reverse': index % 2 === 1
							}
						)}
					>
						{/* Media section */}
						<div className="w-full lg:w-4/12">
							<Image
								media={feature.media}
								className={classNames(
									'object-cover h-auto md:rounded-md',
									{ 'rounded-b-md': !joinNextRow }
								)}
								width={feature.mediaWidth}
								height={feature.mediaHeight}
								priority={index < 1}
							/>
						</div>
						{/* Text section */}
						<div className="w-full tracking-wide text-black lg:w-8/12 text-lg p-5 bg-white p-4 rounded" >
							<TextHeader
								heading={index}
								className="text-4xl font-bold py-6 text-black"
							>
								{feature.title}
							</TextHeader>
							<Markdown>{feature.description}</Markdown>
							{feature.link && (
								<CustomLink link={feature.link}>
									<div className="text-blue-600 with-arrow hover:underline">
										{feature.link.text}
									</div>
								</CustomLink>
							)}
						</div>
					</div>
				);
				joinNextRow = feature.joinNextRow;
				return rows;
			})}
		</div>
	);
};

export default FeatureRowsGroup;
