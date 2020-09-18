import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    onSubmit = formValues => {
        this.props.createStream(formValues); //POSTs a new stream with our formValues to our API endpoint
    }

    render() {
        return (
            <div className = "create-form">
                <h1 className = "web-title">create a nanostream:</h1>
                <h1 className = "mobile-title">create:</h1>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

export default connect(null, { createStream })(StreamCreate);