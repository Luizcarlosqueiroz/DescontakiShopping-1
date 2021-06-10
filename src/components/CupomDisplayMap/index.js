import React, { useState, useEffect } from 'react';

import ButtonSmall from '../ButtonSmall';
import Search from '../SearchBox';
 
import Spinner from 'react-bootstrap/Spinner';
import * as moment from 'moment'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './index.css';

const CupomMap = () => {

	useEffect(() => {

		function getCurrentMothYear(){
			let data = new Date();
			let mes  = (data.getMonth()+1).toString(); 
			let mesF = (mes.length === 1) ? '0'+mes : mes;
			let ano = data.getFullYear();
			let anoF = ano.toString();
			return mesF+"/"+anoF;
		}

		let currentMonthYear = getCurrentMothYear();
		console.log(currentMonthYear);

		fetch(`https://pblelcoma-final.herokuapp.com/cupons/mes/${currentMonthYear}`)
      	.then(Response => {
        	return Response.json();
      	})
      	.then(data =>{
        	setCupomInfo(data);
			console.log(data);
      	});
	},[])

	const useStyles = makeStyles((theme) => ({
		formControl: {
		  margin: theme.spacing(1),
		  minWidth: 200,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	  }));

	const [mesAno, setMesAno] = React.useState("06/2021");
	
	const SimpleSelect = () => {
		const classes = useStyles();

		const handleChange = (event) => {
			setMesAno(event.target.value);
			handleChangeMonth(event.target.value);
		};

		return (
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-helper-label">Mês de Criação</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={mesAno}
					onChange={handleChange}
				>
				<MenuItem value={"01/2021"}>Janeiro/2021</MenuItem>
				<MenuItem value={"02/2021"}>Fevereiro/2021</MenuItem>
				<MenuItem value={"04/2021"}>Março/2021</MenuItem>
				<MenuItem value={"05/2021"}>Abril/2021</MenuItem>
				<MenuItem value={"06/2021"}>Junho/2021</MenuItem>
				</Select>
				<FormHelperText>Mês/Ano</FormHelperText>
			</FormControl>
		)

	}

	const [search, setSearch] = useState();

	const [cuponsInfo, setCupomInfo] = useState([]);

	const searchSpace=(event)=>{
    	let keyword = event.target.value;
      	setSearch(keyword)
    }

  	const handleChangeMonth=(abc)=>{
      	fetch(`https://pblelcoma-final.herokuapp.com/cupons/mes/${abc}`)
      	.then(Response => {
        	return Response.json();
      	})
      	.then(data =>{
        	setCupomInfo(data);
			console.log(data);
      	});
    }	


	const CupomAtivoDesativado = (dateValidade) => {

		let dateValidadeFormat = moment(dateValidade, 'DD/MM/YYYY', true).toDate();
		if (dateValidadeFormat > new Date()) {
			return (<ButtonSmall title="Ativado" cursor="none" calltoAction />);
		} else {
			return (<ButtonSmall title="Vencido" />);
		}
	}

  	const items = cuponsInfo.filter((data) => {
    	if (search == null) {
     		return data;
    	} else if (data.titulo.toLowerCase().includes(search.toLowerCase())) {
      		return data;
    	}
  	}).map((data, index) => {
    	return (
      		<div className="container" key={index}>
				<div className="cupomInfo">
					<h3 className="cupomInfoTitle">{data.titulo}</h3>
					<h4>Desconto: {data.valor}%</h4>
					<p>Loja: {data.nomeLoja}</p>
					<p id="dataDescricao">Descrição: {data.descricao}</p>
				</div>

				<div className="barraLateral"></div>
				<div className="cupomStats">
					<table>
						<tbody>
							<tr>
								<th>Data Incial: </th><th>{data.dataInicial}</th>
							</tr>
							<tr>
								<th>Validade: </th><th>{data.validade}</th>
							</tr>
						</tbody>
					</table>

					<ButtonSmall title="Editar" disabled={true} />
					<>{CupomAtivoDesativado(data.validade)}</>
				</div>
      		</div>
    	);
  	});


  	return (
    	<div>
			<Spinner animation="border" />     

			<SimpleSelect />
			<br />
            <Search placeholder="Pesquisar pelo título..." handleSearch={(e)=>searchSpace(e)}></Search>
			<hr />
			<br />
            {items}
        </div>
  	);
}

export default CupomMap;