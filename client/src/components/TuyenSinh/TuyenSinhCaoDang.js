import React, { Component } from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { NavLink } from 'react-router-dom';

class TuyenSinhCaoDang extends Component {
    render() {
        return (
            <div className="container text-left">
                <div className="row">
                    <div className="col-9">
                        <div>
                            <h4 style={{color:"blue"}}>Thông báo tuyển sinh đào tạo trình độ Tiến sĩ năm 2020</h4>
                            <p><small><DateRangeIcon/> 12/08/2020</small></p>
                        </div>
                        <hr/>
                        <div>
                            <p style={{color:"blue"}}><strong>1. Chuyên ngành đào tạo</strong></p>
                            <p><strong>- Kỹ thuật điện</strong> (mã ngành: 952021)</p>
                            <p><strong>- Quản trị kinh doanh</strong> (mã ngành: 9340101)</p>
                            <p style={{color:"blue"}}><strong>2. Hình thức và thơi gian đào tạo</strong></p>
                            <p>Đào tạo theo hình thức tập trung: 03 năm đối với người đã tốt nghiệp Thạc sĩ, 04 năm đối với người đã tốt nghiệp Đại học.</p>
                            <p style={{color:"blue"}}><strong>3. Điều kiện dự tuyển nghiên cứu sinh</strong></p>
                            <p>Người tham gia dự tuyển cần đảm bảo các điều kiện sau:</p>
                            <p>3. 1. Có bằng tốt nghiệp đại học loại giỏi trở lên hoặc bằng thạc sĩ.</p>
                            <p>3. 2. Là tác giả ít nhất 01 bài báo hoặc báo cáo liên quan đến lĩnh vực dự định nghiên cứu đăng trên tạp chí khoa học hoặc kỷ yếu hội nghị, hội thảo khoa học chuyên ngành có phản biện trong thời hạn 03 năm (36 tháng) tính đến ngày đăng ký dự tuyển.</p>
                            <p>3. 3. Người dự tuyển là công dân Việt Nam phải có một trong những văn bằng, chứng chỉ chứng minh về năng lực ngoại ngữ sau:</p>
                            <p>- Bằng tốt nghiệp đại học hoặc bằng thạc sĩ do cơ sở đào tạo nước ngoài cấp cho người học toàn thời gian ở nước ngoài mà ngôn ngữ được sử dụng trong quá trình học tập là tiếng Anh hoặc tiếng nước ngoài khác.</p>
                            <p>- Bằng tốt nghiệp đại học các ngành ngôn ngữ nước ngoài do các cơ sở đào tạo của Việt Nam cấp.</p>
                            <p>- Chứng chỉ tiếng Anh TOEFL iBT từ 45 trở lên hoặc chứng chỉ IELTS (Academic Test) từ 5.0 trở lên do một tổ chức khảo thí được quốc tế và Việt Nam công nhận cấp trong thời hạn 02 năm (24 tháng) tính đến ngày đăng ký dự tuyển.</p>
                            <p>- Nguời dự tuyển đáp ứng quy định tại điểm a của Mục 3.3 khi ngôn ngữ sử dụng trong thời gian học tập không phải là tiếng Anh; hoặc đáp ứng quy định tại điểm b của Mục 3.3 khi có bằng tốt nghiệp đại học ngành ngôn ngữ nuớc ngoài không phải là tiếng Anh; hoặc có các chứng chỉ tiếng nuớc ngoài khác tiếng Anh ở trình độ tương đương (quy định tại Phụ lục II) theo quy định tại điểm c của Mục 3.3 do một tổ chức khảo thí được quốc tế và Việt Nam công nhận cấp trong thời hạn 02 năm (24 tháng) tính đến ngày đăng ký dự tuyển thì phải có khả năng giao tiếp được bằng tiếng Anh trong chuyên môn (có thể diễn đạt những vấn đề thuộc lĩnh vực chuyên môn cho nguời khác hiểu bằng tiếng Anh và hiểu đuợc nguời khác trình bày những vấn đề chuyên môn bằng tiếng Anh).</p>
                            <p>4. Người dự tuyển là công dân nước ngoài phải có trình độ tiếng Việt tối thiểu từ Bậc 4 trở lên theo khung năng lực tiếng Việt dùng cho người nước ngoài hoặc đáp ứng yêu cầu về ngoại ngữ theo yêu cầu cụ thể của cơ sở đào tạo.</p>
                            <p>5. Đạt đủ điều kiện về kinh nghiệm quản lý và thâm niên công tác theo yêu cầu cụ thể của từng ngành dự tuyển do thủ trưởng cơ sở đào tạo quy định.</p>
                            <p style={{color:"blue"}}><strong>4. Hồ sơ xét tuyển nghiên cứu sinh</strong></p>
                            <p>4. 1. Đơn xin dự tuyển (theo mẫu).</p>
                            <p>4.2. Lý lịch khoa học, Sơ yếu lý lịch (theo mẫu).</p>
                            <p>4.3. Bản sao văn bằng, chứng chỉ có chứng thực hoặc bản sao kèm theo bản chính để đối chiếu.</p>
                            <p>- Bằng và bảng điểm đại học.</p>
                            <p>- Bằng và bảng điểm thạc sĩ.</p>
                            <p>- Bằng hoặc chứng chỉ ngoại ngữ còn thời hạn.</p>
                            <p>- Các văn bằng, chứng chỉ khác (nếu có).</p>
                            <p>Các văn bằng và bảng điểm do cơ sở đào tạo nước ngoài cấp phải được dịch, công chứng và được cơ quan có thẩm quyền công nhận văn bằng theo quy định hiện hành.</p>
                            <p>4.4. Minh chứng kinh nghiệm nghiên cứu khoa học được quy định tại Mục 3.2 của Thông báo này. Gồm 06 bản sao các công trình nghiên cứu khoa học đã công bố (đóng thành tập, ghi tên và kê khai danh mục ở trang bìa), cụ thể:</p>
                            <p>- Đối với bài báo: Bản sao trang bìa, mục lục và nội dung bài báo.</p>
                            <p>- Đối với đề tài nghiên cứu khoa học: Bản sao Quyết định/Hợp đồng thực hiện, Biên bản nghiệm thu đề tài và Bản tóm tắt nội dung đề tài nghiên cứu (đối với người tham gia phải có xác nhận của chủ nhiệm đề tài).</p>
                            <p>4.5. 01 bản gốc và 05 bản sao của thư giới thiệu đánh giá phẩm chất nghề nghiệp, năng lực chuyên môn và khả năng năng lực nghiên cứu của người dự tuyển của ít nhất 01 nhà khoa học có chức danh giáo sư, phó giáo sư hoặc có học vị tiến sĩ khoa học, tiến sĩ đã tham gia hoạt động chuyên môn với người dự tuyển và am hiểu lĩnh vực mà người dự tuyển dự định nghiên cứu.</p>
                            <p>4.6. 06 bản đề cương về dự định nghiên cứu của thí sinh dự tuyển.</p>
                            <p>4.7. 02 ảnh 3x4</p>
                            <p>4.8. Bản cam kết thực hiện nghĩa vụ học tập, nghiên cứu và chế độ tài chính đối với quá trình đào tạo theo quy định.</p>
                            <p>4.9. Giấy khám sức khỏe.</p>
                            <p>Nhà trường không hoàn trả lại hồ sơ sau khi nộp.</p>
                            <p style={{color:"blue"}}><strong>5. Thời gian nộp hồ sơ và xét tuyển</strong></p>
                            <p>- Thời gian nộp hồ sơ: Từ ngày ra thông báo đến hết ngày <strong>31/5/2020</strong></p>
                            <p>- Thời gian bảo vệ đề cương (dự kiến): Các ngày <strong>27 - 28/6/2020</strong></p>
                            <p style={{color:"blue"}}><strong>6. Lệ phí tuyển sinh nghiên cứu sinh: </strong><span style={{color:"black"}}>5.200.000 đồng</span></p>
                            <p style={{color:"blue"}}><strong>7. Địa điểm phát và nhận hồ sơ</strong></p>
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

export default TuyenSinhCaoDang;