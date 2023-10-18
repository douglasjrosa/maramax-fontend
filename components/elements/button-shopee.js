import dynamic from 'next/dynamic';
const Image = dynamic(() => import('/components/elements/image'));

const ButtonShopee = ({ cupom, percentOff, link }) => {
	const buttonText =
		percentOff != '' && cupom != ''
			? `${percentOff}% OFF com o cupom ${cupom}`
			: '';

	return (
		<a
			href={link}
			target="_blank"
			className="block border border-orange-600 rounded-lg shadow-lg bg-white py-3 px-4 text-center"
		>
			<p className="flex gap-4 w-full items-end justify-center flex-wrap">
				<span className="text-orange-600 text-xl font-bold pb-2">
					COMPRAR na
				</span>
				<span style={{ width: '162px', height: '57px' }}>
					<Image
						media={{
							name: 'logotipo_shopee.jpg',
							path: 'site',
							alternativeText:
								'Botão de link para a Shopee',
							width: 562,
							height: 194
						}}
					/>
				</span>
			</p>
			<p className="text-xl font-semibold text-orange-600 mt-2">
				{buttonText}
			</p>
		</a>
	);
};
export default ButtonShopee;