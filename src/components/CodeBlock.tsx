import React from 'react';

interface CodeBlockProps {
  filePath: string;
  code: string;
  language?: string; // Optional: for future syntax highlighting
}

const CodeBlock: React.FC<CodeBlockProps> = ({ filePath, code, language = 'php' }) => {
  return (
    <div className="mb-6">
      <div className="border-l-4 border-blue-600 bg-blue-50 p-4 mb-4 rounded-r-lg">
        <h3 className="font-semibold text-gray-900 mb-2">File: {filePath}</h3>
      </div>
      <div className="bg-gray-800 text-gray-50 rounded-lg p-4 overflow-x-auto font-mono text-sm">
        <pre><code className={`language-${language}`}>{code}</code></pre>
      </div>
    </div>
  );
};

export default CodeBlock;