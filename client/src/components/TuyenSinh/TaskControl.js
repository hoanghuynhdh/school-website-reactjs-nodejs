import React, { Component } from 'react';
import Search from './Search';

class TaskControl extends Component {
    render() {
        return (
            <div>
                <Search onSearch={this.props.onSearch} />
            </div>
        );
    }
}

export default TaskControl;