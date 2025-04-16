import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ data, onClose }) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose} className={css.modal} overlayClassName={css.overlay}>
      <img src={data.urls.regular} alt={data.alt_description} />
    </Modal>
  );
};

export default ImageModal;