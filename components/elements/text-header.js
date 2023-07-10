const TextHeader = ({children, heading, ...props}) => {
	const headers = [
		<h1 {...props}>{children}</h1>,
		<h2 {...props}>{children}</h2>,
		<h3 {...props}>{children}</h3>,
		<h4 {...props}>{children}</h4>,
		<h5 {...props}>{children}</h5>,
		<h6 {...props}>{children}</h6>
	];
	return headers[heading];
};
export default TextHeader;
