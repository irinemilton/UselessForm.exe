-- Create database
CREATE DATABASE IF NOT EXISTS troll_forms;
USE troll_forms;

-- Create table for form submissions
CREATE TABLE IF NOT EXISTS form_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    timestamp DATETIME NOT NULL,
    user_agent TEXT,
    form_owner VARCHAR(255),
    real_name VARCHAR(255),
    real_email VARCHAR(255),
    real_age VARCHAR(50),
    real_keyboard_input TEXT,
    voice_input TEXT,
    photo_data LONGTEXT, -- Base64 encoded image data
    sarcasm_level VARCHAR(10),
    accuracy_level VARCHAR(10),
    patience_level VARCHAR(10),
    progress_level INT,
    theme_used VARCHAR(50),
    time_spent BIGINT, -- Time spent in milliseconds
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_timestamp ON form_submissions(timestamp);
CREATE INDEX idx_form_owner ON form_submissions(form_owner);
CREATE INDEX idx_created_at ON form_submissions(created_at);

-- Create a view for recent submissions
CREATE VIEW recent_submissions AS
SELECT 
    id,
    timestamp,
    form_owner,
    real_name,
    real_email,
    sarcasm_level,
    accuracy_level,
    patience_level,
    progress_level,
    theme_used,
    time_spent,
    created_at
FROM form_submissions
ORDER BY created_at DESC
LIMIT 100;

-- Create a view for form owner statistics
CREATE VIEW owner_stats AS
SELECT 
    form_owner,
    COUNT(*) as total_submissions,
    AVG(CAST(REPLACE(sarcasm_level, '%', '') AS DECIMAL(5,2))) as avg_sarcasm,
    AVG(CAST(REPLACE(accuracy_level, '%', '') AS DECIMAL(5,2))) as avg_accuracy,
    AVG(CAST(REPLACE(patience_level, '%', '') AS DECIMAL(5,2))) as avg_patience,
    AVG(progress_level) as avg_progress,
    AVG(time_spent) as avg_time_spent
FROM form_submissions
WHERE form_owner IS NOT NULL
GROUP BY form_owner
ORDER BY total_submissions DESC; 