import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../actions';

class StreamDisplay extends React.Component {
    constructor (props) {
        super(props);
        this.videoRef = React.createRef();
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    buildPlayer () {
        if (this.player || !this.props.stream) {
            return;
        } 
        const { id } = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }
    
    render () {
        if(!this.props.stream) {
            return <div>loading...</div>;
        }
        return (
            <div className = "stream-display">
                <h3 className ="list-link"><u>{this.props.stream.title}</u> <b>by {this.props.stream.streamer}</b></h3>
                <h4>{this.props.stream.steamer}</h4>
                <video style={{ width: '100%'}} controls ref={this.videoRef} />
                <p>{this.props.stream.description}</p>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamDisplay);