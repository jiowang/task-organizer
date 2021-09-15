import React, { useState } from "react";
import Modal from '../shared/components/UIElements/Modal';

import SpacingWrapper from "../shared/components/UIElements/SpacingWrapper";

const Test = props => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return (
    <SpacingWrapper>
        <Modal
            show={showModal}
            onCancel={closeModal}
            title="The title"
        >
            blah blah blah.....
        </ Modal>
        <button type="button" class="btn btn-primary" onClick={openModal}>
            Launch demo modal
        </button>
    </SpacingWrapper>
    );
};

export default Test;