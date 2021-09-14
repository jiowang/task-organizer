import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import SpacingWrapper from '../../shared/components/UIElements/SpacingWrapper';

const AddList = props => {
    const userId = useParams().userId;

    return (
    <React.Fragment>
        <SpacingWrapper>
            <h1>AddList</h1>
        </SpacingWrapper>
    </React.Fragment>
    );
};

export default AddList;