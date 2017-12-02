import React, { Component } from 'react';
import DexCard from './DexCard';
import DexListItem from './DexListItem';


class DexList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map((item) => {
                        return this.props.islist ?
                            <DexCard key={item.pmid} pm={item} /> :
                            <DexListItem key={item.pmid} pm={item} />

                    })}
                </ul>
            </div>
        );
    }
}

export default DexList;