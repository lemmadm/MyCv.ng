import React from 'react';
import SectionWrapper from './SectionWrapper';

const FolderStructureSection: React.FC = () => {
  const folderStructure = `mycv-backend/
├── api/
│   ├── config/
│   │   ├── database.php
│   │   └── config.php
│   ├── check-domain.php
│   ├── upload-cv.php
│   ├── create-order.php
│   └── verify-payment.php
├── uploads/
│   └── cvs/
├── database/
│   └── schema.sql
└── .htaccess`;

  return (
    <SectionWrapper title="📁 Required Folder Structure">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">📁 Required Folder Structure</h2>
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre><code>{folderStructure}</code></pre>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FolderStructureSection;