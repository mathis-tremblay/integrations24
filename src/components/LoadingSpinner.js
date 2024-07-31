import React from 'react';
import {Backdrop, CircularProgress} from '@mui/material';

const LoadingSpinner = ({loading}) => {
    return (
        <React.Fragment>
            <Backdrop
                sx={{color: '#fff', zIndex:999999}}
                open={loading}
            >
                <CircularProgress color="inherit" size={200} />
            </Backdrop>
        </React.Fragment>
    );
};

export default LoadingSpinner;