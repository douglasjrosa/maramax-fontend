import Image from '../elements/image';
import Markdown from 'react-markdown';

const FeatureColumnsGroup = ({ data }) => {
	return (
		<div className="container flex flex-col lg:flex-row lg:flex-wrap z-20 gap-12 align-top mb-14">
			{data.features.map((feature) => (
				<div className="flex-1 text-lg card-mmx" key={feature.id}>
					<Image media={feature.icon} className="w-full" />
					<h2 className="font-bold mt-10 text-2xl text-green-700 mb-4">
						{feature.title}
					</h2>
					<Markdown>{feature.description}</Markdown>
				</div>
			))}
		</div>
	);
};

export default FeatureColumnsGroup;
