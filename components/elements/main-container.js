const Container = ({ children, slug }) => {
	const mainPages = ['', 'empresa', 'produtos', 'contato'];
	const theme = mainPages.includes(slug)
		? 'pb-16'
		: 'bg-mmx-forest pb-16  bg-fixed bg-cover';

	return (
		<div id="main-container" className={theme}>
			{children}
		</div>
	);
};
export default Container;
