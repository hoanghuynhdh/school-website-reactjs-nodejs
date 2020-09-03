import React, { Component } from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { NavLink } from 'react-router-dom';
class GioiThieu extends Component {
    render() {
        return (
            <div className="container">
                <Breadcrumbs className="pt-3" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <NavLink color="inherit" to="/" >Trang Chủ</NavLink>
                    <Typography color="textPrimary">Giới Thiệu</Typography>
                </Breadcrumbs>
                <div>
                    <h3><strong>GIỚI THIỆU</strong></h3>
                    <p className="text-left">Cách đây 19 năm ngày 27/04/2001 trường Công nghệ Thông tin đầu tiên ở Việt Nam được Hội Vô tuyến Điện tử Tp.HCM thành lập theo Quyết định số 2054/QĐ-BGD&ĐT-TCCB của Bộ Giáo dục & Đào tạo:</p>
                    <p className="text-left">Trường Cao đẳng Công nghệ Thông tin TP.HCM (Information Technology College-ITC) đào tạo các chuyên gia trình độ cao đẳng và trung cấp trong 9 ngành: Công nghệ thông tin, Truyền thông và mạng máy tính, Hệ thống thông tin, Công nghệ kỹ thuật điện tử, truyền thông, Công nghệ kỹ thuật điều khiển và tự động hóa, Công nghệ kỹ thuật máy tính, Quản trị kinh doanh, Kế toán, Tài chính ngân hàng.</p>
                    <img style={{width:"100%"}} src="template/images/slide1.jpg" alt="slide1"></img>
                    <p className="text-left">Sở hữu 9ha đất và 14.000 m2 phòng học và phòng thực hành mới xây dựng khang trang bên công viên Đầm sen thành phố Hồ chí Minh, cùng đội ngũ giảng viên có kinh nghiệm chúng tôi tự hào nằm trong số rất ít trường đạt chuẩn quốc gia hiện nay ở Việt Nam. Kiên trì phương châm đào tạo Thực học, Thực nghiệp nên nhờ đó sinh viên ITC ra trường các khóa đều có việc làm phù hợp nhờ chất lượng đào tạo và những ngành nghề đào tạo đều là những ngành có nhu cầu tuyển dụng cao.</p>
                </div>
            </div>
        );
    }
}

export default GioiThieu;