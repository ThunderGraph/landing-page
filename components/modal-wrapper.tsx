'use client'
import React, { useState, Suspense } from 'react';
const Modal = React.lazy(() => import('./waitlist-modal'));

export default function ClientModal({ children }: React.PropsWithChildren<{}>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer">
        {children}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {isOpen && <Modal isOpen={isOpen} onClose={handleClose} />}
      </Suspense>
    </>
  );
}

