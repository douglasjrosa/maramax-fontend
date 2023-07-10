import { useState } from 'react';

export default () => {
	const [table, setTable] = useState([]);

	const loadIt = (event) => {
		let txt = event.target.value;

		let nPedido = txt.match(/Pedido de Compra: (?<result>\d+)/).groups
			.result;
		let dataPedido = txt.match(/Data do Documento: (?<result>[\d.]+)/)
			.groups.result;
		let pagto = txt.match(/Condição Pagamento: (?<result>\d+)/).groups
			.result;
		let itens = txt.match(
			/(?<=Comprador\(es\) Item Material\/Descrição Quantidade UM Preço Unit\. Preço Total |Esquema de Entrega: Sequência .* UN \d\d\.\d\d\.\d\d\d\d ).*?(?= Alíquota*)/g
		);

		const datasEntrega = txt.match(
			/(?<=Esquema de Entrega: Sequência .* UN )\d{2}\.\d{2}\.\d{4}/g
		);

		const tableItens = itens.map((item, index) => {
			const nItem = item.match(/\d+/)[0];
			const cProd = item.match(/(?<=\d+ )\d+/)[0];
			const qtde = item.match(/(?<=\d+ \d+ )[\d.]+/)[0];
			const vProd = item.match(/(?<=UN )[\d.,]+/)[0];
			const vTotal = item.match(/(?<=UN [\d.,]+ )[\d.,]+/)[0];
			const nProd = item.match(/(?<=UN \d.*)[A-z].*/)[0];

			return [
				'Alliage',
				dataPedido,
				nPedido,
				nItem,
				cProd,
				nProd,
				qtde,
				vProd,
				vTotal,
				datasEntrega[index]
			];
		});

		setTable(tableItens);
	};

	const copyIt = () => {
		var copyArea = document.getElementById('copyArea');
		navigator.clipboard.writeText(copyArea.innerText);

		alert(
			'Linhas copiadas com sucesso. Vá para a planilha "Pedidos" no arquivo "PEDIDOS ALLIAGE 2022", na coluna "A", selecione a primeira célula vazia logo abaixo da última célula não vazia e pressione Ctrl + Shift + V.'
		);
	};

	const email = 'contato@ribermax.com.br';

	return (
		<div style={{ padding: '50px', marginTop: '100px' }}>
			<label for="text">
				<b>Texto do PEDIDO:</b>
			</label>
			<br />
			<input
				id="text"
				type="text"
				placeholder="Cole o texto do PDF aqui."
				onChange={loadIt}
				style={{
					border: '1px solid #46b5ff',
					padding: '10px',
					margin: '10px',
					color: '#46b5ff',
					borderRadius: '5px'
				}}
			/>
			<button
				style={{
					padding: '10px',
					margin: '10px',
					backgroundColor: '#46b5ff',
					borderRadius: '5px',
					color: 'white'
				}}
				onClick={copyIt}
			>
				Copiar
			</button>
			<div id="copyArea">
				{table.map((item, index) => {
					return (
						<pre key={index}>
							{`${item[0]}	${item[1]}	${item[2]}	${item[3]}	${item[4]}	${item[5]}	${item[6]}	${item[7]}	${item[8]}	${item[9]}`}
						</pre>
					);
				})}
			</div>
		</div>
	);
};
