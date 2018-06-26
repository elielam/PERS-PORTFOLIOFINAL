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
        width: "50vw",
        left: "25vw",
        top: "15vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: "4px solid #393E41"

    },
    form: {
        height: "90%",
        width: "90%",
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',

    },
    titleDiv: {
        height: "10%",
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        color: "grey"
    },
    inputsDiv: {
        height: "70%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnDiv: {
        height: "20%",
        width: "30%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mailInput: {
        height: "7%",
        width: "100%",
        border: "none !important",
        borderBottom: "1px solid lightgrey !important",
        outline: "none !important"
    },
    nameInput: {
        marginTop: "2%",
        height: "7%",
        width: "100%",
        border: "none !important",
        borderBottom: "1px solid lightgrey !important",
        outline: "none !important"
    },
    lastnameInput: {
        marginTop: "2%",
        height: "7%",
        width: "100%",
        border: "none !important",
        borderBottom: "1px solid lightgrey !important",
        outline: "none !important"
    },
    subjectInput: {
        marginTop: "2%",
        height: "7%",
        width: "100%",
        border: "none !important",
        borderBottom: "1px solid lightgrey !important",
        outline: "none !important"
    },
    messageInput: {
        marginTop: "2%",
        height: "30%",
        width: "100%",
        border: "none !important",
        borderBottom: "1px solid lightgrey !important",
        outline: "none !important"
    },
    btnSubmit: {
        marginTop: "2%",
        height: "30%",
        width: "40%",
        border: "0.1px solid blue !important",
        backgroundColor: "white !important",
    },
    btnClose: {
        marginTop: "2%",
        height: "30%",
        width: "40%",
        border: "0.1px solid red !important",
        backgroundColor: "white !important",
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
            mail: '',
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
        alert('The message submitted by: ' + this.state.name + ' ' + this.state.lastname + ' cannot be send. Try on pro@elielaloum.fr !');
        this.props.open = false;
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

                            <div className={classes.titleDiv}>
                                <h4>CONTACT ME</h4>
                            </div>

                            <div className={classes.inputsDiv}>

                                <input
                                id="contact-mail-input"
                                placeholder="Mail"
                                className={classes.mailInput}
                                onChange={this.handleChange('mail')}
                                />

                                <input
                                id="contact-name-input"
                                placeholder="Name"
                                className={classes.nameInput}
                                onChange={this.handleChange('name')}
                                />

                                <input
                                    id="contact-lastname-input"
                                    placeholder="Lastname"
                                    className={classes.lastnameInput}
                                    onChange={this.handleChange('lastname')}
                                />

                                <input
                                    id="contact-subject-input"
                                    placeholder="Subject"
                                    className={classes.subjectInput}
                                    onChange={this.handleChange('subject')}
                                />

                                <input
                                    id="contact-message-input"
                                    placeholder="Message"
                                    className={classes.messageInput}
                                    onChange={this.handleChange('message')}
                                />

                            </div>

                            <div className={classes.btnDiv}>
                                <button className={classes.btnSubmit} type="submit">
                                    Send
                                </button>
                                <button className={classes.btnClose} onClick={handleBtnContactModalClose}>
                                    Cancel
                                </button>
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