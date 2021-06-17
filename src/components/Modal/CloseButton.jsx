import { ReactComponent as CloseModalIcon } from '../Todo/images/delete.svg';
import './Modal.scss';

const CloseButton = ({ onClose }) => {
  return (
    <button className="modal__closeButton" type="button" onClick={onClose}>
      <CloseModalIcon />
    </button>
  );
};

export default CloseButton;
