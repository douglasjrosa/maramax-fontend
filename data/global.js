export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const metaTitleSuffix =
	'Maramax - Madeira entalhada com serenidade e elegância';
export const metadata = {
	twitterCardType: 'summary_large_image',
	metaTitle: 'Madeira entalhada com serenidade e elegância',
	metaDescription:
		'Produtos de madeira feitos com fino acabamento, bom gosto e boas energias valorizando a beleza natural da madeira.',
	twitterUsername: '@maramaxbrasil',
	shareImage: {
		name: 'logotipo.png',
		alternativeText: 'Logomarca Maramax',
		ext: '.webp',
		mime: 'image/webp',
		size: 88.56,
		width: 4796,
		height: 3508,
		url: `${baseUrl}/images/site/logotipo.png`,
		formats: {
			thumbnail: {
				name: 'logotipo.png',
				ext: '.webp',
				mime: 'image/webp',
				width: 213,
				height: 156,
				size: 5.65,
				url: `${baseUrl}/images/site/logotipo.png`
			},
			large: {
				name: 'logotipo.png',
				ext: '.webp',
				mime: 'image/webp',
				width: 1000,
				height: 731,
				size: 32.27,
				url: `${baseUrl}/images/site/logotipo.png`
			},
			medium: {
				name: 'logotipo.png',
				ext: '.webp',
				mime: 'image/webp',
				width: 750,
				height: 549,
				size: 22.46,
				url: `${baseUrl}/images/site/logotipo.png`
			},
			small: {
				name: 'logotipo.png',
				ext: '.webp',
				mime: 'image/webp',
				width: 500,
				height: 366,
				size: 16.63,
				url: `${baseUrl}/images/site/logotipo.png`
			}
		}
	}
};
export const notificationBanner = {
	text: 'Este site usa Cookies para melhorar a sua experiência de navegação .'
};
export const navbar = {
	links: [
		{
			newTab: false,
			url: '/',
			text: 'Home'
		},
		{
			newTab: false,
			url: '/produtos',
			text: 'Produtos'
		},
		{
			newTab: false,
			url: '/contato',
			text: 'Contato'
		}
	],
	logo: {
		name: 'logotipo.png',
		path: 'site',
		alternativeText: 'Logomarca Maramax'
	}
};

export const mainImage = {	
	name: 'mesa.png',
	path: 'site',
	alternativeText: 'Mesa de frios'
}

export const footer = {
	smallText: '© Copyright Maramax™ (Lei 9610 de 19/02/1998)',
	columns: [
		{
			title: 'Páginas',
			links: [
				{
					newTab: false,
					url: '/',
					text: 'Home'
				},
				{
					newTab: false,
					url: '/produtos',
					text: 'Produtos'
				},
				{
					newTab: false,
					url: '/contato',
					text: 'Contato'
				}
			]
		},
		{
			title: 'Contatos',
			links: [
				{
					newTab: false,
					url: 'tel:+5516988029535',
					text: '(16) 98802-9535 Daniela (Comercial)'
				},
				{
					newTab: false,
					url: 'tel:+5516997968788',
					text: '(16) 99796-8788 Lucas (Fábrica)'
				},
				{
					newTab: false,
					url: 'mailto:contato.maramax@gmail.com',
					text: 'contato.maramax@...'
				}
			]
		},
		{
			title: 'Localização',
			descriptions: [
				'Rua Dr. Francisco Gugliano, 347',
				'Parque Industrial Tanquinho',
				'Ribeirão Preto SP'
			]
		}
	],
	logo: {
		name: 'logomarca.png',
		path: 'site',
		alternativeText:
			'Galpão de porta-paletes com uma empilhadeira movimentando as mercadorias com paletes.',
		width: 1000,
		height: 750
	}
};
export const whatsappContacts = [
	{
		nome: 'Daniela - Comercial',
		fone: '+5516988029535'
	}
];
export const whatsappImage = {
	name: 'logotipo_whatsapp_512x512.png',
	path: 'site',
	alternativeText: '',
	width: 512,
	height: 512,
	formats: {
		thumbnail: {
			name: 'thumbnail_logotipo_whatsapp_512x512.png',
			ext: '.png',
			mime: 'image/webp',
			width: 156,
			height: 156,
			size: 22.49,
			url: `${baseUrl}/images/site/thumbnail_logotipo_whatsapp_512x512.png`
		},
		small: {
			name: 'small_logotipo_whatsapp_512x512.png',
			ext: '.png',
			mime: 'image/png',
			width: 500,
			height: 500,
			size: 133.73,
			url: `${baseUrl}/images/site/small_logotipo_whatsapp_512x512.png`
		}
	}
};
export const whatsappMsg =
	'Olá, visitei o site da Maramax e gostaria de mais informações...';
