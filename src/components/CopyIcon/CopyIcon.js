import React from 'react';

// Note:
//     Using it in the following way will cause some other complications (like package would contain many other dependencies)
//         import ContentCopyIcon from '@mui/icons-material/ContentCopy.js';
//     So, rather importing it from '@mui/icons-material'
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';

const copy = async function (simpleText) {
    try {
        await navigator.clipboard.writeText(simpleText);
        return true;
    } catch (e) { // eslint-disable-line no-unused-vars
        return false;
    }
};

const CopyIcon = function ({ data }) {
    return (
        <ContentCopyIcon
            style={{ cursor: 'pointer' }}
            onClick={() => {
                copy(data);
            }}
            fontSize="inherit"
        />
    );
};
// CopyIcon.propTypes = {
//     data: PropTypes.string.isRequired
// };

export { CopyIcon };
