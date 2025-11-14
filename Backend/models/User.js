import { db } from "../config/db.js";

class User {
  static create(userData) {
    return new Promise((resolve, reject) => {
      const { fullName, userType, email, password } = userData;
      db.run(
        "INSERT INTO users (fullName, userType, email, password) VALUES (?, ?, ?, ?)",
        [fullName, userType, email, password],
        function(err) {
          if (err) reject(err);
          else resolve({ id: this.lastID, ...userData });
        }
      );
    });
  }

  static findByEmail(email) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }
}

export default User;
