import React, { useEffect, useRef } from 'react';

interface JoinWaitlistFormProps {
  closeModal: () => void;
}

const JoinWaitlistForm = ({ closeModal }: JoinWaitlistFormProps) => {
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

  const handleScheduleDemo = () => {
    window.open('https://calendly.com/d/cndz-m7k-t99/thundergraph-beta-testing', '_blank');
    closeModal();
  };

  return (
    <div ref={modalRef} className="flex justify-center items-center w-full h-full">
      <div className="w-full max-w-screen-xl bg-slate-800 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Main Content Column */}
          <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
            <div className="pt-10">
              <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">Schedule your personalized 1:1 demo</h2>
              
              <div className="flex items-center mb-10 justify-center space-x-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">1</div>
                  <span className="ml-2 text-gray-300">Click the button</span>
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
              
              <div className="flex justify-center mt-20 mb-16">
                <button 
                  onClick={handleScheduleDemo} 
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center"
                >
                  Schedule your demo
                </button>
              </div>
            </div>
            
            {/* <div className="mt-6 text-center text-xs text-gray-400">
              By scheduling a demo, you agree to ThunderGraph's Terms of Service and Privacy Notice.
            </div> */}
          </div>
          
          {/* What to expect column */}
          <div className="w-full md:w-1/3 bg-purple-700 p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-left">What to expect from your demo:</h3>
            
            <ul className="space-y-6 text-left">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Live session tailored to your business needs</span>
              </li>
              
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Identifying pain points that are blocking efficiency</span>
              </li>
              
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Answers to all your questions about ThunderGraph</span>
              </li>
              
              <li className="flex items-start">
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

