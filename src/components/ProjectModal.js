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
        alignItems: 'center',
        flexDirection: 'column'

    },
    closeBtn: {
        color: 'white',
        position: "absolute",
        top: "2vh",
        right: "2vw",
        height: "5vh",
        width: "2.5vw",
    },
    imageThumbnail: {
        height: "60%",
        width: "100%",
        backgroundColor: "red"
    },
    projectDesc: {
        height: "30%",
        width: "100%",
        backgroundColor: "orange"
    },
    projectToolbar: {
        height: "10%",
        width: "100%",
    },
    thumbnailIndicator: {
        position: "absolute",
        height: "2vh",
        width: "20vw",
        left: "30vw",
        top: "3vh",
        backgroundColor: 'yellow'
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
                    onClose={handleBtnProjectModalClose}
                >
                    <div className={classes.closeBtn} onClick={handleBtnProjectModalClose}>
                        <i className="fas fa-times fa-2x"/>
                    </div>

                    <div className={classes.thumb}>

                        <div className={classes.thumbnailIndicator}></div>

                        <div className={classes.imageThumbnail}>

                        </div>
                        <div className={classes.projectDesc}>

                        </div>
                        <div className={classes.projectToolbar}>

                        </div>

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