import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword : '',
            users: [],
            isRedirect: false
        }
    }

    onHandleChange = (event) => {
        this.setState({
            keyword : event.target.value            
        });
    }

    onSearch = (keyword) => {
        this.props.onSearch(this.state.keyword);
        console.log(this.state.keyword)
    }
    render() {
        return (
            <div>
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
                    <TextField id="outlined-search" label="Nhập tên thí sinh hoăc CMND" type="search" name="keyword" value={this.state.keyword} onChange={this.onHandleChange} variant="outlined" />
                    <div>
                        <Button variant="contained" type="submit" color="primary" onClick={this.onSearch}><NavLink to="/ket-qua-tra-cuu-online">Tìm kiếm</NavLink></Button>
                    </div>
            </div>
        );
    }
}

export default Search;