import { useState } from 'react';

export default () => {
	const [line, setLine] = useState([]);

	const loadIt = (event) => {
		const txt = event.target.value;

		const nfe = parseInt(
			txt
				.match(/(?<=NF-e Nº )(?<result>[\d.]+) SÉRIE:/)
				.groups.result.replace(/\./g, '')
		);

		const cliente = txt.match(/(?<=FAX UF INSCRIÇÃO ESTADUAL )(?<result>[^\s]+)/);
        cliente = cliente ? cliente.groups.result : "";

		const data = txt.match(
			/(?<=(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})|(\d{3}\.\d{3}\.\d{3}-\d{2}) )(?<result>\d{2}\/\d{2}\/\d{4})/
		);
        data = data ? data.groups.result : "";

		const vencimento = txt.match(
			/(?<=RESERVADO AO FISCO.*enc\.\: )(?<result>\d{2}\/\d{2}\/\d{2}(\d{2})?)/
		);
		vencimento = vencimento ? vencimento.groups.result : '';

        const isento = txt.match(/EMBALAGEM RETORNAVEL/);
        isento = isento && isento[0] == "EMBALAGEM RETORNAVEL";

		const valor = txt.match(
			/(?<result>\d+?\.?\d?\d?\d?\,\d{2})(?=.* CÓDIGO DESCRIÇÃO)/
		);
		valor = valor ? valor.groups.result : '0,00';

        const status = "";
        const obs = "";

		if (isento) {
			const obsValor = parseFloat(valor.replace(/\./g, ''));

			status = 'OK';
			obs = 'REMESSA - ' + obsValor / 500 + ' caixas - ' + obsValor +",00";
			valor = '0,00';
		}

        setLine([
            'Vendas',
            nfe,
            '',
            cliente,
            data,
            vencimento,
            valor,
            status,
            '',
            obs
        ]);
	};

	const copyIt = () => {
		var copyArea = document.getElementById('copyArea');
		navigator.clipboard.writeText(copyArea.innerText);

		alert(
			'Linha copiada com sucesso. Vá para a planilha "Vendas" no arquivo "PEDIDOS ALLIAGE 2022 - 2023", na coluna "A", selecione a primeira célula vazia logo abaixo da última célula não vazia e cole o conteúdo sem formatar as células.'
		);
	};

	return (
		<div style={{ padding: '50px', marginTop: '100px' }}>
			<label htmlFor="text">
				<b>Texto da NOTA FISCAL:</b>
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
				<pre>
					{line.length > 0
						? `${line[0]}	${line[1]}	${line[2]}	${line[3]}	${line[4]}	${line[5]}	${line[6]}	${line[7]}	${line[8]}`
						: ''}
				</pre>
			</div>
		</div>
	);
};
