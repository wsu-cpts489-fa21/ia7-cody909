import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function PopUpModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    // on close execute the function associated with the last entry in the choices object
    if (props.choices) {
      const lastFunction =
        props.choices[
          Object.keys(props.choices)[Object.keys(props.choices).length - 1]
        ];
      try {
        lastFunction();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Modal data-testid="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title data-testid="modalTitle">{props.text || "no text provided"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.choices &&
            Object.entries(props.choices).map(([key, value]) => (
              <>
                <Button
                  className="mb-3"
                  data-testid={key}
                  onClick={() => {
                    try {
                      value();
                      setShow(false);
                    } catch (e) {
                      console.log(e);
                      setShow(false);
                    }
                  }}
                >
                  {key}
                </Button>
                <br />
              </>
            ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
