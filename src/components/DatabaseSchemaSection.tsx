import React from 'react';
import SectionWrapper from './SectionWrapper';
import CodeBlock from './CodeBlock';

const databaseSchema = `CREATE DATABASE mycv_website;
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
CREATE INDEX idx_domains_name ON domains(domain_name);`;

const DatabaseSchemaSection: React.FC = () => {
  return (
    <SectionWrapper title="🗄️ Database Schema">
      <p className="text-gray-600 mb-4">Create this MySQL database structure:</p>
      <CodeBlock filePath="database/schema.sql" code={databaseSchema} language="sql" />
    </SectionWrapper>
  );
};

export default DatabaseSchemaSection;