import React, { Component } from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { NavLink } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
class TinTuc extends Component {
    render() {
        return (
            <div className="container text-left">
                <Breadcrumbs className="pt-3" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <NavLink color="inherit" to="/" >Trang Chủ</NavLink>
                    <Typography color="textPrimary">Tin ITC</Typography>
                </Breadcrumbs>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <div className="col-3">
                                <NavLink to="/"><img src="template/images/news1.jpg" alt="news1" /></NavLink>
                            </div>
                            <div className="col-9">
                                <h3>Trang tin tức 1</h3>
                                <p>Dolor laboris culpa minim cillum et Lorem minim aute fugiat sint est. Dolore id nostrud incididunt anim commodo consequat aliqua. Tempor proident sunt do laboris enim. Ipsum non excepteur quis aute. Exercitation cupidatat aliquip officia culpa ullamco ad officia est eiusmod velit nostrud. Consequat nulla anim nisi et eu non enim duis reprehenderit.</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-3">
                                <NavLink to="/"><img src="template/images/news1.jpg" alt="news1" /></NavLink>
                            </div>
                            <div className="col-9">
                                <h3>Trang tin tức 1</h3>
                                <p>Dolor laboris culpa minim cillum et Lorem minim aute fugiat sint est. Dolore id nostrud incididunt anim commodo consequat aliqua. Tempor proident sunt do laboris enim. Ipsum non excepteur quis aute. Exercitation cupidatat aliquip officia culpa ullamco ad officia est eiusmod velit nostrud. Consequat nulla anim nisi et eu non enim duis reprehenderit.</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-3">
                                <NavLink to="/"><img src="template/images/news1.jpg" alt="news1" /></NavLink>
                            </div>
                            <div className="col-9">
                                <h3>Trang tin tức 1</h3>
                                <p>Dolor laboris culpa minim cillum et Lorem minim aute fugiat sint est. Dolore id nostrud incididunt anim commodo consequat aliqua. Tempor proident sunt do laboris enim. Ipsum non excepteur quis aute. Exercitation cupidatat aliquip officia culpa ullamco ad officia est eiusmod velit nostrud. Consequat nulla anim nisi et eu non enim duis reprehenderit.</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-3">
                                <NavLink to="/"><img src="template/images/news1.jpg" alt="news1" /></NavLink>
                            </div>
                            <div className="col-9">
                                <h3>Trang tin tức 1</h3>
                                <p>Dolor laboris culpa minim cillum et Lorem minim aute fugiat sint est. Dolore id nostrud incididunt anim commodo consequat aliqua. Tempor proident sunt do laboris enim. Ipsum non excepteur quis aute. Exercitation cupidatat aliquip officia culpa ullamco ad officia est eiusmod velit nostrud. Consequat nulla anim nisi et eu non enim duis reprehenderit.</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-3">
                                <NavLink to="/"><img src="template/images/news1.jpg" alt="news1" /></NavLink>
                            </div>
                            <div className="col-9">
                                <h3>Trang tin tức 1</h3>
                                <p>Dolor laboris culpa minim cillum et Lorem minim aute fugiat sint est. Dolore id nostrud incididunt anim commodo consequat aliqua. Tempor proident sunt do laboris enim. Ipsum non excepteur quis aute. Exercitation cupidatat aliquip officia culpa ullamco ad officia est eiusmod velit nostrud. Consequat nulla anim nisi et eu non enim duis reprehenderit.</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="text-center">
                            <Pagination count={10} color="primary" />
                        </div>
                    </div>
                    <div className="col-3 rightContent">
                        <NavLink to="/"><h4 style={{textAlign:"left"}}>Hệ thống đào tạo</h4></NavLink>
                        <NavLink to="/tuyen-sinh-tien-si">
                            <div className="eduSystem" style={{background:"#185dca"}}>
                                <span>Tuyển sinh Tiến sĩ</span>
                            </div>
                        </NavLink>
                        <NavLink to="/tuyen-sinh-thac-si">
                            <div className="eduSystem" style={{background:"#34a7fc"}}>
                                <span>Tuyển sinh Thạc sĩ</span>
                            </div>
                        </NavLink>
                        <NavLink to="/tuyen-sinh-dai-hoc">
                            <div className="eduSystem" style={{background:"#ff3962"}}>
                                <span>Tuyển sinh Đại học</span>
                            </div>
                        </NavLink>
                        <NavLink to="/">
                            <div className="eduSystem" style={{background:"#fe9317"}}>
                                <span>Đại học chuẩn Nhật Bản</span>
                            </div>
                        </NavLink>
                        <NavLink to="/">
                            <div className="eduSystem" style={{background:"#9a36e1"}}>
                                <span>Đại học hợp tác Quốc tế</span>
                            </div>
                        </NavLink>
                        <NavLink to="/">
                            <div className="eduSystem" style={{background:"#00cf4f"}}>
                                <span>Đại học chuẩn Quốc tế</span>
                            </div>
                        </NavLink>
                        <NavLink to="/">
                            <div className="eduSystem"  style={{background:"#f71b17"}}>
                                <span>Thạc sĩ Quốc tế</span>
                            </div>
                        </NavLink>
                        <NavLink to="/lien-thong">
                            <div className="eduSystem" style={{background:"#0e6ab1"}}>
                                <span>Liên thông</span>
                            </div>
                        </NavLink>
                        <NavLink to="/"><h4 style={{textAlign:"left"}}>Thông Báo</h4></NavLink>
                        <div className="row">
                            <div className="col-4 left">
                                <div>
                                    <p className="head">Thứ 7</p>
                                    <span className="body">08/08/2020</span>
                                </div>
                                
                            </div>
                            <div className="col-8 right">
                                <NavLink to="/"><p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 left">
                                <div>
                                    <p className="head">Thứ 7</p>
                                    <span className="body">08/08/2020</span>
                                </div>
                                
                            </div>
                            <div className="col-8 right">
                                <NavLink to="/"><p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 left">
                                <div>
                                    <p className="head">Thứ 7</p>
                                    <span className="body">08/08/2020</span>
                                </div>
                                
                            </div>
                            <div className="col-8 right">
                                <NavLink to="/"><p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 left">
                                <div>
                                    <p className="head">Thứ 7</p>
                                    <span className="body">08/08/2020</span>
                                </div>
                                
                            </div>
                            <div className="col-8 right">
                                <NavLink to="/"><p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TinTuc;