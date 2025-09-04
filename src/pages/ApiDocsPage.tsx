import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ApiDocsPage: React.FC = () => {
  useEffect(() => {
    // This page is primarily static content, no specific JS interactions needed from original HTML
    // However, if there were any scroll indicators or dynamic elements, they would be handled here.
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">🚀 MyCV.i.ng Backend Setup</h1>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">📁 Required Folder Structure</h2>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              mycv-backend/
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
              └── .htaccess
            </div>
          </div>

          {/* Database Schema */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🗄️ Database Schema</h2>
            <p className="text-gray-600 mb-4">Create this MySQL database structure:</p>

            <div className="border-l-4 border-blue-600 bg-blue-50 p-4 mb-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">File: database/schema.sql</h3>
            </div>

            <div className="bg-gray-800 text-gray-50 rounded-lg p-4 overflow-x-auto font-mono text-sm">
              <pre><code>
CREATE DATABASE mycv_website;
USE mycv_website;

-- Orders table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_reference VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    desired_domain VARCHAR(50) NOT NULL,
    package_type ENUM('with-cv', 'without-cv') NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    payment_reference VARCHAR(100) NULL,

    -- CV file info (for with-cv package)
    cv_filename VARCHAR(255) NULL,
    cv_file_path VARCHAR(500) NULL,

    -- CV information (for without-cv package)
    profession VARCHAR(100) NULL,
    location VARCHAR(100) NULL,
    professional_summary TEXT NULL,
    experience VARCHAR(20) NULL,
    work_history TEXT NULL,
    education VARCHAR(255) NULL,
    additional_education TEXT NULL,
    technical_skills TEXT NULL,
    soft_skills TEXT NULL,
    languages VARCHAR(255) NULL,
    interests VARCHAR(255) NULL,
    achievements TEXT NULL,
    references TEXT NULL,

    special_instructions TEXT NULL,
    website_status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
    website_url VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Domains table (to track used domains)
CREATE TABLE domains (
    id INT AUTO_INCREMENT PRIMARY KEY,
    domain_name VARCHAR(50) UNIQUE NOT NULL,
    order_id INT NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

-- Create indexes for better performance
CREATE INDEX idx_orders_reference ON orders(order_reference);
CREATE INDEX idx_orders_email ON orders(email);
CREATE INDEX idx_orders_domain ON orders(desired_domain);
CREATE INDEX idx_domains_name ON domains(domain_name);
              </code></pre>
            </div>
          </div>

          {/* Configuration Files */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚙️ Configuration Files</h2>

            <div className="border-l-4 border-blue-600 bg-blue-50 p-4 mb-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">File: api/config/database.php</h3>
            </div>

            <div className="bg-gray-800 text-gray-50 rounded-lg p-4 overflow-x-auto font-mono text-sm">
              <pre><code>
&lt;?php
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
?&gt;
              </code></pre>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 p-4 mb-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">File: api/config/config.php</h3>
            </div>

            <div className="bg-gray-800 text-gray-50 rounded-lg p-4 overflow-x-auto font-mono text-sm">
              <pre><code>
&lt;?php
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
?&gt;
              </code></pre>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔗 API Endpoints</h2>

            <div className="border-l-4 border-blue-600 bg-blue-50 p-4 mb-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">File: api/check-domain.php</h3>
              <p className="text-sm text-gray-600">POST /api/check-domain.php - Check if domain is available</p>
            </div>

            <div className="bg-gray-800 text-gray-50 rounded-lg p-4 overflow-x-auto font-mono text-sm">
              <pre><code>
&lt;?php
require_once 'config/config.php';
require_once 'config/database.php';

try {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['domain']) || empty($input['domain'])) {
        throw new Exception('Domain is required');
    }

    $domain = sanitizeInput($input['domain']);

    // Validate domain format
    if (!validateDomain($domain)) {
        throw new Exception('Invalid domain format. Use only letters, numbers, and hyphens (3-30 characters)');
    }

    // Check if domain exists in database
    $database = new Database();
    $db = $database->getConnection();

    $query = "SELECT COUNT(*) as count FROM domains WHERE domain_name = :domain AND status = 'active'";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':domain', $domain);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result['count'] > 0) {
        echo json_encode([
            'success' => true,
            'available' => false,
            'message' => $domain . '.mycv.i.ng is already taken. Please try another name.'
        ]);
    } else {
        echo json_encode([
            'success' => true,
            'available' => true,
            'message' => $domain . '.mycv.i.ng is available!'
        ]);
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?&gt;
              </code></pre>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 p-4 mb-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">File: api/upload-cv.php</h3>
              <p className="text-sm text-gray-600">POST /api/upload-cv.php - Upload CV file</p>
            </div>

            <div className="bg-gray-800 text-gray-50 rounded-lg p-4 overflow-x-auto font-mono text-sm">
              <pre><code>
&lt;?php
require_once 'config/config.php';

try {
    if (!isset($_FILES['cv_file']) || $_FILES['cv_file']['error'] !== UPLOAD_ERR_OK) {
        throw new Exception('No file uploaded or upload error occurred');
    }

    $file = $_FILES['cv_file'];

    // Validate file size
    if ($file['size'] > MAX_FILE_SIZE) {
        throw new Exception('File size exceeds 5MB limit');
    }

    // Validate file extension
    $fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($fileExtension, ALLOWED_EXTENSIONS)) {
        throw new Exception('Invalid file type. Only PDF, DOC, and DOCX files are allowed');
    }

    // Create upload directory if it doesn't exist
    if (!file_exists(UPLOAD_DIR)) {
        mkdir(UPLOAD_DIR, 0755, true);
    }

    // Generate unique filename
    $uniqueFilename = uniqid() . '_' . time() . '.' . $fileExtension;
    $uploadPath = UPLOAD_DIR . $uniqueFilename;

    // Move uploaded file
    if (!move_uploaded_file($file['tmp_name'], $uploadPath)) {
        throw new Exception('Failed to save uploaded file');
    }

    echo json_encode([
        'success' => true,
        'filename' => $uniqueFilename,
        'original_name' => $file['name'],
        'url' => BASE_URL . '/mycv-backend/uploads/cvs/' . $uniqueFilename,
        'size' => $file['size']
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?&gt;
              </code></pre>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 p-4 mb-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">File: api/create-order.php</h3>
              <p className="text-sm text-gray-600">POST /api/create-order.php - Create new order</p>
            </div>

            <div className="bg-gray-800 text-gray-50 rounded-lg p-4 overflow-x-auto font-mono text-sm">
              <pre><code>
&lt;?php
require_once 'config/config.php';
require_once 'config/database.php';

try {
    $input = json_decode(file_get_contents('php://input'), true);

    // Validate required fields
    $requiredFields = ['fullName', 'email', 'phone', 'desiredDomain', 'packageType', 'amount'];
    foreach ($requiredFields as $field) {
        if (!isset($input[$field]) || empty($input[$field])) {
            throw new Exception("Field '$field' is required");
        }
    }

    // Sanitize inputs
    $fullName = sanitizeInput($input['fullName']);
    $email = sanitizeInput($input['email']);
    $phone = sanitizeInput($input['phone']);
    $desiredDomain = sanitizeInput($input['desiredDomain']);
    $packageType = sanitizeInput($input['packageType']);
    $amount = floatval($input['amount']);

    // Validate email
    if (!validateEmail($email)) {
        throw new Exception('Invalid email address');
    }

    // Validate domain
    if (!validateDomain($desiredDomain)) {
        throw new Exception('Invalid domain format');
    }

    // Validate package type
    if (!in_array($packageType, ['with-cv', 'without-cv'])) {
        throw new Exception('Invalid package type');
    }

    // Validate amount
    if (($packageType === 'with-cv' && $amount != 2500) ||
        ($packageType === 'without-cv' && $amount != 5000)) {
        throw new Exception('Invalid amount for selected package');
    }

    $database = new Database();
    $db = $database->getConnection();

    // Check if domain is still available
    $query = "SELECT COUNT(*) as count FROM domains WHERE domain_name = :domain AND status = 'active'";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':domain', $desiredDomain);
    $stmt->execute();

    if ($stmt->fetch(PDO::FETCH_ASSOC)['count'] > 0) {
        throw new Exception('Domain is no longer available');
    }

    // Generate order reference
    $orderReference = generateOrderReference();

    // Prepare order data
    $orderData = [
        'order_reference' => $orderReference,
        'full_name' => $fullName,
        'email' => $email,
        'phone' => $phone,
        'desired_domain' => $desiredDomain,
        'package_type' => $packageType,
        'amount' => $amount,
        'special_instructions' => isset($input['instructions']) ? sanitizeInput($input['instructions']) : null
    ];

    // Add package-specific data
    if ($packageType === 'with-cv') {
        $orderData['cv_filename'] = isset($input['cvFilename']) ? sanitizeInput($input['cvFilename']) : null;
        $orderData['cv_file_path'] = isset($input['cvFilePath']) ? sanitizeInput($input['cvFilePath']) : null;
    } else {
        $orderData['profession'] = sanitizeInput($input['profession']);
        $orderData['location'] = sanitizeInput($input['location']);
        $orderData['professional_summary'] = sanitizeInput($input['professionalSummary']);
        $orderData['experience'] = sanitizeInput($input['experience']);
        $orderData['work_history'] = sanitizeInput($input['workHistory']);
        $orderData['education'] = sanitizeInput($input['education']);
        $orderData['additional_education'] = isset($input['additionalEducation']) ? sanitizeInput($input['additionalEducation']) : null;
        $orderData['technical_skills'] = sanitizeInput($input['technicalSkills']);
        $orderData['soft_skills'] = sanitizeInput($input['softSkills']);
        $orderData['languages'] = isset($input['languages']) ? sanitizeInput($input['languages']) : null;
        $orderData['interests'] = isset($input['interests']) ? sanitizeInput($input['interests']) : null;
        $orderData['achievements'] = isset($input['achievements']) ? sanitizeInput($input['achievements']) : null;
        $orderData['references'] = isset($input['references']) ? sanitizeInput($input['references']) : null;
    }

    // Insert order
    $fields = array_keys($orderData);
    $placeholders = ':' . implode(', :', $fields);

    $query = "INSERT INTO orders (" . implode(', ', $fields) . ") VALUES (" . $placeholders . ")";
    $stmt = $db->prepare($query);

    foreach ($orderData as $key => $value) {
        $stmt->bindValue(':' . $key, $value);
    }

    if (!$stmt->execute()) {
        throw new Exception('Failed to create order');
    }

    $orderId = $db->lastInsertId();

    echo json_encode([
        'success' => true,
        'order_id' => $orderId,
        'order_reference' => $orderReference,
        'message' => 'Order created successfully'
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?&gt;
              </code></pre>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 p-4 mb-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">File: api/verify-payment.php</h3>
              <p className="text-sm text-gray-600">POST /api/verify-payment.php - Verify Paystack payment</p>
            </div>

            <div className="bg-gray-800 text-gray-50 rounded-lg p-4 overflow-x-auto font-mono text-sm">
              <pre><code>
&lt;?php
require_once 'config/config.php';
require_once 'config/database.php';

try {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['reference']) || empty($input['reference'])) {
        throw new Exception('Payment reference is required');
    }

    $reference = sanitizeInput($input['reference']);

    // Verify payment with Paystack
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.paystack.co/transaction/verify/" . $reference,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            "Authorization: Bearer " . PAYSTACK_SECRET_KEY,
            "Cache-Control: no-cache",
        ],
    ));

    $response = curl_exec($curl);
    $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);

    if ($httpCode !== 200) {
        throw new Exception('Failed to verify payment with Paystack');
    }

    $paymentData = json_decode($response, true);

    if (!$paymentData['status'] || $paymentData['data']['status'] !== 'success') {
        throw new Exception('Payment verification failed');
    }

    $database = new Database();
    $db = $database->getConnection();

    // Get order by reference
    $orderReference = $paymentData['data']['metadata']['order_reference'] ?? null;
    if (!$orderReference) {
        throw new Exception('Order reference not found in payment metadata');
    }

    $query = "SELECT * FROM orders WHERE order_reference = :reference";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':reference', $orderReference);
    $stmt->execute();

    $order = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$order) {
        throw new Exception('Order not found');
    }

    // Update order with payment info
    $query = "UPDATE orders SET
                payment_status = 'completed',
                payment_reference = :payment_ref,
                updated_at = CURRENT_TIMESTAMP
              WHERE id = :order_id";

    $stmt = $db->prepare($query);
    $stmt->bindParam(':payment_ref', $reference);
    $stmt->bindParam(':order_id', $order['id']);

    if (!$stmt->execute()) {
        throw new Exception('Failed to update order payment status');
    }

    // Reserve domain
    $query = "INSERT INTO domains (domain_name, order_id) VALUES (:domain, :order_id)";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':domain', $order['desired_domain']);
    $stmt->bindParam(':order_id', $order['id']);
    $stmt->execute();

    // Send confirmation email (implement email function)
    // sendConfirmationEmail($order, $paymentData);

    echo json_encode([
        'success' => true,
        'message' => 'Payment verified successfully',
        'order' => [
            'id' => $order['id'],
            'reference' => $order['order_reference'],
            'domain' => $order['desired_domain'] . SUBDOMAIN_SUFFIX,
            'amount' => $order['amount']
        ]
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?&gt;
              </code></pre>
            </div>
          </div>

          {/* .htaccess File */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔒 Security & URL Rewriting</h2>

            <div className="border-l-4 border-blue-600 bg-blue-50 p-4 mb-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">File: .htaccess</h3>
            </div>

            <div className="bg-gray-800 text-gray-50 rounded-lg p-4 overflow-x-auto font-mono text-sm">
              <pre><code>
# Enable CORS
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
&lt;Files "*.sql"&gt;
    Order allow,deny
    Deny from all
&lt;/Files&gt;

&lt;Files "config.php"&gt;
    Order allow,deny
    Deny from all
&lt;/Files&gt;

# Enable file uploads
php_value upload_max_filesize 5M
php_value post_max_size 5M
php_value max_execution_time 300
              </code></pre>
            </div>
          </div>

          {/* Setup Instructions */}
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApiDocsPage;