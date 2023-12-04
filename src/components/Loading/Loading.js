import React from 'react';

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

export { Loading };
