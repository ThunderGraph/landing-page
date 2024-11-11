export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Automate your workflow. Let your models explain themselves.</h2>
            <p className="text-xl text-gray-400">Our expert AI can generate SysML v2 at your whim with complete traceability. It records its logic as it works for full explainability, streamlining communication.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item (Automate SysML Model Building) */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-cyan-300" width="64" height="64" rx="32" />
                <g transform="translate(14 14)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" fillRule="evenodd">
                  <rect className="stroke-current text-blue-950" x="15" y="0" width="6" height="6" />
                  <rect className="stroke-current text-blue-950" x="5" y="15" width="6" height="6" />
                  <rect className="stroke-current text-blue-950" x="25" y="15" width="6" height="6" />
                  <rect className="stroke-current text-blue-950" x="0" y="30" width="6" height="6" />
                  <rect className="stroke-current text-blue-950" x="10" y="30" width="6" height="6" />
                  <rect className="stroke-current text-blue-950" x="20" y="30" width="6" height="6" />
                  <rect className="stroke-current text-blue-950" x="30" y="30" width="6" height="6" />
                  <path className="stroke-current text-blue-950" d="M18 6L8 15M18 6L28 15M8 21L3 30M8 21L13 30M28 21L23 30M28 21L33 30" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Automate SysML Model Building</h4>
              <p className="text-lg text-gray-400 text-center">Quickly generate diagrams using an AI copilot.</p>
            </div>

            {/* 2nd item (now Let AI Easily Explain the System Model) */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-cyan-300" width="64" height="64" rx="32" />
                <g transform="translate(12 12)" fill="none" fillRule="evenodd" strokeWidth="2" className="stroke-current text-blue-950">
                  {/* Robot body */}
                  <rect x="8" y="16" width="24" height="24" rx="2" />
                  {/* Robot head */}
                  <rect x="12" y="4" width="16" height="12" rx="2" />
                  {/* Robot eyes */}
                  <circle cx="17" cy="10" r="1.5" fill="currentColor" />
                  <circle cx="23" cy="10" r="1.5" fill="currentColor" />
                  {/* Robot arms */}
                  <path d="M8 28h-4" />
                  <path d="M32 28h4" />
                  {/* Robot hands */}
                  <path d="M2 28c0-1.1.9-2 2-2" />
                  <path d="M38 28c0-1.1-.9-2-2-2" />
                  {/* Chat bubble */}
                  <path d="M34 0h8c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-2l-2 2-2-2h-2c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2z" />
                  {/* Chat bubble dots */}
                  <circle cx="37" cy="5" r="1" fill="currentColor" />
                  <circle cx="40" cy="5" r="1" fill="currentColor" />
                  <circle cx="43" cy="5" r="1" fill="currentColor" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Let AI Easily Explain the System Model</h4>
              <p className="text-lg text-gray-400 text-center">The AI copilot can explain the system model to your stakeholders in simple human language.</p>
            </div>

            {/* 3rd item (now Effortless Traceability) */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-cyan-300" cx="32" cy="32" r="32" />
                <path className="stroke-current text-blue-950" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-blue-950" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                {/* Magnifying glass */}
                <circle cx="42" cy="38" r="6" fill="none" className="stroke-current text-blue-950" strokeWidth="2" />
                <path d="M46 42l4 4" className="stroke-current text-blue-950" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h4 className="h4 mb-2">Effortless Traceability</h4>
              <p className="text-lg text-gray-400 text-center">The AI automatically stores links to the documents it uses to make decisions. It provides these citations so you can track its logic.</p>
            </div>

            {/* 4th item (Upload Documents Securely) */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-cyan-300" width="64" height="64" rx="32" />
                <g transform="translate(16 16)" fill="none" fillRule="evenodd">
                  <rect className="stroke-current text-blue-950" strokeWidth="2" x="4" y="12" width="24" height="20" rx="2" />
                  <path className="stroke-current text-blue-950" strokeWidth="2" d="M11 12V7a5 5 0 0110 0v5" />
                  <circle className="stroke-current text-blue-950" strokeWidth="2" cx="16" cy="22" r="2" />
                  <path className="stroke-current text-blue-950" strokeWidth="2" d="M16 24v4" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Upload Documents Securely</h4>
              <p className="text-lg text-gray-400 text-center">Upload documents with the comfort of knowing access controls restrict your data to only you and your team.</p>
            </div>

            {/* 5th item (now AI Generated Documentation) */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-cyan-300" width="64" height="64" rx="32" />
                <g transform="translate(20 20)" fill="none" fillRule="evenodd" strokeWidth="2" className="stroke-current text-blue-950">
                  <rect x="0" y="4" width="24" height="28" rx="2" />
                  <path d="M8 4V2a2 2 0 012-2h4a2 2 0 012 2v2" />
                  <path d="M4 12h16M4 18h16M4 24h10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">AI Generated Documentation</h4>
              <p className="text-lg text-gray-400 text-center">Provide your own template and the AI will create document artifacts with references for ultimate traceability.</p>
            </div>

            {/* 6th item (Manage Different Projects on One Platform) */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-cyan-300" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-blue-950" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-blue-950" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Manage Different Projects on One Platform</h4>
              <p className="text-lg text-gray-400 text-center">ThunderGraph's interface lets users create, edit, and switch between projects without compromising data security.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}