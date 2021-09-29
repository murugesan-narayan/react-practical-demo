import React, { useState, useRef } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ReactIdleTimerDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeOutRef = useRef(null);
  const loginMe = () => {
    setIsLoggedIn(true);
    //console.log(idleTimerRef);
    idleTimerRef.current.start();
  };
  const onIdle = () => {
    console.log("Idle Session Timeout. It is going to end automatically.");
    setIsModalOpen(true);
    sessionTimeOutRef.current = setTimeout(logoutMe, 5000);
  };
  const logoutMe = () => {
    setIsModalOpen(false);
    setIsLoggedIn(false);
    idleTimerRef.current.pause();
    clearTimeout(sessionTimeOutRef.current);
  };
  const stayLogin = () => {
    setIsModalOpen(false);
    clearTimeout(sessionTimeOutRef.current);
    idleTimerRef.current.reset();
  };

  return (
    <div>
      <h2>Welcome {isLoggedIn ? "Venkatesh" : "Guest"}!</h2>
      {!isLoggedIn ? <button onClick={loginMe}>Login</button> : ""}
      <Modal isOpen={isModalOpen}>
        <h3>You are Idle for a while!</h3>
        <p>It will logout automatically soon. Do you want to stay logged-in?</p>
        <div>
          <button onClick={logoutMe}>No</button>
          <button onClick={stayLogin}>Yes</button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
        startManually={true}
      ></IdleTimer>
    </div>
  );
}

export default ReactIdleTimerDemo;
