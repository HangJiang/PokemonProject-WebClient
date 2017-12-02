import React, { Component } from 'react';

class DexCard extends Component {

    render() {
        const { pm } = this.props;
        console.log(pm)
        return (
            <li>
                <span>图鉴编号</span>
                <span>分类</span>
                <span>icon</span>
                <span>{pm.nameCN}</span>
                <span>属性</span>
                <span>特性12</span>
                <span>梦特</span>
                <span>种族值</span>
                <span>生蛋分组</span>
            </li>
        );
    }
}

export default DexCard;