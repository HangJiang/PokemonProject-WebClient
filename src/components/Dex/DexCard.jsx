import React, { Component } from 'react';

class DexCard extends Component {
    state = {  }
    render() {
        const {pm} = this.props;
        return (
            <div style={{height: "200px", width : "200px", border : "2px solid blue"}}>
               <span>图鉴编号</span>
                <span>分类</span>
                <span>icon</span>
                <span>{pm.nameCN}</span>
                <span>属性</span>
                <span>特性12</span>
                <span>梦特</span>
                <span>种族值</span>
                <span>生蛋分组</span>
            </div>
        );
    }
}

export default DexCard;