import React from 'react';
import Modal from './Modal'
import history from '../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderContent() {
        if (!this.props.stream) {
            return 'really delete?';
        }
        return `really delete ${this.props.stream.title}?`;
    }

    render() {
        const id = this.props.match.params.id;

        return (
            <div>
			<Modal content={this.renderContent()} action1="yep" action2="nope" onAccept={() => this.props.deleteStream(id)} onDismiss={() => history.push('/list')}/>
			</div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);