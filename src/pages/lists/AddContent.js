import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import Input from '../../shared/components/Input'
import SpacingWrapper from '../../shared/components/UIElements/SpacingWrapper';

const AddContent = props => {
    return (
    <React.Fragment>
        <SpacingWrapper>
            <h1>AddContent</h1>
        </SpacingWrapper>
    </React.Fragment>
    );
};

export default AddContent;