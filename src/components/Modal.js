import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-8/12 mx-auto modal">
      <form method="dialog" className="mt-4 text-right close-button">
        <Button>
            <img src="./icons/close.svg" alt="" />
        </Button>
      </form>
      {children}
    </dialog>,
    document.getElementById('modal-root') || document.body
  );
});

export default Modal;
