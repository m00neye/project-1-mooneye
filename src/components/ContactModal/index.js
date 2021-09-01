import React, { useState } from "react";
import { GlobalStyle } from "./globalStyles.js";
import Modal from "./Modal.js";
import { Container, Button } from "./modelelements.js";

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Container>
        <Button onClick={openModal}>
          Under Maintenance<h6>We will be live soon</h6>
        </Button>

        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
};

export default ContactModal;
