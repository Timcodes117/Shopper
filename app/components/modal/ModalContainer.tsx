"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalProps = {
  title: string;
  description: string;
  onClose?: VoidFunction;
};

type ModalContextProps = {
  showModal: (props: ModalProps) => void;
  hideModal: () => void;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const showModal = (props: ModalProps) => {
    setModalProps(props);
  };

  const hideModal = () => {
    setModalProps(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modalProps && (
        <WarnModal
          title={modalProps.title}
          description={modalProps.description}
          onClose={hideModal}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

const WarnModal = ({ title, description, onClose }: ModalProps) => {
  return (
    <div className='w-full flex flex-1 bg-[#0000005e] fixed top-0 left-0'>
      <div className='m-auto bg-white p-4 rounded shadow'>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
