import React, { Component  } from 'react';

import ButtonSmall from '../ButtonSmall';
import Information from '../info-json';
import Search from '../SearchBox';
 
import { AiOutlineSearch } from 'react-icons/ai';

import './index.css';

class CupomMap extends Component {

    constructor(){
        super();
        
        this.state={
            search:null
        };
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }

    render(){

        const items = Information.filter((data) => {
          if (this.state.search == null) {
            return data;
          } else if (
            data.titulo.toLowerCase().includes(this.state.search.toLowerCase())
          ) {
            return data;
          }
        }).map((data) => {
          return (
            <div className="container">
              <div className="cupomInfo">
                <h3>{data.titulo}</h3>
                <p>{data.nomeLoja}</p>
                <p id="dataDescricao">{data.descricao}</p>
              </div>

              <div className="barraLateral"></div>
              <div className="cupomStats">
                <table>
                  <tr>
                    <th>Valor: </th> <th>{data.valor}</th>
                  </tr>
                  <tr>
                    <th>Validade: </th> <th>{data.registered}</th>
                  </tr>
                </table>

                <ButtonSmall title="Editar" />
                <ButtonSmall title="Ativado" calltoAction />
              </div>
            </div>
          );
        });

        return (
            <div>
              <AiOutlineSearch size="1.5em"/>
              <Search placeholder="Pesquisar..." handleSearch={(e)=>this.searchSpace(e)}></Search>
              {items}
            </div>
        )
    }
}

export default CupomMap;