import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './assets/SkillTab.scss';
import Button from "@material-ui/core/es/Button/Button";

const styles = {
    modal: {
        margin: "0 !important",
        padding: "0 !important",

        minHeight: "100% !important",
        height: "100% !important",
        maxHeight: "100% !important",

        minWidth: "100% !important",
        width: "100% !important",
        maxWidth: "100% !important",

        position: "absolute",
        top: "0",
        left: "0",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",

        textAlign: "center",

        color: "white",

        backgroundColor: "rgba(0,0,0,0.8)",
    },
};

class ModalAlertExperimental extends Component {
    render() {

        const { classes, page, handleModalAlertExperimentalClose } = this.props;

        return (

            /* ------------------------- ModalAlertExperimental ------------------------- */

            <div className={classes.modal}>
                <i className="fas fa-flask fa-5x"></i>
                <br/>
                <h3>{page}</h3>
                <br/>
                <p>This page is not completed yet, <br/> you can still navigate in but you can be confronted with some bug that will be repaired soon !</p>
                <br/>
                <Button variant="contained" color="secondary"  onClick={handleModalAlertExperimentalClose}>Close</Button>
            </div>

        );
    }
}

ModalAlertExperimental.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalAlertExperimental);

