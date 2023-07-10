import React, { useState } from 'react';

const LeadsForm = () => {
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Enviar os dados para a rota de API
		await fetch('/api/saveData', {
			method: 'POST',
			body: JSON.stringify({ data: {email, phone} }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		// Limpar o formulário
		setEmail('');
		setPhone('');
	};

	return (
		<div className="m-16">
			<form
				onSubmit={handleSubmit}
				className="p-4 bg-gray-100 rounded-lg shadow "
			>
				<h2 className="text-2xl font-semibold mb-4">
					Quero receber o aviso do lançamento com PREÇOS DE FÁBRICA!
				</h2>
				<div className="flex flex-col justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg md:flex-row">
					<div className="md:w-1/3">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							E-mail:
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>
					<div className="md:w-1/3">
						<label
							htmlFor="phone"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Telefone:
						</label>
						<input
							type="tel"
							id="phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="md:w-1/3">
						<br />
						<button
							type="submit"
							className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
