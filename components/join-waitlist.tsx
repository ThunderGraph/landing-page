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
      <div className="w-full max-w-screen-xl bg-slate-800 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Form Column */}
          <div className="w-full md:w-2/3 p-8">
            <h2 className="text-2xl font-bold text-center text-purple-400 mb-4">Schedule your personalized 1:1 demo</h2>
            
            <div className="flex items-center mb-8 justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">1</div>
                <span className="ml-2 text-gray-300">Fill out the form</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">2</div>
                <span className="ml-2 text-gray-300">Book a time slot</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">3</div>
                <span className="ml-2 text-gray-300">Attend a demo</span>
              </div>
            </div>
            
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <p className="font-bold">Success!</p> 
                <p>Thanks for contacting us. We'll be in touch soon!</p>
              </div>
            )}
            
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <p>{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full">
                <div>
                  <label htmlFor="firstName" className="block text-purple-300 text-sm font-medium mb-2">First name*</label>
                  <input type="text" id="firstName" name="firstName" required 
                    className="shadow appearance-none border border-slate-700 rounded w-full py-2 px-3 bg-slate-900 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-purple-300 text-sm font-medium mb-2">Last name*</label>
                  <input type="text" id="lastName" name="lastName" required 
                    className="shadow appearance-none border border-slate-700 rounded w-full py-2 px-3 bg-slate-900 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-purple-300 text-sm font-medium mb-2">Work email*</label>
                  <input type="email" id="email" name="email" required 
                    className="shadow appearance-none border border-slate-700 rounded w-full py-2 px-3 bg-slate-900 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-purple-300 text-sm font-medium mb-2">Company name*</label>
                  <input type="text" id="organization" name="organization" required 
                    className="shadow appearance-none border border-slate-700 rounded w-full py-2 px-3 bg-slate-900 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="jobTitle" className="block text-purple-300 text-sm font-medium mb-2">Job Title*</label>
                  <input type="text" id="jobTitle" name="jobTitle" required 
                    className="shadow appearance-none border border-slate-700 rounded w-full py-2 px-3 bg-slate-900 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
              </div>
              
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : "Schedule your demo"}
                </button>
              </div>
              
              <div className="mt-6 text-center text-xs text-gray-400">
                By submitting this form, I agree that the Terms of Service and Privacy Notice will govern the use of services I receive and personal data I provide respectively.
              </div>
            </form>
          </div>
          
          {/* What to expect column */}
          <div className="w-full md:w-1/3 bg-purple-700 p-8">
            <h3 className="text-xl font-bold text-white mb-6">What to expect from your demo:</h3>
            
            <ul className="space-y-6">
              <li className="flex">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Live session tailored to your business needs</span>
              </li>
              
              <li className="flex">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Identifying pain points that are blocking efficiency</span>
              </li>
              
              <li className="flex">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Answers to all your questions about ThunderGraph</span>
              </li>
              
              <li className="flex">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">No commitment to purchase</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlistForm;

