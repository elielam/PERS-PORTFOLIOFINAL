import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MapContainer from "./MapContainer";

const styles = {
    modal: {
        position: "absolute",
        height: "100vh",
        width: "100vw",
        left: 0,
        top: 0,
        display: 'block !important',
    },
    thumb: {
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",

    },
    closeBtn: {
        color: 'black',
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

class MapModal extends React.Component {

    render() {
        const { classes, open, handleBtnMapModalClose } = this.props;

        return (
            <div>
                {open === true &&
                <div
                    className={ classes.modal }
                    onClose={handleBtnMapModalClose}
                >
                    <div className={classes.thumb}>

                        <MapContainer/>

                        <div className={classes.closeBtn} onClick={handleBtnMapModalClose}>
                            <i className="fas fa-times fa-2x"/>
                        </div>

                    </div>
                </div>
                }
            </div>
        );
    }
}

MapModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapModal);

