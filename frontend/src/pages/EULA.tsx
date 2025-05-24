import React from 'react';

const EULA: React.FC = () => {
  return (
    <div className="font-sans mx-8 my-4 leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">End User License Agreement (EULA)</h1>
      <p><strong>Last updated:</strong> 24.05.2025</p>
      <p className="mt-2">
        By using <strong>Colibri Feed</strong>, you agree to the terms of this agreement.
      </p>

      <h3 className="text-xl font-semibold mt-6">1. License</h3>
      <p>We grant you a non-exclusive, free license to use Colibri Feed for personal purposes.</p>

      <h3 className="text-xl font-semibold mt-6">2. User Content</h3>
      <p>You are fully responsible for the content you post. Posting illegal or harmful content is prohibited.</p>

      <h3 className="text-xl font-semibold mt-6">3. Ownership</h3>
      <p>
        All rights to the service, code, and design belong to Shevel PE. You may not copy, modify,
        or redistribute the app.
      </p>

      <h3 className="text-xl font-semibold mt-6">4. Disclaimer</h3>
      <p>
        The service is provided "as is". We do not guarantee uninterrupted operation or error-free experience.
      </p>
    </div>
  );
};

export default EULA;
