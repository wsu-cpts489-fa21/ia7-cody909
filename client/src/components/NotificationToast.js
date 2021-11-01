import { Toast, ToastContainer, Button } from "react-bootstrap";
import { useState } from "react";

/*************************************************************************
 * @function NotificationToast
 * @desc
 * Default exported function that returns renders html for the component.
 * @prop backgroundColor - the background color for the body of the toast.
 *       default value = gray
 * @prop textColor - the color for the text in the body of the toast.
 *       default value = white
 * @prop message - the text in the body of the toast.
 *       default value = "no message provided".
 *************************************************************************/
export default function NotificationToast(props) {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  return (
    <div>
      <ToastContainer position="top-start" style={{backgroundColor: "white", width: "24%", zIndex: "201"}}>
      <Toast data-testid="notification" position="middle-start" className="notification"show={show} onClose={toggleShow}>
        <Toast.Header className="notification">
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">New Notification</strong>
        </Toast.Header>
        <Toast.Body
          data-testid ="notificationBody"
          style={{
            backgroundColor: props.backgroundColor || "gray",
            color: props.textColor || "white",
          }}
        >
          {props.message || "no message provided"}
        </Toast.Body>
        </Toast>
        </ToastContainer>
    </div>
  );
}
