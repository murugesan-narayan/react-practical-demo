import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

function ReactModalDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const resetModalOpen = () => setModalOpen((currVal) => !currVal);
  return (
    <div>
      <button onClick={resetModalOpen}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={resetModalOpen}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: { backgroundColor: "lightgray" },
          content: { color: "blueviolet" },
        }}
      >
        <h2>My Modal Test</h2>
        <p> Here we describe about my modal informationgoes...</p>
        <div>
          <button onClick={resetModalOpen}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default ReactModalDemo;
