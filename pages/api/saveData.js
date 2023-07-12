import { rbxEmail, rbxToken, rbxApiUrl } from 'data/global';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { nome, email, fone } = req.body.data;

		const params = new URLSearchParams();
		params.append('nome', nome);
		params.append('email', email);
		params.append('fone', fone);

		try {
			const response = await fetch(rbxApiUrl, {
				method: 'POST',
				body: params.toString(),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Token': rbxToken,
					'Email': rbxEmail
				}
			});

			if (response.ok) {
				const data = await response.json();
				res.status(200).json(data);
			} else {
				throw new Error('Erro na requisição');
			}
		} catch (error) {
			console.error('Erro ao salvar os dados:', error);
			res.status(500).json({ message: 'Erro ao salvar os dados.' });
		}
	} else {
		res.status(405).json({ message: 'Método não permitido' });
	}
}
