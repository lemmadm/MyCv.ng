import React from 'react';
import SectionWrapper from './SectionWrapper';
import CodeBlock from './CodeBlock';

const htaccessCode = `# Enable CORS
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, POST, OPTIONS"
Header always set Access-Control-Allow-Headers "Content-Type, Authorization"

# Handle preflight requests
RewriteEngine On
RewriteCond %{REQUEST_METHOD} OPTIONS
RewriteRule ^(.*)$ $1 [R=200,L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# Prevent access to sensitive files
<Files "*.sql">
    Order allow,deny
    Deny from all
</Files>

<Files "config.php">
    Order allow,deny
    Deny from all
</Files>

# Enable file uploads
php_value upload_max_filesize 5M
php_value post_max_size 5M
php_value max_execution_time 300`;

const HtaccessSection: React.FC = () => {
  return (
    <SectionWrapper title="🔒 Security & URL Rewriting">
      <CodeBlock filePath=".htaccess" code={htaccessCode} language="apache" />
    </SectionWrapper>
  );
};

export default HtaccessSection;