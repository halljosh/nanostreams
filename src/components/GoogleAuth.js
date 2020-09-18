import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => { //initializes the GAPI library
            window.gapi.client.init({
                clientId: '115338322854-eoigb44778dcuhdsjsgn0q2s0cbd7pfu.apps.googleusercontent.com',
                scope: 'email' //defines the scope of what you're requesting from the user
            }).then(() => { //only invoked once the GAPI library is initialized
                this.auth = window.gapi.auth2.getAuthInstance(); //just a reference to the auth object
                this.onAuthChange(this.auth.isSignedIn.get()) //gets auth status
                this.auth.isSignedIn.listen(this.onAuthChange); //listens for changes to auth status
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId()); //gets user's Google ID
        } else {
            this.props.signOut();
        }
    };

    authButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return <button className = "nav-login" onClick = {this.auth.signOut}>logout</button>;
        } else {
            return <button className = "nav-login" onClick = {this.auth.signIn}>login</button>;
        }
    }

    render() {
        return (
            <div>
                {this.authButton()}
            </div>
        );
    };
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);