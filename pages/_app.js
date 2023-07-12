import { DefaultSeo } from 'next-seo';
import Layout from '@/components/layout';
import '@/styles/index.css';
import { metaTitleSuffix, metadata } from 'data/global';
import Head from 'next/head';

export default ({ Component, pageProps }) => (
	<>
		<Head>
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" href="/pwa/ios/180.png"></link>
			<meta name="theme-color" content="#ffe371" />
		</Head>

		<DefaultSeo
			titleTemplate={`%s | ${metaTitleSuffix}`}
			title={'Page'}
			description={metadata.metaDescription}
			openGraph={{
				images: Object.values(metadata.shareImage.formats).map(
					(image) => {
						return {
							url: image.url,
							width: image.width,
							height: image.height
						};
					}
				)
			}}
			twitter={{
				cardType: metadata.twitterCardType,
				handle: metadata.twitterUsername
			}}
		/>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
);
