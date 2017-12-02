import React, { Component } from 'react';

class SearchBar extends Component {
    state = {  }
    render() {
        return (
            <div style={{height: "100px" , border : "2px solid orange"}}>
                <button onClick={this.props.changeListOrCard}>切换</button>
                <div>输入内容搜索</div>
                <div>过滤 <span>按分级过滤</span> <span>按属性过滤</span> <span>按特性过滤</span></div>
                <div>排序 <span>按名字排序</span> <span>按种族值排序</span> <span>按编号排序</span></div>
            </div>
        );
    }
}

export default SearchBar;