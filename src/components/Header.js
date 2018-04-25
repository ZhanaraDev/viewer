import React, { Component } from 'react';


class Header extends Component {
	render() {
		return (
			<div className="Header">
				
				<header id="header">
			        <div class="row">
			            <div class="left-head-wrapper skewed-bg">
			                <div class="left-head">
			                    <div class="content">
			                        <a href="#" id="logo">
			                        </a>
			                    </div>
			                </div>
			            </div>


			            <div class="right-head-wrapper">
			                <div class="right-head">
			                    <div class="header-tools-wrapper">
			                        <a href="" class="header-tools book-search">
			                            </a>
			                    </div>
			                    <div class="header-tools-wrapper">
			                        <a href="" class="header-tools global-search">
			                            </a>
			                    </div>
			                    <div class="header-tools-wrapper">
			                        <a href="" class="header-tools go-home">
			                            </a>
			                    </div>
			                    <div class="header-tools-wrapper">
			                        <a href="" class="header-tools back">
			                            </a>
			                    </div>
			                    <div class="header-tools-wrapper">
			                        <a href="" class="header-tools forward">
			                            </a>
			                    </div>
			                </div>
			            </div>
			            <div class="mid-head-wrapper">
			                <div class="mid-head">
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
