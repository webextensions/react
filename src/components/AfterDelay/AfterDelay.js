import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AfterDelay = function ({ children, delay }) {
    const [showChildren, setShowChildren] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowChildren(true);
        }, delay || 0);
        return () => {
            clearTimeout(timeout);
        };
    }, [delay]);
    if (showChildren) {
        return (<Fragment>{children}</Fragment>);
    } else {
        return null;
    }
};
AfterDelay.propTypes = {
    children: PropTypes.node,
    delay: PropTypes.number
};

export { AfterDelay };
