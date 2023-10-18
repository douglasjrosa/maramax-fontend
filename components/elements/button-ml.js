import dynamic from 'next/dynamic';
const Image = dynamic(() => import('/components/elements/image'));

const ButtonMl = ({ cupom, percentOff, link }) => {
	const buttonText =
		percentOff != '' && cupom != ''
			? `${percentOff}% OFF com o cupom ${cupom}`
			: '';

	return (
		<a
			href={link}
			target="_blank"
			className="block border border-blue-900 rounded-lg shadow-lg bg-white py-3 px-4 text-center"
		>
			<p className="flex gap-4 w-full items-center justify-center flex-wrap">
				<span className="text-blue-900 text-xl font-bold">
					COMPRAR no
				</span>
				<span style={{ width: '162px', height: '57px' }} className='pt-3'>
					<Image
						media={{
							name: 'logotipo_ml.png',
							path: 'site',
							alternativeText:
								'Botão de link para o Mercado Livre',
							width: 500,
							height: 126
						}}
					/>
				</span>
			</p>
			<p className="text-xl font-semibold text-blue-900 mt-2">
				{buttonText}
			</p>
		</a>
	);
};
export default ButtonMl;
