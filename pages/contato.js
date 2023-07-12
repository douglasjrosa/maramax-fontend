import dynamic from 'next/dynamic';
import { baseUrl } from '@/lib/global';
const Seo = dynamic(() => import('/components/elements/seo'));
const FeatureRowsGroup = dynamic(() =>
	import('/components/sections/feature-rows-group')
);

const Container = dynamic(() => import('/components/elements/main-container'));

const slug = 'contato';
const data = {
	features: [
		{
			joinNextRow: false,
			title: 'Entre em contato para pedir um orçamento',
			description:
				'Ligue agora para **[(16) 98802-9535](tel:+5516988029535)** e peça um orçamento.  Se preferir envie um e-mail no link abaixo:',
			link: {
				newTab: true,
				url: 'mailto:contato.maramax@gmail.com',
				text: 'contato.maramax@gmail.com'
			},
			media: {
				name: 'executive-calling.jpg',
				path: 'site',
				alternativeText: 'Mulher falando ao telefone.',
				width: 450,
				height: 675
			},
			icon: null
		}
	]
};
const metadata = {
	twitterCardType: 'summary_large_image',
	metaTitle: 'Maramax - Madeira Entalhada com Serenidade e Elegância',
	metaDescription:
		'A Maramax produz itens de madeira com fino acabamento para decoração e utilidades domésticas.',
	shareImage: {
		name: 'logomarca.png',
		path: 'site',
		alternativeText: 'Logomarca Maramax',
		size: 38.52,
		width: 575,
		height: 424,
		url: `${baseUrl}/images/site/logomarca.png`
	}
};

export default () => (
	<>
		{/* Add meta tags for SEO*/}
		<Seo metadata={metadata} />
		{/* Display content sections */}
		<Container slug={slug}>
			<div className="flex flex-col">
				<FeatureRowsGroup data={data} slug={slug} />
			</div>
		</Container>
	</>
);
