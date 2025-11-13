import sqlite3 from "sqlite3";

let db;

const connectDB = () => {
  db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      console.error("❌ SQLite connection failed:", err.message);
      process.exit(1);
    }
    console.log("✅ SQLite in-memory database connected");
    initTables();
  });
};

const initTables = () => {
  db.serialize(() => {
    db.run(`CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullName TEXT NOT NULL,
      userType TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    
    db.run(`CREATE TABLE properties (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      price TEXT NOT NULL,
      tags TEXT,
      imageUrl TEXT NOT NULL,
      photoCount INTEGER DEFAULT 1,
      sqft INTEGER NOT NULL,
      status TEXT NOT NULL,
      floor TEXT NOT NULL,
      description TEXT NOT NULL,
      listerName TEXT NOT NULL,
      listerAvatar TEXT,
      listerUpdated TEXT DEFAULT 'Just now',
      location TEXT NOT NULL,
      propertyType TEXT NOT NULL,
      ownerId INTEGER,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (ownerId) REFERENCES users (id)
    )`);
  });
};

export { db };
export default connectDB;
