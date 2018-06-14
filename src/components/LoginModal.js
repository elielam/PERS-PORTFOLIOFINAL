import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {TextField, Button} from "@material-ui/core";

const styles = {
    modal: {
        backgroundColor: "rgba(0,0,0, 0.6)",
        position: "absolute",
        height: "100vh",
        width: "100vw",
        left: 0,
        top: 0,
        display: 'block !important',
    },
    thumb: {
        backgroundColor: "#393E41",
        color: "white",
        position: "absolute",
        height: "60vh",
        width: "20vw",
        left: "40vw",
        top: "20vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: "4px solid white",

    },
    form: {
        height: "90%",
        width: "90%",
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',

    },
    inputsDiv: {
        height: "80%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnDiv: {
        height: "20%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mailInput: {
        height: "10%",
        width: "100%",
        textAlign: "center",
    },
    passwordInput: {
        marginTop: "2%",
        height: "10%",
        width: "100%",
        textAlign: "center",
    },
    btnSubmit: {
        marginTop: "2%",
    },
    closeBtn: {
        color: 'white',
        position: "absolute",
        top: "2vh",
        right: "2vw",
        height: "5vh",
        width: "2.5vw",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit(event) {
        alert('Connection try by: ' + this.state.mail + ' identified by ' + this.state.password);
        event.preventDefault();
    }

    render() {
        const { classes, open, handleLoginModalClose } = this.props;

        return (
            <div>
                {open === true &&
                <div
                    className={ classes.modal }
                    onClose={handleLoginModalClose}
                >
                    <div className={classes.closeBtn} onClick={handleLoginModalClose}>
                        <i className="fas fa-times fa-2x"/>
                    </div>

                    <div className={classes.thumb}>

                        <form className={classes.form} onSubmit={this.handleSubmit} noValidate autoComplete="on">

                            <div className={classes.inputsDiv}>

                                <input
                                id="contact-mail-input"
                                label="Enter your mail :"
                                placeholder="Mail"
                                className={classes.mailInput}
                                onChange={this.handleChange('mail')}
                                />

                                <input
                                    id="contact-password-input"
                                    label="Enter your password :"
                                    placeholder="Password"
                                    className={classes.passwordInput}
                                    onChange={this.handleChange('password')}
                                    margin="normal"
                                />

                            </div>

                            <div className={classes.btnDiv}>
                                <Button variant="raised" className={classes.btnSubmit} type="submit">
                                    Login
                                </Button>
                            </div>
                        </form>

                    </div>
                </div>
                }
            </div>
        );
    }
}

LoginModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginModal);