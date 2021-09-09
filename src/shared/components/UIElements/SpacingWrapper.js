import React from 'react';

const SpacingWrapper = props => {
    return (
    <React.Fragment>
        <section className="page-section">
            <div className="container masthead">
                {props.children}
            </div>
        </section>
    </React.Fragment>
    );
};

export default SpacingWrapper;