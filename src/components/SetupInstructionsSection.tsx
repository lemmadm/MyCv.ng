import React from 'react';
import SectionWrapper from './SectionWrapper';

const SetupInstructionsSection: React.FC = () => {
  return (
    <SectionWrapper title="✅ Setup Instructions">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-green-900 mb-4">✅ Setup Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-green-800">
          <li>Create the folder structure on your server</li>
          <li>Update database credentials in <code>config/database.php</code></li>
          <li>Update Paystack keys in <code>config/config.php</code></li>
          <li>Run the SQL schema to create database tables</li>
          <li>Set proper file permissions (755 for folders, 644 for files)</li>
          <li>Make sure the uploads folder is writable (chmod 755)</li>
          <li>Test each endpoint with sample data</li>
          <li>Update the frontend API_BASE URL to point to your backend</li>
        </ol>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Replace all placeholder values (database credentials, Paystack keys, email settings) with your actual production values before going live!
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SetupInstructionsSection;