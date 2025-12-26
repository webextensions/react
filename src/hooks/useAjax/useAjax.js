import { useState, useEffect } from 'react';

import {
    UNINITIALIZED,
    LOADING,
    LOADED,
    ERROR
} from './readyStates.js';

const useAjax = function ({ ajaxCall, refreshedAt, autoTrigger = false, debug = false }) {
    const [ajaxStatus, setAjaxStatus] = useState({
        readyState: UNINITIALIZED,
        data: null
    });

    const triggerAjax = async (...args) => {
        if (debug) {
            debugger; // eslint-disable-line no-debugger
        }

        setAjaxStatus({
            readyState: LOADING,
            data: null
        });
        const [err, dataFromAjaxCall] = await ajaxCall(...args);
        if (err) {
            console.log(err);
            setAjaxStatus({
                readyState: ERROR,
                data: dataFromAjaxCall,
                errorData: err
            });
        } else {
            setAjaxStatus({
                readyState: LOADED,
                data: dataFromAjaxCall
            });
        }
        return [err, dataFromAjaxCall];
    };

    const resetStatus = () => {
        setAjaxStatus({
            readyState: UNINITIALIZED,
            data: null
        });
    };

    useEffect(() => {
        if (debug) {
            debugger; // eslint-disable-line no-debugger
        }

        if (autoTrigger) {
            triggerAjax(); // eslint-disable-line react-hooks/set-state-in-effect
        }
    }, [refreshedAt, autoTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

    return [
        ajaxStatus,
        {
            triggerAjax,
            resetStatus
        }
    ];
};

export { useAjax };

export {
    READYSTATE,
    STATUSCODE,
    UNINITIALIZED,
    LOADING,
    LOADED,
    ERROR
} from './readyStates.js';
