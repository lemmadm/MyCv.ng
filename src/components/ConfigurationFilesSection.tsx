import React from 'react';
import SectionWrapper from './SectionWrapper';
import CodeBlock from './CodeBlock';

const databaseConfig = `<?php
class Database {
    private $host = 'localhost';
    private $db_name = 'mycv_website';
    private $username = 'your_db_username';  // Change this
    private $password = 'your_db_password';  // Change this
    private $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password,
                array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
            );
        } catch(PDOException $exception) {
            error_log("Connection error: " . $exception->getMessage());
        }

        return $this->conn;
    }
}
?>`;

const appConfig = `<?php
// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Paystack configuration
define('PAYSTACK_SECRET_KEY', 'sk_live_your_secret_key_here'); // Change this
define('PAYSTACK_PUBLIC_KEY', 'pk_live_your_public_key_here'); // Change this

// File upload configuration
define('UPLOAD_DIR', '../uploads/cvs/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_EXTENSIONS', ['pdf', 'doc', 'docx']);

// Email configuration (for notifications)
define('SMTP_HOST', 'your_smtp_host');
define('SMTP_USERNAME', 'your_email@domain.com');
define('SMTP_PASSWORD', 'your_email_password');
define('FROM_EMAIL', 'noreply@mycv.i.ng');
define('ADMIN_EMAIL', 'admin@mycv.i.ng');

// Website configuration
define('BASE_URL', 'https://mycv.i.ng');
define('SUBDOMAIN_SUFFIX', '.mycv.i.ng');

// Error reporting (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Utility functions
function generateOrderReference() {
    return 'MCV-' . strtoupper(uniqid());
}

function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validateDomain($domain) {
    return preg_match('/^[a-zA-Z0-9\-]{3,30}$/', $domain);
}
?>`;

const ConfigurationFilesSection: React.FC = () => {
  return (
    <SectionWrapper title="⚙️ Configuration Files">
      <CodeBlock filePath="api/config/database.php" code={databaseConfig} />
      <CodeBlock filePath="api/config/config.php" code={appConfig} />
    </SectionWrapper>
  );
};

export default ConfigurationFilesSection;