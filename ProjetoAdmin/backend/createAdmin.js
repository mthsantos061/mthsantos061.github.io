// createAdmin.js
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
require('dotenv').config(); // if you have .env with DB details

async function createAdmin() {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('admin123', salt); // Your frontend password

  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'your_db_password',
    database: process.env.DB_NAME || 'task_manager_db'
  };

  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      'INSERT INTO users (email, password) VALUES (?, ?) ON DUPLICATE KEY UPDATE password = ?',
      ['admin@exemplo.com', hashedPassword, hashedPassword]
    );
    console.log('Admin user created/updated:', rows);
  } catch (err) {
    console.error('Error creating admin user:', err);
  } finally {
    if (connection) await connection.end();
  }
}

createAdmin();