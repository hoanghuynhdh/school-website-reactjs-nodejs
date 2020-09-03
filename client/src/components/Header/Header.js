import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <div className="container">
            <header className="header">
                <div className="header-top">
                <NavLink to="/">
                    <img style={{width:"100%",height:"100px"}} src="template/images/banner.png" alt="banner"/>
                </NavLink>
                </div>
                <div className="header-mid">
                    <ul className="menu">
                        <NavLink activeClassName="active" to="/"><img style={{width:"100px",height:"100px"}} src="template/images/logo.png" alt="logo"/></NavLink>
                        <li><NavLink activeClassName="active" to="/">Trang chủ</NavLink></li>
                        <li><NavLink activeClassName="active" to="/gioi-thieu">Giới thiệu</NavLink></li>
                        <li><NavLink activeClassName="active" to="/sinh-vien">Sinh viên</NavLink>
                            <ul className="submenu">
                                <li><NavLink activeClassName="active" to="/sinh-vien">test A</NavLink></li>
                                <li><NavLink activeClassName="active" to="/sinh-vien">test B</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink activeClassName="active" to="/tuyen-sinh">Tuyển sinh</NavLink>
                            <ul className="submenu">
                                <li><NavLink activeClassName="active" to="/tuyen-sinh-tien-si">Tuyển sinh Cao đẳng</NavLink></li>
                                <li><NavLink activeClassName="active" to="/tuyen-sinh-thac-si">Tuyển sinh Trung cấp / Cao đẳng 9 + 4</NavLink></li>
                                <li><NavLink activeClassName="active" to="/tuyen-sinh-dai-hoc">Tuyển sinh Hệ chất lượng cao</NavLink></li>
                                <li><NavLink activeClassName="active" to="/lien-thong">Liên thông Trung cấp lên Cao Đẳng</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink activeClassName="active" to="/lien-he">Liên hệ</NavLink></li>
                    </ul>
                </div>
            </header>
        </div>
    );
  }
}

export default Header;
