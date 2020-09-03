import React, { Component } from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { NavLink } from 'react-router-dom';

class LienHe extends Component {
    render() {
        return (
            <div className="container text-left">
                <Breadcrumbs className="pt-3" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <NavLink color="inherit" to="/" >Trang Chủ</NavLink>
                    <Typography color="textPrimary">Liên hệ</Typography>
                </Breadcrumbs>
                <div className="pt-5">
                    <p>Phòng Ghi danh - Trường Cao đẳng Công nghệ thông tin Tp. HCM (ITC)</p>
                    <p><span role="img" aria-label="">🏣</span> Địa chỉ: Số 12 Trịnh Đình Thảo, P. Hòa Thạnh, Q. Tân Phú, Tp. HCM.</p>
                    <p><span role="img" aria-label="">☎️</span> Điện thoại: (028) 39-734-983</p>
                    <p><span role="img" aria-label="">📱</span> Hotline: 093.886.1080</p>
                    <p><span role="img" aria-label="">🌐</span> Website: www.itc.edu.vn </p>
                    <p><span role="img" aria-label="">📧</span> E-mail: tuyensinh@itc.edu.vn</p>
                    <hr/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.477507676078!2d106.63214551535636!3d10.774692562170667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea144839ef1%3A0x798819bdcd0522b0!2sInformation%20Technology%20College%20HoChiMinh%20City!5e0!3m2!1sen!2s!4v1597067948638!5m2!1sen!2s" width={600} height={400} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" title="itc" tabIndex={0} />
                </div>
            </div>
        );
    }
}

export default LienHe;