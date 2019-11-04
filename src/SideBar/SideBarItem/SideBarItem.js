import React from 'react';
import './SideBarItem.css'

class SideBarItem extends React.Component {
    render() {
        return (
            <a href={this.props.url} className="SideBarItem">{this.props.children}</a>
        );
    }
}

export default SideBarItem;