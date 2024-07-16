import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};
