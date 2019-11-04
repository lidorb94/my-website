import React from 'react';
import './FooterItem.css'

class FooterItem extends React.Component {
    render() {
        return (
            <a href={this.props.url} className="FooterItem">{this.props.children}</a>
        );
    }
}

export default FooterItem;