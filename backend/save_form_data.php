<?php
// Database configuration
$host = 'localhost';
$dbname = 'troll_forms';
$username = 'your_username';
$password = 'your_password';

// Enable CORS for cross-origin requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

try {
    // Get JSON data from request
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        throw new Exception('Invalid JSON data');
    }
    
    // Connect to database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Prepare SQL statement
    $sql = "INSERT INTO form_submissions (
        timestamp, user_agent, form_owner, real_name, real_email, real_age, 
        real_keyboard_input, voice_input, photo_data, sarcasm_level, 
        accuracy_level, patience_level, progress_level, theme_used, time_spent
    ) VALUES (
        :timestamp, :user_agent, :form_owner, :real_name, :real_email, :real_age,
        :real_keyboard_input, :voice_input, :photo_data, :sarcasm_level,
        :accuracy_level, :patience_level, :progress_level, :theme_used, :time_spent
    )";
    
    $stmt = $pdo->prepare($sql);
    
   + // Execute with data
    $result = $stmt->execute([
        ':timestamp' => $input['timestamp'],
        ':user_agent' => $input['userAgent'],
        ':form_owner' => $input['formOwner'],
        ':real_name' => $input['realName'],
        ':real_email' => $input['realEmail'],
        ':real_age' => $input['realAge'],
        ':real_keyboard_input' => $input['realKeyboardInput'],
        ':voice_input' => $input['voiceInput'],
        ':photo_data' => $input['photoData'], // This will be a base64 string
        ':sarcasm_level' => $input['intelligenceMetrics']['sarcasm'],
        ':accuracy_level' => $input['intelligenceMetrics']['accuracy'],
        ':patience_level' => $input['intelligenceMetrics']['patience'],
        ':progress_level' => $input['interactions']['progress'],
        ':theme_used' => $input['interactions']['themeUsed'],
        ':time_spent' => $input['interactions']['timeSpent']
    ]);
    
    if ($result) {
        echo json_encode([
            'success' => true,
            'message' => 'Form data saved successfully',
            'submission_id' => $pdo->lastInsertId()
        ]);
    } else {
        throw new Exception('Failed to save data');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Database error: ' . $e->getMessage()
    ]);
}
?> 