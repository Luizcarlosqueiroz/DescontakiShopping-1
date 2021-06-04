import React, { useState, useEffect } from 'react';

import ButtonSmall from '../ButtonSmall';
import Search from '../SearchBox';
 
import { AiOutlineSearch } from 'react-icons/ai';
import Spinner from 'react-bootstrap/Spinner';


import './index.css';

const CupomMap = () => {

	useEffect(() => {
		fetch(`https://pblelcoma-final.herokuapp.com/cupons/mes/01/2021}`)
      	.then(Response => {
        	return Response.json();
      	})
      	.then(data =>{
        	setCupomInfo(data);
      	});
	},[])


	const [search, setSearch] = useState();

	const [cuponsInfo, setCupomInfo] = useState([]);

	const [loading, setLoading] = useState(false);


	const searchSpace=(event)=>{
    	let keyword = event.target.value;
      	setSearch(keyword)
    }

  	const handleChangeMonth=(event)=>{
    	let mesAno = event.target.value;

      	fetch(`https://pblelcoma-final.herokuapp.com/cupons/mes/${mesAno}`)
      	.then(Response => {
        	return Response.json();
      	})
      	.then(data =>{
        	setCupomInfo(data);
			console.log(data);
      	});
    }


	const CupomAtivoDesativado = (dateValidade) => {
		console.log(new Date(dateValidade));
		if (new Date(dateValidade) > new Date()) {
			return (<ButtonSmall title="Ativado" calltoAction />);
		} else {
			return (<ButtonSmall title="Desativado" />);
		}
	}

  	const items = cuponsInfo.filter((data) => {
    	if (search == null) {
     		return data;
    	} else if (data.titulo.toLowerCase().includes(search.toLowerCase())) {
      		return data;
    	}
  	}).map((data) => {
    	return (
      		<div className="container">
				<div className="cupomInfo">
					<h3>{data.titulo}</h3>
					<h4>Valor: R$ {data.valor.toFixed(2)}</h4>
					<p>Loja: {data.nomeLoja}</p>
					<p id="dataDescricao">Descrição: {data.descricao}</p>
				</div>

				<div className="barraLateral"></div>
				<div className="cupomStats">
					<table>
						<tr>
							<th>Data Incial: </th> <th>{data.dataInicial}</th>
						</tr>
						<tr>
							<th>Validade: </th> <th>{data.validade}</th>
						</tr>
						<tr>
							<th>{CupomAtivoDesativado(data.validade)}</th>
						</tr>

					</table>

					<ButtonSmall title="Editar" disabled={true} />
					<ButtonSmall title="Ativado" calltoAction />
				</div>
      		</div>
    	);
  	});


  	return (
    	<div>
			<Spinner animation="border" />             
            <select onChange={handleChangeMonth}>
                <option value="11/2020"> Nov/20</option>
                <option selected value="01/2021"> Jan/21</option>
            </select>
			<br />
            <AiOutlineSearch size="1.5em"/>
            <Search placeholder="Pesquisar..." handleSearch={(e)=>searchSpace(e)}></Search>
            {items}
        </div>
  	);
}

export default CupomMap;