import React, { useEffect, useRef, useState } from 'react';

interface JoinWaitlistFormProps {
  closeModal: () => void;
}

const JoinWaitlistForm = ({ closeModal }: JoinWaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const target = event.target as HTMLFormElement;
    const formData = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      organization: target.organization.value,
      jobTitle: target.jobTitle.value,
    };

    try {
      const response = await fetch('/api/waitlist-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Contact submitted to HubSpot');
        setIsSuccess(true);
        
        // Add a delay before redirecting to show the success message
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        console.error('Failed to submit contact to HubSpot');
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        
        {isSuccess && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            <p className="font-bold">Success!</p> 
            <p>Thanks for joining our waitlist. We'll be in touch soon!</p>
          </div>
        )}
        
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p>{error}</p>
          </div>
        )}
        
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
          <button 
            type="submit" 
            className="bg-cyan-300 hover:bg-cyan-200 text-blue-950 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinWaitlistForm;

