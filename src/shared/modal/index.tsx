import React from 'react';
import FocusTrap from 'focus-trap-react';
import { Helmet } from 'react-helmet';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';
import { SquareButton } from '../square-button';

type ModalProps = {
  title?: string;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, title, onClose }) => {
  const ModalElement = (
    <>
      {title && (
        <Helmet>
          <title>{title}</title>
        </Helmet>
      )}
      <FocusTrap>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <div
          className={styles.Modal__Background}
          aria-modal="true"
          role="dialog"
          onKeyDown={(event) => event.key === 'Escape' && onClose()}
        >
          <div className={styles.Modal__Card}>
            <div>
              <label
                htmlFor="modalCloseButton"
                className={styles.visually_hidden}
              >
                Закрыть
              </label>
              <SquareButton
                type="button"
                onClick={onClose}
                id="modalCloseButton"
              >
                X
              </SquareButton>
            </div>
            {children}
          </div>
        </div>
      </FocusTrap>
    </>
  );

  const root = document.getElementById('modal-root');
  if (!root) {
    console.log('modal-root element not found');
    return null;
  }

  return createPortal(ModalElement, root);
};

Modal.defaultProps = {
  title: '',
};
