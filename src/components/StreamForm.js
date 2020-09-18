import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className = "form-error">{error}</div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => { //takes a set of properties from reduxForm and passes them to the input
        return (
            <div className = "form-unit">
            <label>{label}</label>
            <input {...input} /> 
            {this.renderError(meta)}
            </div>
        );
    }

    renderDescription = ({ input, label, meta }) => { 
        return (
            <div className = "form-unit">
            <label>{label}</label>
            <textarea className = "create-description" {...input} /> 
            {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues); //POSTs an updated stream with our formValues to our API endpoint
    }

    render() {
        return ( //handleSubmit takes care of preventDefault for us
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)}> 
                <Field name="title" component={this.renderInput} label="title:"/>
                <Field name="streamer" component={this.renderInput} label="streamer:"/>
                <Field name="description" component={this.renderDescription} label="description:"/> 
                <button onClick = {this.props.handleSubmit(this.onSubmit)}>create!</button>
            </form>
        );
    }
};

const validate = (formValues) => { //verifies a title and description were entered
    const errors = {};

    if (!formValues.title) {
        errors.title = 'you need a title!';
    }

    if (!formValues.streamer) {
        errors.streamer = 'you need a name!';
    }

    if (!formValues.description) {
        errors.description = 'you need a description!';
    }

    return errors; //returns an empty object if nothing is wrong
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);