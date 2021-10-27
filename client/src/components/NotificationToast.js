import { Toast, ToastContainer, Button } from "react-bootstrap";
import { useState } from "react";

export default function NotificationToast(props) {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  // optional props
  const textColor = props.textColor || "white";
  const backgroundColor = props.backgroundColor || "gray";

  return (
    <div>
      <Toast show={show} onClose={toggleShow} textColor={textColor}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body
          style={{ backgroundColor: backgroundColor, color: textColor }}
        >
          Woohoo, you're reading this text in a Toast!
        </Toast.Body>
      </Toast>
    </div>
  );
}
