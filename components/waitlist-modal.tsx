'use client'
import React from 'react';
import JoinWaitlistForm from './join-waitlist';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-slate-800 p-5 rounded-lg md:w-1/2 w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-lg font-bold">X</button>
        <JoinWaitlistForm closeModal={onClose} />
      </div>
    </div>
  );
};

export default Modal;

