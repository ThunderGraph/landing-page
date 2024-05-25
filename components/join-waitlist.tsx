import React, { useEffect, useRef } from 'react';

interface JoinWaitlistFormProps {
  closeModal: () => void;
}

const JoinWaitlistForm = ({ closeModal }: JoinWaitlistFormProps) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      organization: target.organization.value,
      jobTitle: target.jobTitle.value,
    };

    const response = await fetch('/api/waitlist-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Contact submitted to HubSpot');
      
      closeModal(); // Close modal on successful submission
    } else {
      console.error('Failed to submit contact to HubSpot');
    }

    window.location.href = '/api/auth/signup';

  };

  // Ref for the form modal
  const modalRef = useRef(null);
  // Function to handle click outside of modal
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
      closeModal();
    }
  };

  // Effect to add and remove event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={modalRef} className="flex justify-center items-center w-full h-full">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-slate-800 rounded px-8 pt-10 pb-10 mb-4">
        <h2 className='text-xl font-bold text-center text-cyan-300 mb-6'>Contact Information</h2>
        <div className='px-4 py-2'>
          <label htmlFor="firstName" className="block text-cyan-300 text-sm font-bold mb-2 text-left">First Name</label>
          <input type="text" id="firstName" name="firstName" required className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-900 text-cyan-200 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='px-4 py-2'>
          <label htmlFor="lastName" className="block text-cyan-300 text-sm font-bold mb-2 text-left">Last Name</label>
          <input type="text" id="lastName" name="lastName" required className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-900 text-cyan-200 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='px-4 py-2'>
          <label htmlFor="work email" className="block text-cyan-300 text-sm font-bold mb-2 text-left"> Work Email</label>
          <input type="email" id="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-900 text-cyan-200 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='px-4 py-2'>
          <label htmlFor="organization" className="block text-cyan-300 text-sm font-bold mb-2 text-left">Organization</label>
          <input type="text" id="organization" name="organization" required className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-900 text-cyan-200 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='px-4 py-2'>
          <label htmlFor="jobTitle" className="block text-cyan-300 text-sm font-bold mb-2 text-left">Job Title</label>
          <input type="text" id="jobTitle" name="jobTitle" required className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-900 text-cyan-200 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='px-4 py-2'>
          <button type="submit" className="bg-cyan-300 hover:bg-cyan-200 text-blue-950 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default JoinWaitlistForm;

