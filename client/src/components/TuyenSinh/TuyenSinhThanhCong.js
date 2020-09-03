import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

class TuyenSinhThanhCong extends Component {
    render() {
        return (
            <div className="container" style={{color:"red"}}>
                <h5>ĐĂNG KÝ THÀNH CÔNG</h5><br/>
                <h4>CẢM ƠN BẠN ĐÃ ĐỂ LẠI THÔNG TIN</h4>
                <h4>Bộ phận tuyển sinh sẽ liên hệ lại với bạn trong thời gian tới!</h4>
                <Button variant="contained" color="secondary">
                    <NavLink to="/">Quay lại</NavLink>
                </Button>
            </div>
        );
    }
}

export default TuyenSinhThanhCong;