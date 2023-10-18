import sizeOf from 'image-size';
import classNames from 'classnames';
import path from 'path';
import dynamic from 'next/dynamic';
import fs from 'fs';
import { baseUrl } from '@/lib/global';
import { productFiles } from '@/lib/productsData';
const Seo = dynamic(() => import('/components/elements/seo'));
const FeatureRowsGroup = dynamic(() =>
	import('/components/sections/feature-rows-group')
);
const Image = dynamic(() => import('/components/elements/image'));
const ButtonMl = dynamic(() => import('/components/elements/button-ml'));
const ButtonShopee = dynamic(() => import('/components/elements/button-shopee'));

const slug = 'produtos';
const data = {
	features: [
		{
			joinNextRow: false,
			title: 'Participe do pré-lançamento para comprar tudo a preço de custo direto da fábrica.',
			description:
				'Você só precisa deixar seu contato para receber no dia do lançamento os links dos produtos no Mercado Livre e na Shopee com preços muito baixos.',
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

export default ({ imageFiles }) => {
	return (
		<div className="relative pt-10 mt-10">
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />

			<div className="m-5 mt-28 md:m-14 w-100">
				{productFiles.map((productFile, index) => (
					<div
						key={index}
						className="shadow-lg border border-gray-200 rounded flex p-6 flex-wrap justify-center"
					>
						<div className="w-full md:w-1/2 lg:w-2/6 p-4" style={{maxWidth: "300px"}}>
							<Image media={productFile.media} />
						</div>
						<div className='w-full md:w-1/2 lg:w-4/6 p-4'>
							<p className="text-bold text-2xl text-center md:text-left md:pl-6" >{productFile.title}</p>
							<p className="text-bold text-3xl text-center md:text-left md:pl-6">de <span className="text-red-600 line-through">R$ {productFile.price}</span> por <span className="text-4xl">R$ {productFile.finalPrice}</span></p>
							<div className='flex justify-end flex-wrap gap-4 p-3 mt-4 justify-center'>
								{productFile.buttonLinkML != "" && <ButtonMl cupom={productFile.cupomMl} percentOff={productFile.percentOffMl} link={productFile.buttonLinkML} />}
								{productFile.buttonLinkShopee != "" && <ButtonShopee cupom={productFile.cupomShopee} percentOff={productFile.percentOffShopee} link={productFile.buttonLinkShopee} />}
							</div>
						</div>
					</div>
				))}
			</div>

			<FeatureRowsGroup data={data} slug={slug} />
			{/* Display content sections */}
			<h2 className="text-5xl font-bold py-6 text-gray-700 text-center">
				Produtos a serem lançados em breve:
			</h2>
			<div className="flex flex-row flex-wrap py-28 px-10 gap-10 md:gap-20 justify-center">
				{imageFiles.map((imageFile, index) => (
					<div key={index} className="w-1/4">
						<div
							className={classNames({
								'image-container-odd': index % 2 === 0,
								'image-container-even': index % 2 !== 0
							})}
						>
							<Image
								media={{
									name: imageFile.fileName,
									path: 'produtos/produtos-gallery',
									alternativeText: `Image ${index}`,
									width: imageFile.width,
									height: imageFile.height
								}}
							/>
						</div>
					</div>
				))}
			</div>
			<h3 className="text-5xl font-bold py-28 text-gray-700 text-center">
				Não perca a chance de ficar sabendo quando vai ser o lançamento.
			</h3>
		</div>
	);
};

export async function getStaticProps() {
	const imageDirectory = './public/images/produtos/produtos-gallery'; // Caminho para a pasta de imagens
	const imageFiles = fs.readdirSync(imageDirectory).map((fileName) => {
		const imagePath = path.join(imageDirectory, fileName);
		const dimensions = sizeOf(imagePath);
		return {
			fileName,
			width: dimensions.width,
			height: dimensions.height
		};
	});

	const productFiles = '';
	return {
		props: {
			imageFiles
		}
	};
}
