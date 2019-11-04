import React from 'react';
import './MenuItem.css'

class MenuItem extends React.Component {
    render() {
        return (
            <a href={this.props.url} className="MenuItem">{this.props.children}</a>
        );
    }
}

export default MenuItem;