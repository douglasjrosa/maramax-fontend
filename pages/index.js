import dynamic from 'next/dynamic';
import { baseUrl, mainImage } from '@/lib/global';
const Seo = dynamic(() => import('/components/elements/seo'));
const FeatureRowsGroup = dynamic(() =>
	import('/components/sections/feature-rows-group')
);

const Container = dynamic(() => import('/components/elements/main-container'));
const Image = dynamic(() => import('/components/elements/image'));

const slug = '';
const data = {
	features: [
		{
			joinNextRow: false,
			title: 'Madeira entalhada com serenidade e elegância',
			description:
				'Nosso foco é trazer para os lares, as boas energias e a beleza natural que a madeira oferece. A gente entende que toda peça de madeira, um dia já respirou como um ser vivo e teve uma história. Por isso cuidamos de cada detalhe com carinho em cada peça que fazemos.',
			link: null,
			media: {
				name: '51.jpg',
				path: 'produtos/router',
				alternativeText:
					'Suporte para pequenos vasos de planta.',
				width: 327,
				height: 395
			},
			icon: null
		},
		{
			joinNextRow: false,
			title: 'Pré-lançamento na Festa do Leite em Batatais',
			description:
				'A Maramax é uma empresa do Grupo Max Brasil que acabou de nascer. Nossas vendas serão feitas pelos marketplaces: Mercado Livre e Shopee e como estamos em fase de iniciação, nossa campanha é de SUPER OFERTAS! Não perca!',
			link: null,
			media: {
				name: '1.png',
				path: 'eventos/festa-do-leite',
				alternativeText:
					'Suporte para pequenos vasos de planta.',
				width: 497,
				height: 86
			},
			icon: null
		},
		{
			joinNextRow: false,
			title: 'Participe do pré-lançamento para comprar tudo a preço de custo direto da fábrica.',
			description:
				'Você só precisa deixar seu contato para receber no dia do lançamento os links dos produtos no Mercado Livre e na Shopee com preços muito baixos.',
			link: null,
			media: {
				name: 'marketplaces.jpg',
				path: 'site',
				alternativeText:
					'Logomarcas do Mercado Livre e Shopee.',
				width: 1200,
				height: 787
			},
			icon: null
		}
	]
};
const metadata = {
	twitterCardType: 'summary_large_image',
	metaTitle: 'Homepage Maramax Paletes',
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
				<Image
					media={{
						name: 'prancha.jpeg',
						path: 'site',
						alternativeText: "prancha com pães"
					}}
					className="object-contain h-auto"
					width={1920}
					height={918}
					priority={1}
				/>
				<FeatureRowsGroup data={data} slug={slug} />
			</div>
		</Container>
	</>
);