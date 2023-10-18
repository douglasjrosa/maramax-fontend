import dynamic from 'next/dynamic';
import { baseUrl } from '@/lib/global';
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
				name: '48.jpg',
				path: 'produtos/produtos-gallery',
				alternativeText: 'Tábua de frios e petiscos.',
				width: 350,
				height: 350
			},
			icon: null
		},
		{
			joinNextRow: false,
			title: 'Lançamento no Mercado Livre',
			description:
				'A Maramax é uma empresa recém nascida que pertence ao Grupo Max Brasil. Fazem parte do mesmo grupo as empresas Ribermax Embalagens de Madeira e Bragheto Paletes. Nossas vendas serão feitas pelos marketplaces: Mercado Livre e Shopee e como estamos em fase de iniciação, haverá várias campanhas de SUPER OFERTAS! Não perca!',
			link: null,
			media: {
				name: 'logomarca_ml.jpg',
				path: 'eventos/lancamento-ml',
				alternativeText: 'logomarca do Mercado Livre.',
				width: 498,
				height: 332
			},
			icon: null
		},
		{
			joinNextRow: false,
			title: 'Participe do lançamento para comprar tudo a preço de custo direto da fábrica.',
			description:
				'Você só precisa deixar seu contato para receber as informações de novos produtos e super CUPONS DE DESCONTOS nos dias de campanha promocional com os links dos produtos no Mercado Livre e na Shopee com preços muito MUUUITO baixos.',
			link: null,
			media: {
				name: 'marketplaces.jpg',
				path: 'site',
				alternativeText: 'Logomarcas do Mercado Livre e Shopee.',
				width: 1200,
				height: 787
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

export default () => {
	return (
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
							alternativeText: 'prancha com pães'
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
};
