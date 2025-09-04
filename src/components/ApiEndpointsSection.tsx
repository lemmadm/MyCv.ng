import React from 'react';
import SectionWrapper from './SectionWrapper';
import CodeBlock from './CodeBlock';

const checkDomainCode = `<?php
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
?>`;

const uploadCvCode = `<?php
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
?>`;

const createOrderCode = `<?php
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
?>`;

const verifyPaymentCode = `<?php
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
?>`;

const ApiEndpointsSection: React.FC = () => {
  return (
    <SectionWrapper title="🔗 API Endpoints">
      <CodeBlock
        filePath="api/check-domain.php"
        code={checkDomainCode}
      />
      <p className="text-sm text-gray-600 mb-4">POST /api/check-domain.php - Check if domain is available</p>

      <CodeBlock
        filePath="api/upload-cv.php"
        code={uploadCvCode}
      />
      <p className="text-sm text-gray-600 mb-4">POST /api/upload-cv.php - Upload CV file</p>

      <CodeBlock
        filePath="api/create-order.php"
        code={createOrderCode}
      />
      <p className="text-sm text-gray-600 mb-4">POST /api/create-order.php - Create new order</p>

      <CodeBlock
        filePath="api/verify-payment.php"
        code={verifyPaymentCode}
      />
      <p className="text-sm text-gray-600 mb-4">POST /api/verify-payment.php - Verify Paystack payment</p>
    </SectionWrapper>
  );
};

export default ApiEndpointsSection;