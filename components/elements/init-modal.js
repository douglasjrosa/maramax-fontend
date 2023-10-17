import dynamic from 'next/dynamic';
import { X } from 'react-feather'; // Importe o ícone X do Feather Icons
const LeadsForm = dynamic(() => import('/components/elements/leads-form'));

const Image = dynamic(() => import('/components/elements/image'));

const InitModal = ({ closeSelf }) => (
	<div className="fixed h-full w-full bg-black bg-opacity-80 z-50 pt-24 overflow-auto p-10">
		<div className="flex flex-row flex-wrap justify-center bg-white p-10 rounded relative">
			<div className="w-3/4 md:w-1/4">
				<Image
					media={{
						alternativeText: 'Logo da Festa do Leite 2023',
						name: 'logomarca_ml.jpg',
						path: 'eventos/lancamento-ml'
					}}
					className=""
					width="150"
					height="100"
					priority={1}
				/>
			</div>
			<div className="lg:w-3/4 text-center items-center">
				<div className="p-3 text-4xl text-red-500 text-bold">
					Estamos em Campanha de Lançamento no Mercado Livre!!!
				</div>
				<LeadsForm closeSelf={closeSelf} />
			</div>
			<button
				className="absolute top-0 right-0 p-2 m-2 text-gray-500 hover:text-gray-700 focus:outline-none"
				onClick={closeSelf}
			>
				<X size={30} /> {/* Ícone X */}
			</button>
		</div>
	</div>
);

export default InitModal;
