import dynamic from 'next/dynamic';
import { baseUrl } from '@/lib/global';
const Seo = dynamic(() => import('/components/elements/seo'));
const FeatureRowsGroup = dynamic(() =>
	import('/components/sections/feature-rows-group')
);

const Container = dynamic(() => import('/components/elements/main-container'));

const slug = 'empresa';
const data = {
	features: [
		{
			joinNextRow: false,
			title: 'Em construção',
			description:
				'Em breve traremos aqui informações sobre a nossa história. Aguarde...',
			link: null,
			media: {
				name: 'site-building.jpeg',
				path: 'site',
				alternativeText:
					'Placa com a informação de que o site está sendo construido.',
				width: 1366,
				height: 768
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
