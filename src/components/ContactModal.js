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
        backgroundColor: "white",
        position: "absolute",
        height: "70vh",
        width: "70vw",
        left: "15vw",
        top: "15vh",
        borderShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

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
    },
    btnDiv: {
        height: "20%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameInput: {
        height: "auto",
        width: "100%",
    },
    lastnameInput: {
        marginTop: "2%",
        height: "auto",
        width: "100%",
    },
    subjectInput: {
        marginTop: "2%",
        height: "auto",
        width: "100%",
    },
    messageInput: {
        marginTop: "2%",
        height: "auto",
        width: "100%",
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

class ContactModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            subject: '',
            message: '',
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
        alert('A message was submitted by: ' + this.state.name + ' ' + this.state.lastname);
        event.preventDefault();
    }

    render() {
        const { classes, open, handleBtnContactModalClose } = this.props;

        return (
            <div>
                {open === true &&
                <div
                    className={ classes.modal }
                    onClose={handleBtnContactModalClose}
                >
                    <div className={classes.closeBtn} onClick={handleBtnContactModalClose}>
                        <i className="fas fa-times fa-2x"/>
                    </div>

                    <div className={classes.thumb}>

                        <form className={classes.form} onSubmit={this.handleSubmit} noValidate autoComplete="on">

                            <div className={classes.inputsDiv}>

                                <TextField
                                id="contact-name-input"
                                label="Enter your name :"
                                placeholder="Name"
                                className={classes.nameInput}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                />

                                <TextField
                                    id="contact-lastname-input"
                                    label="Enter your lastname :"
                                    placeholder="Lastname"
                                    className={classes.lastnameInput}
                                    onChange={this.handleChange('lastname')}
                                    margin="normal"
                                />

                                <TextField
                                    id="contact-subject-input"
                                    label="Enter subject :"
                                    placeholder="Subject"
                                    className={classes.subjectInput}
                                    onChange={this.handleChange('subject')}
                                    margin="normal"
                                />

                                <TextField
                                    id="contact-message-input"
                                    label="Enter message :"
                                    placeholder="Message"
                                    multiline
                                    rows={10}
                                    className={classes.messageInput}
                                    onChange={this.handleChange('message')}
                                    margin="normal"
                                />

                            </div>

                            <div className={classes.btnDiv}>
                                <Button variant="raised" className={classes.btnSubmit} type="submit">
                                    Send
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

ContactModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactModal);