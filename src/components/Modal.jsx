//47.30

import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <div>
      {isOpen && (
        <div className=" grid place-items-center absolute top-0 z-40 backdrop-blur h-screen w-screen">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose className="self-end text-2xl" onClick={onClose} />
            </div>
            {children}
          </div>
        </div>
      )}
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
