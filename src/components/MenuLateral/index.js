import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './style.css';

const MenuSide = () => {
    return (
        <Menu>
            <a id="home" className="menu-item" href="/menu">Menu</a>
            <a id="reportLojistas" className="menu-item" href="/">Relatório dos Lojistas</a>
            <a id="reportConsumidores" className="menu-item" href="/">Relatório dos Consumidores</a>
            <a id="reportConsumidores" className="menu-item" href="/cadastrarLojista">Cadastrar Lojista</a>
            <a id="gestaoCupons" className="menu-item" href="/gestaodecupons">Gestão de Cupons</a>

            <a id="logout" className="menu-item--small" href="/">Sair</a>
        </Menu>
    );
}
export default MenuSide;