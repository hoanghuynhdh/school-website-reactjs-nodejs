import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { NavLink } from 'react-router-dom';

class TrangChu extends Component {
    render() {
        return (
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="template/images/banner1.jpg" className="d-block w-100" alt="banner1" />
                        </div>
                        <div className="carousel-item">
                            <img src="template/images/banner2.jpg" className="d-block w-100" alt="banner2" />
                        </div>
                        <div className="carousel-item">
                            <img src="template/images/banner3.jpg" className="d-block w-100" alt="banner3" />
                        </div>
                        <div className="carousel-item">
                            <img src="template/images/banner4.jpg" className="d-block w-100" alt="banner4" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-9">
                            <div className="news">
                                <NavLink to="/tin-itc"><h4 style={{ textAlign: "left" }}>Tin ITC</h4></NavLink>
                                <div className="row">
                                    <div className="col-9">
                                        <NavLink to="/detail1"><img src="template/images/1.png " style={{ height: "400px" }} alt="news1" /></NavLink>
                                        <NavLink to="/detail1"><h5>Thông báo về việc tuyển sinh đào tạo liên thông hình thức vừa học vừa làm từ trình độ cao đẳng lên trình độ đại học đợt 1 năm 2020, lớp đặt tại trường Cao đẳng Công nghệ Thông tin TP.HCM (ITC).</h5></NavLink>

                                    </div>
                                    <div className="col-3">
                                        <ul>
                                            <li>
                                                <NavLink to="/detail2"><img src="template/images/3.jpg" style={{ height: "200px" }} alt="3" /></NavLink>
                                                <NavLink to="/detail2"><p>Thông báo về việc tuyển sinh hệ liên thông từ Trung cấp chuyên nghiệp, Trung cấp nghề lên Cao đẳng năm 2020.</p></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/detail3"><p>Tổng kết hoạt động Công đoàn năm học 2019 – 2020 và Bình xét thi đua khối 7.</p></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/detail1"><p>Đề thi và Đáp án môn Địa lý - Tốt nghiệp THPT Quốc gia 2020.</p></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/detail2"><p>Tuyển dụng Giảng viên khoa QT-TCNH.</p></NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <NavLink to="/detail1"><img src="template/images/a.jpg" style={{ height: "200px" }} alt="news1" /></NavLink>
                                            <NavLink to="/detail1"><p>Tuyển dụng Giảng viên khoa CNTT-ĐT.</p></NavLink>
                                        </div>
                                        <div className="col-3">
                                            <NavLink to="/detail2"><img src="template/images/b.jpg" style={{ height: "200px" }} alt="news1" /></NavLink>
                                            <NavLink to="/detail2"><p>Những lưu ý đặc biệt khi thi tốt nghiệp THPT 2020.</p></NavLink>
                                        </div>
                                        <div className="col-3">
                                            <NavLink to="/detail3"><img src="template/images/c.jpg" style={{ height: "200px" }} alt="news1" /></NavLink>
                                            <NavLink to="/detail3"><p>Rộn ràng không khí tư vấn hướng nghiệp sáng thứ 2 đầu tuần.</p></NavLink>
                                        </div>
                                        <div className="col-3">
                                            <NavLink to="/detail1"><img src="template/images/d.jpg" style={{ height: "200px" }} alt="news1" /></NavLink>
                                            <NavLink to="/detail1"><p>Hôm nay nộp hồ sơ thi tốt nghiệp THPT và xét tuyển CĐ, ĐH.</p></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12" style={{ textAlign: "right", color: "red" }}>
                                        <NavLink to="/tin-itc"><AddBoxIcon /> Xem thêm</NavLink>
                                    </div>
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
                    <div className="news">
                        <NavLink to="/media"><h4 style={{ textAlign: "left" }}>MEDIA</h4></NavLink>
                        <div className="row">
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/x.jpg" style={{ height: "250px" }} alt="news1" /></NavLink>
                                <NavLink to="/detail1"><p>Lễ khai giảng – Lễ tốt nghiệp năm học 2019 – 2020 và chào mừng kỷ niệm 37 năm ngày nhà giáo việt nam 20/11
.</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail2"><img src="template/images/y.jpg" style={{ height: "250px" }} alt="news1" /></NavLink>
                                <NavLink to="/detail2"><p>Sinh viên ITC tham quan nhà máy ACECOOK Việt Nam.</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail3"><img src="template/images/z.jpg" style={{ height: "250px" }} alt="news1" /></NavLink>
                                <NavLink to="/detail3"><p>Đại hội Đại biểu Hội Sinh viên lần IV nhiệm kỳ 2019-2023.</p></NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink to="/detail1"><img src="template/images/zz.png" style={{ height: "250px" }} alt="news1" /></NavLink>
                                <NavLink to="/detail1"><p>Tuần sinh hoạt công dân - học sinh, sinh viên năm học 2019 -2020.</p></NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12" style={{ textAlign: "right", color: "red" }}>
                                <NavLink to="/media"><AddBoxIcon /> Xem thêm</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <div className="news">
                                <NavLink to="/hoat-dong-sinh-vien"><h4 style={{ textAlign: "left" }}>Hoạt động sinh viên</h4></NavLink>
                                <div className="row">
                                    <div className="col-9">
                                        <NavLink to="/detail1"><img src="template/images/tsmt.jpg" style={{ height: "600px" }} alt="news1" /></NavLink>
                                        <NavLink to="/detail1"><p>KỶ NIỆM ĐẸP TRONG LÒNG CHIẾN SĨ TIẾP SỨC MÙA THI.</p></NavLink>
                                    </div>
                                    <div className="col-3">
                                        <ul>
                                            <li>
                                                <NavLink to="/detail2"><img src="template/images/hdsv1.jpg" alt="news1" /></NavLink>
                                                <NavLink to="/detail2"><p>NGÀY THỨ HAI CHIẾN SĨ ITC TIẾP SỨC MÙA THI 2020.</p></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/detail3"><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/detail1"><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/detail2"><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <NavLink to="/detail1"><img src="template/images/news1.jpg" alt="news1" /></NavLink>
                                            <NavLink to="/detail1"><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></NavLink>
                                        </div>
                                        <div className="col-3">
                                            <NavLink to="/detail2"><img src="template/images/news1.jpg" alt="news1" /></NavLink>
                                            <NavLink to="/detail2"><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></NavLink>
                                        </div>
                                        <div className="col-3">
                                            <NavLink to="/detail3"><img src="template/images/news1.jpg" alt="news1" /></NavLink>
                                            <NavLink to="/detail3"><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></NavLink>
                                        </div>
                                        <div className="col-3">
                                            <NavLink to="/detail1"><img src="template/images/news1.jpg" alt="news1" /></NavLink>
                                            <NavLink to="/detail1"><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12" style={{ textAlign: "right", color: "red" }}>
                                        <NavLink to="/hoat-dong-sinh-vien"><AddBoxIcon /> Xem thêm</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 rightContent">
                            <NavLink to="/"><h4 style={{ textAlign: "left" }}>Thông Báo</h4></NavLink>
                            <div className="row">
                                <div className="col-4 left">
                                    <div>
                                        <p className="head">Thứ 5</p>
                                        <span className="body">20/08/2020</span>
                                    </div>

                                </div>
                                <div className="col-8 right">
                                    <NavLink to="/"><p>THÔNG BÁO VỀ VIỆC NỘP HỌC PHÍ BỔ SUNG CHO SINH VIÊN K20 NHẬP HỌC ĐỢT 1.</p></NavLink>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 left">
                                    <div>
                                        <p className="head">Thứ 5</p>
                                        <span className="body">20/08/2020</span>
                                    </div>

                                </div>
                                <div className="col-8 right">
                                    <NavLink to="/"><p>Lưu ý về HSSV ở trọ tại khu vực đường Thoại Ngọc Hầu, P Hòa Thạnh, Q Tân Phú.</p></NavLink>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 left">
                                    <div>
                                        <p className="head">Thứ 3</p>
                                        <span className="body">18/08/2020</span>
                                    </div>

                                </div>
                                <div className="col-8 right">
                                    <NavLink to="/"><p>THÔNG BÁO MỞ LỚP TIN HỌC ỨNG DỤNG.</p></NavLink>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 left">
                                    <div>
                                        <p className="head">Thứ 2</p>
                                        <span className="body">17/08/2020</span>
                                    </div>
                                </div>
                                <div className="col-8 right">
                                    <NavLink to="/"><p>ĐIỂM KIỂM TRA TIẾNG ANH ĐẦU VÀO KHÓA 20 NHẬP HỌC ĐỢT 2.</p></NavLink>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 left">
                                    <div>
                                        <p className="head">Thứ 2</p>
                                        <span className="body">17/08/2020</span>
                                    </div>
                                </div>
                                <div className="col-8 right">
                                    <NavLink to="/"><p>THỜI KHÓA BIỂU BẬC CAO ĐẲNG KHÓA 20 NHẬP HỌC ĐỢT 2 (Thực hiện từ ngày 17/8 - 25/10/2020).</p></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrangChu;