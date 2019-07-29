import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import query from '../queries/fetchSong';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.mutate({
            variables: { 
                content: this.state.content,
                songId: this.props.songId
            },
            refetchQueries: [{ query }]
        }).then(() => this.setState({ content: '' }))
        .catch(() => {})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Lyric</label>
                <input 
                    onChange={(event) => this.setState({content: event.target.value})}
                    value={this.state.content}
                />
            </form>
        )
        
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID!) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            title
            lyrics {
                id
                content
            }
        }
    }
`;


export default graphql(mutation)(LyricCreate);