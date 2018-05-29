import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
        height: "80vh",
        width: "80vw",
        left: "10vw",
        top: "10vh",
        borderShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

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

class ProjectModal extends React.Component {

    render() {
        const { classes, open, handleBtnProjectModalClose } = this.props;

        return (
            <div>
                {open === true &&
                <div
                    className={ classes.modal }
                    onClose={this.handleClose}
                >
                    <div className={classes.closeBtn} onClick={handleBtnProjectModalClose}>
                        <i className="fas fa-times fa-2x"/>
                    </div>

                    <div className={classes.thumb}>

                        PROJECT

                    </div>
                </div>
                }
            </div>
        );
    }
}

ProjectModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectModal);