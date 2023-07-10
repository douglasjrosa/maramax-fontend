import Markdown from 'react-markdown';
import { baseUrl } from 'data/global';

const RichText = ({ data }) => {
	return (
		<div
			id="rich-text"
			className="container card-mmx prose-lg max-w-[90vw] bg-white rounded-lg shadow-lg p-12 block"
		>
			<Markdown
				components={{
					img: ({ node, ...props }) => {
						const { src, alt } = props;
						return (
							<span className="text-center block">
								<img
									src={`${baseUrl}/images/especialista-min.webp`}
									alt={alt}
									width={400}
									height={300}
								/>
							</span>
						);
					},
					a: ({ node, ...props }) => {
						return (
							<a
								className="text-blue-600 hover:underline"
								{...props}
							/>
						);
					}
				}}
			>
				{data.content}
			</Markdown>
		</div>
	);
};

export default RichText;
