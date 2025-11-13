import { db } from "../config/db.js";

class Property {
  static create(propertyData) {
    return new Promise((resolve, reject) => {
      const { title, price, tags, imageUrl, photoCount, sqft, status, floor, description, listerName, listerAvatar, location, propertyType, ownerId } = propertyData;
      db.run(
        `INSERT INTO properties (title, price, tags, imageUrl, photoCount, sqft, status, floor, description, listerName, listerAvatar, location, propertyType, ownerId) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, price, JSON.stringify(tags), imageUrl, photoCount, sqft, status, floor, description, listerName, listerAvatar, location, propertyType, ownerId],
        function(err) {
          if (err) reject(err);
          else resolve({ id: this.lastID, ...propertyData });
        }
      );
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM properties", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows.map(row => ({ ...row, tags: JSON.parse(row.tags || '[]') })));
      });
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM properties WHERE id = ?", [id], (err, row) => {
        if (err) reject(err);
        else resolve(row ? { ...row, tags: JSON.parse(row.tags || '[]') } : null);
      });
    });
  }

  static update(id, ownerId, updateData) {
    return new Promise((resolve, reject) => {
      const processedData = { ...updateData };
      if (processedData.tags && Array.isArray(processedData.tags)) {
        processedData.tags = JSON.stringify(processedData.tags);
      }
      
      const allowedFields = ['title', 'price', 'tags', 'imageUrl', 'photoCount', 'sqft', 'status', 'floor', 'description', 'listerName', 'listerAvatar', 'location', 'propertyType'];
      const filteredData = Object.keys(processedData)
        .filter(key => allowedFields.includes(key))
        .reduce((obj, key) => {
          obj[key] = processedData[key];
          return obj;
        }, {});
      
      const fields = Object.keys(filteredData).map(key => `${key} = ?`).join(', ');
      const values = Object.values(filteredData);
      values.push(id, ownerId);
      
      db.run(
        `UPDATE properties SET ${fields} WHERE id = ? AND ownerId = ?`,
        values,
        function(err) {
          if (err) reject(err);
          else resolve(this.changes > 0);
        }
      );
    });
  }

  static delete(id, ownerId) {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM properties WHERE id = ? AND ownerId = ?", [id, ownerId], function(err) {
        if (err) reject(err);
        else resolve(this.changes > 0);
      });
    });
  }
}

export default Property;