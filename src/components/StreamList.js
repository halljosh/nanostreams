import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../actions';
var faker = require('faker');

class StreamList extends React.Component {    
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderButtons(stream) { //detects if a user may delete/edit a stream
        if (stream.userId === this.props.currentUserId) { 
            return (
                <div className = "list-buttons">
                    <Link to={`/streams/edit/${stream.id}`}>
                    <button>edit</button>&nbsp;
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`}>
                    &nbsp;<button>delete</button>
                    </Link>
                </div>
            );
        }
    }

    renderCreate() { //allows stream creation if user is signed in
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to="/streams/new">
                    <button>create stream</button>
                    </Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className = "list-chunk" key={stream.id}>
                    <Link to={`/streams/display/${stream.id}`}>
                        <h3 className ="list-link"><u>{stream.title}</u> <b>by {stream.streamer}</b></h3>
                    </Link>
                        <div className = "thumbnail-chunk">
                            <img alt = "video thumbnail" className = "thumbnail" src={faker.image.abstract(400, 200)} />
                            <p>{stream.description}</p>
                        </div>
                    {this.renderButtons(stream)}
                    <hr />
                </div>
            );
        });
    }

    render() {
        return (
            <div className = "stream-list">
                <h1 className="web-title">current nanostreams:</h1>
                <h1 className = "mobile-title">current:</h1>
                {this.renderList()}
                <div className = "list-chunk"> 
                    <h3 className ="list-link"><a href="https://www.youtube.com/watch?v=GkN9-kLPFXs"><u>Splatoon 2 Live Stream</u></a> <b>by asquidmin</b></h3>
                        <div className = "thumbnail-chunk">
                            <img alt = "video thumbnail" className = "thumbnail" src="https://i.ytimg.com/vi/apHfQNedUQQ/maxresdefault.jpg" />
                            <p>Wednesday on Splatoon 2 chillin then Private Battles Friend Code: 5288-3920-7503 (you get to play in one lobby for two games)</p>
                        </div>
                    <hr />
                </div>
                <div className = "list-chunk"> 
                    <h3 className ="list-link"><a href="https://www.youtube.com/watch?v=l24IFC4W1-0"><u>Streaming With Friends! More Splatoon 2!</u></a> <b>by Captain Astronaut</b></h3>
                        <div className = "thumbnail-chunk">
                            <img alt = "video thumbnail" className = "thumbnail" src="https://pbs.twimg.com/media/D_JyN7uXUAE1jpU.jpg:large" />
                            <p>Splatoon 2 Livestream: League Battles for ~1 hour, then Private Battles with Viewers (that's you!). Sorry I'm bad at the game lol</p>
                        </div>
                    <hr />
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => { //this returns an array
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);