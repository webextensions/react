import React from 'react';
import { useSetState } from 'react-use';

import ReactScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const ClickToShow = function (props) {
    const [state, setStateClassic] = useSetState({
        show: props.showByDefault || false
    });

    const reveal = () => {
        setStateClassic({
            show: true
        });

        if (typeof props.onToggle === 'function') {
            props.onToggle({ show: true });
        }
        if (typeof props.onShow === 'function') {
            props.onShow();
        }
    };

    const hide = () => {
        setStateClassic({
            show: false
        });

        if (typeof props.onToggle === 'function') {
            props.onToggle({ show: false });
        }
        if (typeof props.onHide === 'function') {
            props.onHide();
        }
    };

    if (state.show) {
        let clickToHide = null;
        if (props.showOnly) {
            // do nothing
        } else {
            const defaultHideText = 'Hide';
            const hideTextToShow = props.clickToHideText || defaultHideText;

            if (props.type === 'custom') {
                clickToHide = (
                    <div className="ClickToHide" onClick={hide} style={{ display: 'inline-block', cursor: 'pointer' }}>
                        <div style={props.clickToShowHideTextStyle}>
                            {props.CustomHideComponent}
                        </div>
                    </div>
                );
            } else if (props.type === 'button') {
                clickToHide = (
                    <button className="ClickToHide" onClick={hide} style={{ cursor: 'pointer' }}>
                        <span style={props.clickToShowHideTextStyle}>
                            {hideTextToShow}
                        </span>
                    </button>
                );
            } else {
                clickToHide = (
                    <span className="ClickToHide" onClick={hide} style={{ cursor: 'pointer' }}>
                        <span style={props.clickToShowHideTextStyle}>
                            {hideTextToShow}
                        </span>
                    </span>
                );
            }
        }

        let fragment;
        if (props.contentLocation === 'before') {
            fragment = (
                <React.Fragment>
                    {props.children}
                    {clickToHide}
                </React.Fragment>
            );
        } else {
            fragment = (
                <React.Fragment>
                    {clickToHide}
                    {props.children}
                </React.Fragment>
            );
        }
        if (props.scrollIntoView) {
            return (
                <ReactScrollIntoViewIfNeeded
                    options={{
                        behavior: 'smooth',
                        scrollMode: 'if-needed',
                        block: 'nearest'
                    }}
                >
                    {fragment}
                </ReactScrollIntoViewIfNeeded>
            );
        } else {
            return fragment;
        }
    } else {
        const defaultClickToShowText = 'Show';
        const clickToShowText = props.clickToShowText || defaultClickToShowText;

        if (props.type === 'custom') {
            return (
                <div className="ClickToShow" onClick={reveal} style={{ display: 'inline-block', cursor: 'pointer' }}>
                    {props.CustomShowComponent}
                </div>
            );
        } else if (props.type === 'button') {
            return (
                <button className="ClickToShow" onClick={reveal} style={{ cursor: 'pointer' }}>
                    <span style={props.clickToShowHideTextStyle}>
                        {clickToShowText}
                    </span>
                </button>
            );
        } else {
            return (
                <span className="ClickToShow" onClick={reveal} style={{ cursor: 'pointer' }}>
                    <span style={props.clickToShowHideTextStyle}>
                        {clickToShowText}
                    </span>
                </span>
            );
        }
    }
};
// ClickToShow.propTypes = {
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.node),
//         PropTypes.node
//     ]).isRequired,
//     type: PropTypes.string,
//     CustomShowComponent: PropTypes.element,
//     CustomHideComponent: PropTypes.element,
//     showOnly: PropTypes.bool,
//     showByDefault: PropTypes.bool,
//     clickToShowText: PropTypes.string,
//     clickToHideText: PropTypes.string,
//     clickToShowHideTextStyle: PropTypes.object,
//     contentLocation: PropTypes.string,
//     onShow: PropTypes.func,
//     onHide: PropTypes.func,
//     onToggle: PropTypes.func,
//     scrollIntoView: PropTypes.bool
// };

export { ClickToShow };
