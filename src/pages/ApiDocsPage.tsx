import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FolderStructureSection from '../components/FolderStructureSection';
import DatabaseSchemaSection from '../components/DatabaseSchemaSection';
import ConfigurationFilesSection from '../components/ConfigurationFilesSection';
import ApiEndpointsSection from '../components/ApiEndpointsSection';
import HtaccessSection from '../components/HtaccessSection';
import SetupInstructionsSection from '../components/SetupInstructionsSection';

const ApiDocsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">🚀 MyCV.i.ng Backend Setup</h1>

          <FolderStructureSection />
          <DatabaseSchemaSection />
          <ConfigurationFilesSection />
          <ApiEndpointsSection />
          <HtaccessSection />
          <SetupInstructionsSection />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApiDocsPage;