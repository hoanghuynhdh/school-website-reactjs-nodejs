import React, { Component } from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { NavLink } from 'react-router-dom';

class Detail3 extends Component {
    render() {
        return (
            <div className="container text-left">
                <div className="row">
                    <div className="col-9">
                        <div>
                            <h4 style={{color:"blue"}}>Đây là trang tin tức 3</h4>
                            <p><small><DateRangeIcon/> 12/08/2020</small></p>
                        </div>
                        <hr/>
                        <div>
                            <p>Ea consequat veniam consequat minim laborum nisi aliqua eu. Nulla in aliqua cillum ullamco pariatur esse id proident ut dolore pariatur amet. Lorem culpa laboris ad laborum labore aute aute aliqua duis pariatur. Deserunt non cupidatat aliqua fugiat qui.</p>
                            <div className="text-center">
                                <img src="template/images/news1.jpg" style={{width:"80%",height:"500px"}} alt="news1" />
                            </div>
                            <br/>
                            <p>Ea consequat veniam consequat minim laborum nisi aliqua eu. Nulla in aliqua cillum ullamco pariatur esse id proident ut dolore pariatur amet. Lorem culpa laboris ad laborum labore aute aute aliqua duis pariatur. Deserunt non cupidatat aliqua fugiat qui.</p>
                            <p>Ea consequat veniam consequat minim laborum nisi aliqua eu. Nulla in aliqua cillum ullamco pariatur esse id proident ut dolore pariatur amet. Lorem culpa laboris ad laborum labore aute aute aliqua duis pariatur. Deserunt non cupidatat aliqua fugiat qui.</p>
                            <div className="text-center">
                                <img src="template/images/news1.jpg" style={{width:"80%",height:"500px"}} alt="news1" />
                            </div>
                            <br/>
                            <div className="text-center">
                                <img src="template/images/news1.jpg" style={{width:"80%",height:"500px"}} alt="news1" />
                            </div>
                            <br/>
                            <p>Ea consequat veniam consequat minim laborum nisi aliqua eu. Nulla in aliqua cillum ullamco pariatur esse id proident ut dolore pariatur amet. Lorem culpa laboris ad laborum labore aute aute aliqua duis pariatur. Deserunt non cupidatat aliqua fugiat qui.</p>
                            <p>Ea consequat veniam consequat minim laborum nisi aliqua eu. Nulla in aliqua cillum ullamco pariatur esse id proident ut dolore pariatur amet. Lorem culpa laboris ad laborum labore aute aute aliqua duis pariatur. Deserunt non cupidatat aliqua fugiat qui.</p>
                            <p style={{color:"blue"}}><strong>Tin: Người đăng tin</strong></p>
                            <p style={{color:"blue"}}><strong>Phòng Cộng tác sinh viên</strong></p>
                        </div>
                    </div>
                    <div className="col-3 rightContent">
                    <NavLink to="/tuyen-sinh"><h4 style={{textAlign:"left"}}>Hệ thống đào tạo</h4></NavLink>
                            <NavLink to="/tuyen-sinh-tien-si">
                                <div className="eduSystem" style={{background:"#185dca"}}>
                                    <span>Tuyển sinh Cao đẳng</span>
                                </div>
                            </NavLink>
                            <NavLink to="/tuyen-sinh-thac-si">
                                <div className="eduSystem" style={{background:"#34a7fc"}}>
                                    <span>Tuyển sinh Trung cấp / Cao đẳng 9 + 4</span>
                                </div>
                            </NavLink>
                            <NavLink to="/tuyen-sinh-dai-hoc">
                                <div className="eduSystem" style={{background:"#ff3962",height:"60px"}}>
                                    <span>Tuyển sinh Liên thông Trung cấp lên Cao đẳng</span>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="eduSystem" style={{background:"#9a36e1"}}>
                                    <span>Tuyển sinh Hệ chất lượng cao</span>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="eduSystem" style={{background:"#fe9317"}}>
                                    <span>Tin Tuyển sinh - Hướng nghiệp</span>
                                </div>
                            </NavLink> <NavLink to="/"><h4 style={{textAlign:"left"}}>Thông Báo</h4></NavLink>
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

export default Detail3;