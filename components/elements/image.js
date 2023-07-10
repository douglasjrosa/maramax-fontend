import NextImage from 'next/image';

const Image = (props) => {

	const { media } = props;
	if (!media) return null;

	const mediaPath = media.path != undefined ? `${media.path}/` : '';

	const customLoader = ({ src, width, quality }) => {
		const srcFile = mediaPath + src;
		return `/images/${srcFile}?w=${Math.min(width, 1080)}&q=${quality || 75}`;
	};
	
	const mediaFile = mediaPath + media.name;
	const blurDataURL = require('../../public/images/' + mediaFile).default
		.blurDataURL;

	const alt = props.alternativeText || media.alternativeText || '';
	const className = props.className || media.className || '';
	const width = props.width || media.width;
	const height = props.height || media.height;
	const layout = props.layout || 'responsive';
	const priority = props.priority || false;

	return (
		<NextImage
			loader={customLoader}
			src={media.name}
			alt={alt}
			className={className}
			width={width}
			height={height}
			layout={layout}
			priority={priority}
			placeholder="blur"
			blurDataURL={blurDataURL}
		/>
	);
};
export default Image;
