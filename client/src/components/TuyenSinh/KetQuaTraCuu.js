import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
class KetQuaTraCuu extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
      }
      componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            this.setState({ users: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    render() {
        return (
            <div className="container">
                <h5>THÔNG TIN THÍ SINH ĐĂNG KÝ ONLINE</h5>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">CMND</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">Nơi sinh</th>
                        <th scope="col">Ngành học</th>
                        <th scope="col">Kết quả xét tuyển</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(users => {
                            return (
                                <tr key={users._id}>
                                    <th scope="row">{users.cmnd}</th>
                                    <td>{users.hovaten}</td>
                                    <td>{users.gioitinh}</td>
                                    <td>{users.ngaysinh}</td>
                                    <td>{users.noisinh}</td>
                                    <td>{users.nganhdangky}</td>
                                    <td>Trúng tuyển</td>
                                </tr>
                            )})}
                    </tbody>
                </table>
                <div>
                    <Button variant="contained" type="submit" color="primary"><NavLink to="/tra-cuu-dang-ky-online">Tìm tiếp</NavLink></Button>
                </div>
                <div className="text-left">
                    <p><strong>Lưu ý:</strong> Thí sinh vui lòng gởi hồ sơ về địa chỉ: <strong>12 Trịnh Đình Thảo, P. Hòa Thạnh, Q. Tân Phú, Tp.Hồ Chí Minh</strong> để được cấp giấy báo trúng tuyển.</p>
                    <p>Hồ sơ gồm:</p>
                    <p><strong>1.</strong> Phiếu đăng ký xét tuyển <NavLink to="/">(Download tại đây)</NavLink></p>
                    <p><strong>2.</strong> Học bạ THPT (hoặc tương đương) sao y có công chứng</p>
                    <p><strong>3.</strong> Bằng tốt nghiệp THPT hoặc giấy chứng nhận tốt nghiệp THPT sao y có công chứng (có thể bổ sung sau)</p>
                    <p><strong>4.</strong> Lệ phí xét tuyển 30.000 VNĐ</p>
                    <p>(Đối với thí sinh nộp trực tiếp có thể nộp bản photo sau khi được cán bộ tuyển sinh đối chiếu với bản gốc)</p>
                    <p>Trường hợp ở xa có thể nộp khi nhập học. Thí sinh cần gọi điện thoại vào số: (028) 3 8605 004 để để giữ chỗ.</p>
                </div>
            </div>
        );
    }
}

export default KetQuaTraCuu;