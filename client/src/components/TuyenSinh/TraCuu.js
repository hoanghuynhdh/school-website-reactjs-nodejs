import React, { Component } from 'react';
import TaskControl from './TaskControl';

class TraCuu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword : '',
        };
    }
    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        });
    }
    render() {
        // console.log(this.props)
        return (
            <div className="container" style={{color:"red"}}>
                <h5>TRA CỨU THÍ SINH ĐĂNG KÝ ONLINE</h5><br/>
                <h4>Bạn nhập họ tên thí sinh hoặc chứng minh nhân dân để tra cứu đăng ký online...!</h4>
                <div className="" style={{width:"100%"}}>
                    <TaskControl onSearch={this.onSearch} />
                </div>
            </div>
        );
    }
    
}

export default TraCuu;