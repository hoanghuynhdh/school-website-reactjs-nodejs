import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

class TuyenSinh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false        
        }
    }
    changeInputValue(event) {
        // Cập nhật state
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitForm(event) {
        //Chặn sự kiện mặc định của form
        event.preventDefault()
        event.target.reset()
        const user = {
            hovaten: this.state.hovaten,
            cmnd: this.state.cmnd,
            email: this.state.email,
            dienthoai: this.state.dienthoai,
            diachi: this.state.diachi,
            ngaysinh: this.state.ngaysinh,
            gioitinh: this.state.gioitinh,
            noisinh: this.state.noisinh,
            hedaotao: this.state.hedaotao,
            nganhdangky: this.state.nganhdangky,
            dieukienxettuyen: this.state.dieukienxettuyen,
            ghichu: this.state.ghichu,
          }
      
          console.log(user);
      
          axios.post('http://localhost:5000/users/add', user)
            .then(res => {
                this.setState({
                    hovaten: '',
                    cmnd: '',
                    email: '',
                    dienthoai: '',
                    diachi: '',
                    ngaysinh: '',
                    gioitinh: '',
                    noisinh: '',
                    hedaotao: '',
                    nganhdangky: '',
                    dieukienxettuyen: '',
                    ghichu: '',
                    isRedirect: true
                  })
            }).catch(() => {
                this.setState({
                    hovaten: user.hovaten,
                    cmnd: user.cmnd,
                    email: user.email,
                    dienthoai: user.dienthoai,
                    diachi: user.diachi,
                    ngaysinh: user.ngaysinh,
                    gioitinh: user.gioitinh,
                    noisinh: user.noisinh,
                    hedaotao: user.hedaotao,
                    nganhdangky: user.nganhdangky,
                    dieukienxettuyen: user.dieukienxettuyen,
                    ghichu: user.ghichu,
                    isRedirect: false
                  })
                alert('Đăng kí thông tin thất bại xin vui lòng kiểm tra lại!');
            });
          
        //In ra giá trị của input trong form
        // console.log(this.state)
    }
    render() {
        if (this.state.isRedirect) {
            return (
                <Redirect to="/dang-ky-online" />
            )
        }
        return (
            <div className="container">
                <div className="content">
                    <div>
                        <h4>HỆ CAO ĐẲNG</h4>
                        <div className="row">
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/1.png " style={{ height: "250px" }} alt="1" /></NavLink>
                                <NavLink to="/detail1"><p>CÔNG NGHỆ THÔNG TIN</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/2.jpg" style={{ height: "250px" }} alt="2" /></NavLink>
                                <NavLink to="/detail1"><p>THIẾT KẾ ĐỒ HỌA</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/3.jpg" style={{ height: "250px" }} alt="3" /></NavLink>
                                <NavLink to="/detail1"><p>TRUYỀN THÔNG VÀ MẠNG MÁY TÍNH</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/4.jpg" style={{ height: "250px" }} alt="4" /></NavLink>
                                <NavLink to="/detail1"><p>TÀI CHÍNH NGÂN HÀNG</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/9.jpg" style={{ height: "250px" }} alt="9" /></NavLink>
                                <NavLink to="/detail1"><p>KẾ TOÁN</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/10.jpg" style={{ height: "250px" }} alt="10" /></NavLink>
                                <NavLink to="/detail1"><p>LOGISTICS</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/11.jpg" style={{ height: "250px" }} alt="11" /></NavLink>
                                <NavLink to="/detail1"><p>HỆ THỐNG THÔNG TIN</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/12.jpg" style={{ height: "250px" }} alt="12" /></NavLink>
                                <NavLink to="/detail1"><p>CÔNG NGHỆ KỸ THUẬT ĐIỆN TỬ TRUYỀN THÔNG</p></NavLink>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h4>HỆ TRUNG CẤP / CAO ĐẲNG 9 + 4</h4>
                        <div className="row">
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/5.png" style={{ height: "250px" }} alt="5" /></NavLink>
                                <NavLink to="/detail1"><p>KẾ TOÁN DOANH NGHIỆP</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/6.png" style={{ height: "250px" }} alt="6" /></NavLink>
                                <NavLink to="/detail1"><p>TIN HỌC ỨNG DỤNG</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/7.png" style={{ height: "250px" }} alt="7" /></NavLink>
                                <NavLink to="/detail1"><p>QUẢN TRỊ MẠNG MÁY TÍNH </p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/8.png" style={{ height: "250px" }} alt="8" /></NavLink>
                                <NavLink to="/detail1"><p>THIẾT KẾ VÀ QUẢN LÍ WEB</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/4.jpg" style={{ height: "250px" }} alt="4" /></NavLink>
                                <NavLink to="/detail1"><p>CÔNG NGHỆ KỸ THUẬT ĐIỆN TỬ</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/Z.PNg" style={{ height: "250px" }} alt="10" /></NavLink>
                                <NavLink to="/detail1"><p>KỸ THUẬT SỬA CHỬA VÀ LẮP RÁP MÁY TÍNH</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/3.jpg" style={{ height: "250px" }} alt="3" /></NavLink>
                                <NavLink to="/detail1"><p>TRUYỀN THÔNG VÀ MẠNG MÁY TÍNH </p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/Q.PNg" style={{ height: "250px" }} alt="2" /></NavLink>
                                <NavLink to="/detail1"><p>CÔNG NGHỆ KỸ THUẬT VÀ ĐIỆN TỬ VIỄN THÔNG</p></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <div className="news">
                                <div className="">
                                    <h3 style={{ textAlign: "center", color: "red", textTransform: "uppercase" }}>ĐĂNG KÝ XÉT TUYỂN ONLINE</h3>
                                    <div className="text-center" style={{ background: "#185dca", color: "white" }}>
                                        <span>THÔNG TIN THÍ SINH</span>
                                    </div>
                                    <form onSubmit={(event) => { this.submitForm(event) }}>
                                        <div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="hovaten">Họ và tên*</label>
                                                        <input type="text" className="form-control" value={this.state.hovaten} id="hovaten" name="hovaten" required onChange={(event) => this.changeInputValue(event)} />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="gioitinh">Giới tính*</label>
                                                        <select className="form-control" id="gioitinh" required name="gioitinh" onChange={(event) => this.changeInputValue(event)}>
                                                            <option value="">--Chọn--</option>
                                                            <option>Nam</option>
                                                            <option>Nữ</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="ngaysinh">Ngày sinh*</label>
                                                        <TextField
                                                            required
                                                            id="ngaysinh"
                                                            name="ngaysinh"
                                                            size="small"
                                                            fullWidth
                                                            type="date"
                                                            variant="outlined"
                                                            format="DD/MM/YYYY"
                                                            onChange={(event) => this.changeInputValue(event)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="cmnd">CMND*</label>
                                                        <input type="text" className="form-control" id="cmnd" name="cmnd" required onChange={(event) => this.changeInputValue(event)} />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="noisinh">Nơi Sinh*</label>
                                                        <select className="form-control" id="noisinh" required name="noisinh" onChange={(event) => this.changeInputValue(event)}>
                                                            <option value="">--Chọn nơi sinh--</option>
                                                            <option>Hà Nội</option>
                                                            <option>Tp.Hồ Chí Minh</option>
                                                            <option>Hải Phòng</option>
                                                            <option>Đà Nẵng</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email*</label>
                                                        <input type="email" className="form-control" id="email" name="email" required aria-describedby="emailHelp" onChange={(event) => this.changeInputValue(event)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="dienthoai">Điện thoại*</label>
                                                        <input type="text" className="form-control" id="dienthoai" name="dienthoai" onChange={(event) => this.changeInputValue(event)} />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="form-group">
                                                        <label htmlFor="diachi">Địa chỉ</label>
                                                        <input type="text" className="form-control" id="diachi" name="diachi" onChange={(event) => this.changeInputValue(event)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center" style={{ background: "#fe9317", color: "white" }}>
                                            <span>THÔNG TIN ĐĂNG KÝ</span>
                                        </div>
                                        <div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="hedaotao">Hệ đào tạo xét tuyển*</label>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="form-group">
                                                        <select className="form-control" id="hedaotao" required name="hedaotao" onChange={(event) => this.changeInputValue(event)}>
                                                            <option value="">--Chọn hệ đào tạo--</option>
                                                            <option>Cao Đẳng</option>
                                                            <option>Trung Cấp</option>
                                                            <option>Liên Thông</option>
                                                            <option>Văn Bằng 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="nganhdangky">Ngành đăng ký xét tuyển*</label>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="form-group">
                                                        <select className="form-control" id="nganhdangky" required name="nganhdangky" onChange={(event) => this.changeInputValue(event)}>
                                                            <option value="">--Chọn Ngành--</option>
                                                            <option>Đồ họa</option>
                                                            <option>Lập trình</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="dieukienxettuyen">Điều kiện xét tuyển*</label>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="form-group">
                                                        <select className="form-control" required id="dieukienxettuyen" name="dieukienxettuyen" onChange={(event) => this.changeInputValue(event)}>
                                                            <option value="">--Chọn trình độ học vấn--</option>
                                                            <option>THCS</option>
                                                            <option>THPT</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="ghichu">Ghi chú</label>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="form-group">
                                                        <textarea className="form-control" id="ghichu" name="ghichu" rows={3} defaultValue={""} onChange={(event) => this.changeInputValue(event)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center" style={{ background: "#ff3962", color: "white" }}>
                                            <span>THÔNG TIN KHẢO SÁT</span>
                                        </div>
                                        <div>
                                            <p>Bạn biết đến ITC thông qua các kênh nào sau đây? (Có thể click chọn nhiều kênh)</p>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                                                        <label className="form-check-label" htmlFor="defaultCheck1">Website ITC</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2" />
                                                        <label className="form-check-label" htmlFor="defaultCheck2">Tư vấn dưới cờ</label>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck3" />
                                                        <label className="form-check-label" htmlFor="defaultCheck3">Facebook</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck4" />
                                                        <label className="form-check-label" htmlFor="defaultCheck4">Cẩm nang hướng nghiệp</label>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck5" />
                                                        <label className="form-check-label" htmlFor="defaultCheck5">Người giới thiệu</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck6" />
                                                        <label className="form-check-label" htmlFor="defaultCheck6">Tờ rơi</label>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck7" />
                                                        <label className="form-check-label" htmlFor="defaultCheck7">Tìm kiếm trên Google</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck8" />
                                                        <label className="form-check-label" htmlFor="defaultCheck8">Tin tức trên báo mạng</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center pt-3">
                                            <Button variant="contained" type="submit" color="primary">ĐĂNG KÝ NGAY</Button>
                                            <Button variant="contained" color="secondary"><NavLink to="/tra-cuu-dang-ky-online">TRA CỨU ĐĂNG KÝ ONLINE</NavLink></Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 rightContent">
                            <NavLink to="/tuyen-sinh"><h4 style={{ textAlign: "left" }}>Hệ thống đào tạo</h4></NavLink>
                            <NavLink to="/tuyen-sinh-tien-si">
                                <div className="eduSystem" style={{ background: "#185dca" }}>
                                    <span>Tuyển sinh Cao đẳng</span>
                                </div>
                            </NavLink>
                            <NavLink to="/tuyen-sinh-thac-si">
                                <div className="eduSystem" style={{ background: "#34a7fc" }}>
                                    <span>Tuyển sinh Trung cấp / Cao đẳng 9 + 4</span>
                                </div>
                            </NavLink>
                            <NavLink to="/tuyen-sinh-dai-hoc">
                                <div className="eduSystem" style={{ background: "#ff3962", height: "60px" }}>
                                    <span>Tuyển sinh Liên thông Trung cấp lên Cao đẳng</span>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="eduSystem" style={{ background: "#9a36e1" }}>
                                    <span>Tuyển sinh Hệ chất lượng cao</span>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="eduSystem" style={{ background: "#fe9317" }}>
                                    <span>Tin Tuyển sinh - Hướng nghiệp</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TuyenSinh;