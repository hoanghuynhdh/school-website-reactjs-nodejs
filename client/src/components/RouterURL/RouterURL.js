import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import TrangChu from '../TrangChu/TrangChu';
import GioiThieu from '../GioiThieu/GioiThieu';
import TuyenSinh from '../TuyenSinh/TuyenSinh';
import LienHe from '../LienHe/LienHe';
import DangNhap from '../DangNhap/DangNhap';
import DangKy from '../DangKy/DangKy';
import SinhVien from '../SinhVien/SinhVien';
import NoiBo from '../NoiBo/NoiBo';
import TuyenSinhTienSi from '../TuyenSinh/TuyenSinhTienSi';
import TuyenSinhThacSi from '../TuyenSinh/TuyenSinhThacSi';
import TuyenSinhDaiHoc from '../TuyenSinh/TuyenSinhDaiHoc';
import LienThong from '../TuyenSinh/LienThong';
import TinTuc from '../TinTuc/TinTuc';
import Media from '../TinTuc/Media';
import HoatDongSinhVien from '../TinTuc/HoatDongSinhVien';
import Detail1 from '../Details/Detail1';
import Detail2 from '../Details/Detail2';
import Detail3 from '../Details/Detail3';
import TuyenSinhThanhCong from '../TuyenSinh/TuyenSinhThanhCong';
import TraCuu from '../TuyenSinh/TraCuu';
import KetQuaTraCuu from '../TuyenSinh/KetQuaTraCuu';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={TrangChu}></Route>
                    <Route path="/gioi-thieu" component={GioiThieu}></Route>
                    <Route path="/tuyen-sinh" component={TuyenSinh}></Route>
                    <Route path="/tuyen-sinh-tien-si" component={TuyenSinhTienSi}></Route>
                    <Route path="/tuyen-sinh-thac-si" component={TuyenSinhThacSi}></Route>
                    <Route path="/tuyen-sinh-dai-hoc" component={TuyenSinhDaiHoc}></Route>
                    <Route path="/dang-ky-online" component={TuyenSinhThanhCong}></Route>
                    <Route path="/tra-cuu-dang-ky-online" component={TraCuu}></Route>
                    <Route path="/ket-qua-tra-cuu-online" component={KetQuaTraCuu}></Route>
                    <Route path="/lien-thong" component={LienThong}></Route>
                    <Route path="/sinh-vien" component={SinhVien} ></Route>
                    <Route path="/tin-itc" component={TinTuc} ></Route>
                    <Route path="/media" component={Media} ></Route>
                    <Route path="/hoat-dong-sinh-vien" component={HoatDongSinhVien} ></Route>
                    <Route path="/detail1" component={Detail1} ></Route>
                    <Route path="/detail2" component={Detail2} ></Route>
                    <Route path="/detail3" component={Detail3} ></Route>
                    <Route path="/noi-bo" component={NoiBo} ></Route>
                    <Route path="/lien-he" component={LienHe} ></Route>
                    <Route path="/dang-nhap" component={DangNhap}></Route>
                    <Route path="/dang-ky" component={DangKy}></Route>
                    <Route component={TrangChu}></Route>
                </Switch>
            </div>
        );
    }
}

export default RouterURL;