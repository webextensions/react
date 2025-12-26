import { useState, useEffect } from 'react';

import {
    UNINITIALIZED,
    LOADING,
    LOADED,
    ERROR
} from './readyStates.js';

const useAjax = function ({ ajaxCallAsync, refreshedAt, autoTrigger = false, debug = false }) {
    const [ajaxStatus, setAjaxStatus] = useState({
        readyState: UNINITIALIZED,
        data: null
    });

    const triggerAjaxAsync = async (...args) => {
        if (debug) {
            debugger; // eslint-disable-line no-debugger
        }

        setAjaxStatus({
            readyState: LOADING,
            data: null
        });
        const [err, dataFromAjaxCallAsync] = await ajaxCallAsync(...args);
        if (err) {
            console.log(err);
            setAjaxStatus({
                readyState: ERROR,
                data: dataFromAjaxCallAsync,
                errorData: err
            });
        } else {
            setAjaxStatus({
                readyState: LOADED,
                data: dataFromAjaxCallAsync
            });
        }
        return [err, dataFromAjaxCallAsync];
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
            triggerAjaxAsync(); // eslint-disable-line react-hooks/set-state-in-effect
        }
    }, [refreshedAt, autoTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

    return [
        ajaxStatus,
        {
            triggerAjaxAsync,
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
