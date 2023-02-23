import React, { useEffect } from 'react';
import { AlertFunctionProps, AlertProps } from './types';

const Alert = (props: AlertProps & AlertFunctionProps) => {
    const { type, msg, removeAlert } = props;

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert(false, 'success', '');
        }, 3000);
        return () => clearTimeout(timeout);
    }, [removeAlert]);

    return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
