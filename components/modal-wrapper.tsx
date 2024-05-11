'use client'
import React, { useState, Suspense } from 'react';
const Modal = React.lazy(() => import('./waitlist-modal'));

export default function ClientModal({ children }: React.PropsWithChildren<{}>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="bg-cyan-300 hover:bg-cyan-200 text-blue-950 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Join Waitlist</button>
      <Suspense fallback={<div>Loading...</div>}>
        {isOpen && <Modal isOpen={isOpen} onClose={handleClose} />}
      </Suspense>
    </>
  );
}

