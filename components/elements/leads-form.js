import React, { useState } from 'react';

const LeadsForm = ({closeSelf}) => {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [fone, setFone] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		closeSelf();

		// Enviar os dados para a rota de API
		const response = await fetch('/api/saveData', {
			method: 'POST',
			body: JSON.stringify({ data: {nome, email, fone} }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			const data = await response.json();
			alert(data.message);
		} else {
			throw new Error('Erro na requisição');
		}

		// Limpar o formulário
		setNome('');
		setEmail('');
		setFone('');
	};

	return (
		<div className="m-16">
			<form
				onSubmit={handleSubmit}
				className="p-4 bg-white rounded-lg shadow "
			>
				<h2 className="text-2xl font-semibold mb-4">
					Quero receber o aviso do lançamento com PREÇOS DE FÁBRICA!
				</h2>
				<div className="flex flex-col justify-center md:p-8 sm:items-center md:gap-10 md:flex-row">
					<div className="md:w-1/3">
						<label
							htmlFor="nome"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Nome*:
						</label>
						<input
							type="text"
							id="nome"
							value={nome}
							onChange={(e) => setNome(e.target.value)}
							className="w-full px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>
					<div className="md:w-1/3">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							E-mail*:
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>
					<div className="md:w-1/3">
						<label
							htmlFor="fone"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Fone / Whatsapp (opcional):
						</label>
						<input
							type="tel"
							id="fone"
							value={fone}
							onChange={(e) => setFone(e.target.value)}
							className="w-full px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="md:w-1/3">
						<br />
						<button
							type="submit"
							className="w-full py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Enviar
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LeadsForm;
