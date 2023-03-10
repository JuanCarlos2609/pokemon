import { createContext } from 'react';

export const initialState = {
  title: null,
  show: false,
  body: null,
  actionButtons: null,
  configProps: {
    maxWidth: false, 
    className: null,
    titleClassName: null,
    showDividers: false,
  }
};

export const ModalContext = createContext();
