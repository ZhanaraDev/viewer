import React, { Component } from 'react';


class Header extends Component {
	render() {
		return (
			<div className="Header">
				
				<header id="header">
			        <div className="row">
			            <div className="left-head-wrapper skewed-bg">
			                <div className="left-head">
			                    <div className="content">
			                        <a href="http://sell.epigraph.kz" id="logo">
			                        </a>
			                    </div>
			                </div>
			            </div>


			            <div className="right-head-wrapper">
			                <div className="right-head">
			                    <div className="header-tools-wrapper">
			                        <a href="" className="header-tools book-search" title="Поиск по странице">
			                            </a>
			                    </div>
			                    <div className="header-tools-wrapper">
			                        <a href="" className="header-tools global-search" title="Поиск по книге">
			                            </a>
			                    </div>
			                    <div className="header-tools-wrapper">
			                        <a href="" className="header-tools go-home" title="Домашняя страница">
			                            </a>
			                    </div>
			                    <div className="header-tools-wrapper">
			                        <a href="" className="header-tools back" title="Назад">
			                            </a>
			                    </div>
			                    <div className="header-tools-wrapper">
			                        <a href="" className="header-tools forward" title="Вперед">
			                            </a>
			                    </div>
			                </div>
			            </div>
			            <div className="mid-head-wrapper">
			                <div className="mid-head">
			                    <input type="text" id="search_field" name="" value="" placeholder="Введите запрос" />
			                </div>
			            </div>
			        </div>
			    </header>

			</div>
		);
	}
}

export default Header;
