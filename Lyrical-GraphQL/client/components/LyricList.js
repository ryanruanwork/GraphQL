import React, { Component } from 'react';

class LyricList extends Component {
    renderLyrics() {
        return this.props.lyrics.map(({id, content, likes}) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                    <i>
                        Good
                    </i>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        )
    }
}

export default LyricList;

