import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="font-sans mx-8 my-4 leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> [date]
      </p>
      <p className="mt-2">
        This Privacy Policy explains how <strong>Colibri Feed</strong> ("we",
        "our service") collects, uses, stores, and protects user data.
      </p>

      <h3 className="text-xl font-semibold mt-6">1. Who we are</h3>
      <p>
        Colibri Feed is developed by Shevel Private Entrepreneur, based in
        Ukraine.
      </p>

      <h3 className="text-xl font-semibold mt-6">2. Data we collect:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>Email address</strong> — for account creation, login, and
          notifications;
        </li>
        <li>
          <strong>User content</strong> — posts, images, comments;
        </li>
        <li>
          <strong>Cookies & technical data</strong> — via Firebase.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">3. How we use your data:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>To register and authenticate users;</li>
        <li>To provide content publishing features;</li>
        <li>For moderation and security;</li>
        <li>For analytics (via Firebase).</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">4. Third-party sharing:</h3>
      <p>
        We use <strong>Firebase (Google LLC)</strong> to host and manage user
        data.
      </p>
      <p>We do not sell personal data to third parties.</p>

      <h3 className="text-xl font-semibold mt-6">5. Data security</h3>
      <p>
        We implement technical and organizational safeguards to protect your
        data.
      </p>

      <h3 className="text-xl font-semibold mt-6">6. Your rights:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>Access, correction, or deletion;</li>
        <li>Withdraw consent;</li>
        <li>File a complaint with a regulator.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">7. Contact us:</h3>
      <p>
        <strong>Shevel PE</strong>
        <br />
       v.shevel@gmail.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
