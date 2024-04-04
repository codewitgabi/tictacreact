import { MdOutlineCancel } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import React, { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

function CreateRoomModal({
  setShowPopup,
  createdRoom,
}: {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  createdRoom: string;
}) {
  const closePopupRef = useRef<HTMLSpanElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [_, setCopied] = useState<boolean>(false);

  const handleClosePopup = () => {
    if (closePopupRef.current && popupRef.current) {
      setShowPopup(false);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full min-h-full bg-transparent flex items-center justify-center"
        ref={popupRef}
      >
        <div className="bg-secondary-background min-w-[400px] min-h-[250px] rounded-lg p-4">
          <span
            ref={closePopupRef}
            onClick={handleClosePopup}
            className="cursor-pointer"
          >
            <MdOutlineCancel className="float-right text-xl" />
          </span>
          <div className="border border-orange-500 clear-both mt-[3em] p-4 flex items-center justify-between gap-4">
            <span>{createdRoom}</span>
            <CopyToClipboard
              text={createdRoom}
              onCopy={() => {
                setCopied(true);
                toast.success("Copied!");
              }}
            >
              <FaRegClipboard className="cursor-pointer" />
            </CopyToClipboard>
          </div>
        </div>
      </div>

      <ToastContainer autoClose={1000} />
    </>
  );
}

export default CreateRoomModal;
