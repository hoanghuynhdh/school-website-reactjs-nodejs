import React, { Component } from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { NavLink } from 'react-router-dom';

class LienThong extends Component {
    render() {
        return (
            <div className="container text-left">
                <div className="row">
                    <div className="col-9">
                        <div>
                            <h4 style={{color:"blue"}}>Thông báo tuyển sinh liên thông TCCN, Cao đẳng, Cao đẳng nghề lên Đại học năm 2020</h4>
                            <p><small><DateRangeIcon/> 12/08/2020</small></p>
                        </div>
                        <hr/>
                        <div>
                            <p style={{color:"blue"}}><strong>Chuyên ngành và các môn thi tuyển</strong></p>
                            <table className="table table-bordered text-center">
                                <thead style={{background:"rgb(102, 255, 255)"}}>
                                    <tr>
                                        <th rowSpan={2} scope="col">TT</th>
                                        <th rowSpan={2} scope="col">Chuyên ngành</th>
                                        <th rowSpan={2} scope="col">Mã ngành</th>
                                        <th colSpan={3} scope="col">Các môn thi tuyển</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Môn 1</th>
                                        <th scope="col">Môn 2</th>
                                        <th scope="col">Môn 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Kỹ thuật điện</td>
                                        <td>8520201</td>
                                        <td>Cơ sở kỹ thuật điện</td>
                                        <td>Toán cao cấp</td>
                                        <td>Tiếng Anh</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Kỹ thuật cơ điện tử</td>
                                        <td>8520114</td>
                                        <td>Cơ sở kỹ thuật điện</td>
                                        <td>Toán cao cấp</td>
                                        <td>Tiếng Anh</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Kỹ thuật cơ điện tử</td>
                                        <td>8520114</td>
                                        <td>Kỹ thuật môi trường</td>
                                        <td>Toán cao cấp</td>
                                        <td>Tiếng Anh</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Kỹ thuật cơ điện tử</td>
                                        <td>8520114</td>
                                        <td>Kỹ thuật môi trường</td>
                                        <td>Toán cao cấp</td>
                                        <td>Tiếng Anh</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Kỹ thuật cơ điện tử</td>
                                        <td>8520114</td>
                                        <td>Kỹ thuật môi trường</td>
                                        <td>Toán cao cấp</td>
                                        <td>Tiếng Anh</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Kỹ thuật cơ điện tử</td>
                                        <td>8520114</td>
                                        <td>Kỹ thuật môi trường</td>
                                        <td>Toán cao cấp</td>
                                        <td>Tiếng Anh</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p style={{color:"blue"}}><strong>Thời gian đào tạo: </strong><span style={{color:"black"}}>1,5 năm</span></p>
                            <p style={{color:"blue"}}><strong>Điều kiện dự thi</strong></p>
                            <p>- Đã tốt nghiệp đại học đúng ngành hoặc phù hợp với ngành, chuyên ngành đăng ký dự thi.</p>
                            <p>- Người có bằng tốt nghiệp đại học ngành gần với chuyên ngành dự thi cần học bổ sung kiến thức trước khi thi (các môn học bổ sung kiến thức được xác định dựa trên bảng điểm trình độ đại học của thí sinh).</p>
                            <p>- Văn bằng đại học do cơ sở giáo dục nước ngoài cấp phải được công nhận theo quy định.</p>
                            <p style={{color:"blue"}}><strong>Hồ sơ đăng kí dự thi</strong></p>
                            <p>1. Đơn đăng ký dự thi (theo mẫu).</p>
                            <p>2. Sơ yếu lý lịch có xác nhận của chính quyền địa phương hoặc cơ quan công tác (theo mẫu).</p>
                            <p>3. Bản sao công chứng bằng Đại học.</p>
                            <p>4. Bản sao công chứng bảng điểm Đại học.</p>
                            <p>5. Bản sao công chứng bằng Cao đẳng (nếu có).</p>
                            <p>6. Bản sao công chứng bảng điểm Cao đẳng (nếu có).</p>
                            <p>7. Bản sao công chứng bảng điểm chuyển đổi (nếu có).</p>
                            <p>8. Bản sao công chứng giấy tờ về đối tượng ưu tiên (nếu có).</p>
                            <p>9. Bản sao công chứng văn bằng hoặc chứng chỉ ngoại ngữ (nếu có).</p>
                            <p>10. Bản sao công chứng văn bằng hoặc chứng chỉ ngoại ngữ (nếu có).</p>
                            <p>11. 06 hình 3x4 (ghi rõ họ tên, ngày sinh, nơi sinh).</p>
                            <p>12. Giấy khám sức khỏe (trong vòng 6 tháng).</p>
                            <p style={{color:"blue"}}><strong>Thời gian và nơi nhận hồ sơ.</strong></p>
                            <p>- Nhận hồ sơ: Từ ngày ra thông báo đến hết ngày <strong>10/05/2020.</strong></p>
                            <p>- Thời gian ôn tập: Dự kiến từ ngày <strong>28/03/2020 đến ngày 10/05/2020.</strong></p>
                            <p>- Lệ phí ôn tập: 1.000.000 đồng/môn học.</p>
                            <p>- Lệ phí thi: 420.000 đồng/kỳ thi.</p>
                            <p>- Tổ chức thi tuyển sinh: Các ngày <strong>23 – 24/05/2020.</strong></p>
                            <p style={{color:"blue"}}><strong>Địa điểm hướng dẫn thủ tục và nhận hồ sơ</strong></p>
                            <p><strong>Viện Đào tạo Sau đại học </strong></p>
                            <p>Trường Cao Đẳng Công Nghệ Thông Tin (ITC)</p>
                            <p>Địa chỉ: 12 Trịnh Đình Thảo, Tân Phú, TP.HCM</p>
                            <p><strong>Điện thoại: (028) 3 512 0781</strong></p>
                            <p><strong>Hotline: 0967 54 54 18 (Cô Phú)</strong></p>
                            <p>Website: http://itc.edu.vn/</p>
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

export default LienThong;