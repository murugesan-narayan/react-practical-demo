import React from "react";
import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

//configuration for tostify css and notification
toast.configure();
injectStyle();

const customToast = ({ closeToast }) => {
  return (
    <div>
      Error has occurred!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

function ReactToastifyDemo() {
  const notify = () => {
    toast.success("Success Notification", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 2000,
    });
    toast("Basic Notification"); //default top right position, autoClose 5000
    toast.warn("Warn Notification", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 6000,
    });
    toast.error(customToast, {
      //calling custom toast
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
    });
    toast.info("Info Notification", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
    });
    toast.warning("Warning Notification", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 6000,
    });
  };
  return (
    <div className="App">
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default ReactToastifyDemo;
