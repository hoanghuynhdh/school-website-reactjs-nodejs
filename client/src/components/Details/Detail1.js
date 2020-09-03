import React, { Component } from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { NavLink } from 'react-router-dom';

class Detail1 extends Component {
    render() {
        return (
            <div className="container text-left">
                <div className="row">
                    <div className="col-9">
                        <div>
                            <h4 style={{ color: "blue" }}>Đây là trang tin tức 1</h4>
                            <p><small><DateRangeIcon /> 12/08/2020</small></p>
                        </div>
                        <hr />
                        <div>
                            <h5>1. GIỚI THIỆU CHUNG</h5>
                            <p style={{ fontSize: "16px" }}>Hiện nay, ngành Công nghệ thông tin là một trong những ngành học được chú trọng trong hệ thống đào tạo của trường Cao đẳng Công nghệ thông tin TP.HCM. Nó được xem là ngành đào tạo mũi nhọn hướng đến sự phát triển của công nghệ và khoa học kỹ thuật trong thời đại số hóa ngày nay.</p>

                            <p style={{ fontSize: "16px" }}>Công nghệ thông tin là một ngành học được đào tạo để sử dụng máy tính và các phần mềm máy tính để phân phối và xử lý các dữ liệu thông tin, đồng thời dùng để trao đổi, lưu trữ và chuyển đổi các dữ liệu thông tin dưới nhiều hình thức khác nhau.</p>
                            <div className="text-center">
                                <img src="template/images/123.jpg" style={{ width: "80%", height: "400px" }} alt="news1" />
                            </div>
                            <br />
                            <h5>2. MỤC TIÊU ĐÀO TẠO NGÀNH CÔNG NGHỆ THÔNG TIN TẠI ITC</h5>
                            <h5>2.1. Mục tiêu chung:</h5>
                            <p style={{ fontSize: "16px" }}> Có phẩm chất chính trị, đạo đức nghề nghiệp và sức khỏe tốt;.</p>
                            <p style={{ fontSize: "16px" }}>Đáp ứng được cho các doanh nghiệp gia công phần mềm;</p>
                            <p style={{ fontSize: "16px" }}> Thành thạo các kỹ năng nghiệp vụ trong lĩnh vực chuyên môn, làm việc nhóm, và khả năng tự học.</p>

                            <br />
                            <div className="text-center">
                                <img src="template/images/3.jpg" style={{ width: "80%", height: "400px" }} alt="3" />
                            </div>
                            <br />

                            <h5 style={{color:"red"}} >2.2. Mục tiêu cụ thể:</h5>
                            
                            <p style={{ fontSize: "16px" }}>Tham gia được vào trong các dự án phát triển phần mềm với một trong những vai trò sau: lập trình front-end, lập trình back-end, lập trình ứng dụng di động, xử lý dữ liệu, thu thập và phân tích yêu cầu khách hàng </p>
                            <p style={{ fontSize: "16px" }}>Có kỹ năng làm việc nhóm với các công cụ GIT, GIThub, Redmine, Jira, Bicbucket, nắm vững qui trình SCRUM, Waterfall.</p>
                            <p style={{ fontSize: "16px" }}>Có khả năng liên thông đại học: Trên cơ sở kiến thức được trang bị, người học từng bước hoàn thiện khả năng tự bồi dưỡng và tiếp tục học ở trình độ cao hơn.</p>
                            <p style={{ color: "blue" }}><strong>Tin: Người đăng tin</strong></p>

                            <p style={{ color: "blue" }}><strong>Phòng Cộng tác sinh viên</strong></p>
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
                        <NavLink to="/"><h4 style={{ textAlign: "left" }}>Thông Báo</h4></NavLink>
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

export default Detail1;