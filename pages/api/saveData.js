import fs from 'fs';

export default function handler(req, res) {
	if (req.method === 'POST') {
		const { data } = req.body;

		try {
			let jsonData = [];
			const fileData = fs.readFileSync('././public/leads-list.json', 'utf-8');
			jsonData = JSON.parse(fileData);

			jsonData.push(data);
			fs.writeFileSync('././public/leads-list.json', JSON.stringify(jsonData));

			res.status(200).json({ message: 'Dados salvos com sucesso!' });
		} catch (error) {
			console.error('Erro ao salvar os dados:', error);
			res.status(500).json({ message: 'Erro ao salvar os dados.' });
		}
	} else {
		res.status(405).json({ message: 'Método não permitido' });
	}
}
