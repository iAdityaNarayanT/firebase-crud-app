import { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(false);

  function onOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }
  return { onClose, onOpen, isOpen };
};

export default useDisclouse;
