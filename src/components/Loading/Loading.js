import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Loading.css';

const Loading = function ({ type, style, theme }) {
    if (type === 'line-scale') {
        return (
            <div style={style}>
                <div
                    className={(function () {
                        let className = 'la-line-scale la-sm';
                        if (theme === 'light') {
                            // do nothing
                        } else {
                            className += ' la-dark';
                        }
                        return className;
                    })()}
                >
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                ...
            </div>
        );
    }
};

Loading.propTypes = {
    type: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.string
};

const LoadingTriggeredAfterDelay = function ({ type, style, theme, delay }) {
    const [showLoading, setShowLoading] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoading(true);
        }, delay);
        return () => {
            clearTimeout(timeout);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    if (showLoading) {
        return (
            <Loading type={type} style={style} theme={theme} />
        );
    } else {
        return null;
    }
};
LoadingTriggeredAfterDelay.propTypes = {
    type: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.string,
    delay: PropTypes.number
};

export {
    Loading,
    LoadingTriggeredAfterDelay
};
