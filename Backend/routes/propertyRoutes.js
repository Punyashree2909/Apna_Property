import express from "express";
import Property from "../models/Property.js";
<<<<<<< HEAD
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Property (protected)
router.post("/", verifyToken, async (req, res) => {
  try {
    const property = new Property({ ...req.body, owner: req.user.id });
    await property.save();
    res.status(201).json({ message: "Property added successfully", property });
  } catch (error) {
    res.status(500).json({ message: "Error adding property", error });
  }
});

// Get all properties
router.get("/", async (req, res) => {
  const properties = await Property.find().populate("owner", "fullName email");
  res.json(properties);
});

// Get single property by ID
router.get("/:id", async (req, res) => {
  const property = await Property.findById(req.params.id).populate("owner", "fullName email");
  if (!property) return res.status(404).json({ message: "Property not found" });
  res.json(property);
});

// Delete property (only owner)
router.delete("/:id", verifyToken, async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) return res.status(404).json({ message: "Property not found" });

  if (property.owner.toString() !== req.user.id)
    return res.status(403).json({ message: "Not authorized" });

  await property.deleteOne();
  res.json({ message: "Property deleted successfully" });
});

export default router;
=======
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

// Get all properties with search and filters
router.get("/", async (req, res) => {
  try {
    const { search, location, propertyType, minPrice, maxPrice, minSqft, maxSqft } = req.query;
    let properties = await Property.findAll();
    
    // Apply filters
    if (search) {
      properties = properties.filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (location) {
      properties = properties.filter(p => 
        p.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (propertyType) {
      properties = properties.filter(p => p.propertyType === propertyType);
    }
    
    if (minSqft) {
      properties = properties.filter(p => p.sqft >= parseInt(minSqft));
    }
    
    if (maxSqft) {
      properties = properties.filter(p => p.sqft <= parseInt(maxSqft));
    }
    
    if (minPrice) {
      properties = properties.filter(p => {
        const numPrice = typeof p.price === 'number' ? p.price : parseFloat(p.price.replace(/[^0-9.]/g, '')) * (p.price.includes('Cr') ? 10000000 : 100000);
        return numPrice >= parseInt(minPrice);
      });
    }
    
    if (maxPrice) {
      properties = properties.filter(p => {
        const numPrice = typeof p.price === 'number' ? p.price : parseFloat(p.price.replace(/[^0-9.]/g, '')) * (p.price.includes('Cr') ? 10000000 : 100000);
        return numPrice <= parseInt(maxPrice);
      });
    }
    
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch properties", error });
  }
});

// Get property by ID
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: "Property not found" });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch property", error });
  }
});

// Create new property (protected route)
router.post("/", verifyToken, async (req, res) => {
  try {
    const propertyData = { ...req.body, ownerId: req.user.id };
    const property = await Property.create(propertyData);
    res.status(201).json({ message: "Property created successfully", property });
  } catch (error) {
    res.status(500).json({ message: "Failed to create property", error });
  }
});

// Update property (protected route)
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updated = await Property.update(req.params.id, req.user.id, req.body);
    if (!updated) return res.status(404).json({ message: "Property not found or unauthorized" });
    res.json({ message: "Property updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update property", error });
  }
});

// Delete property (protected route)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await Property.delete(req.params.id, req.user.id);
    if (!deleted) return res.status(404).json({ message: "Property not found or unauthorized" });
    res.json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete property", error });
  }
});

export default router;
>>>>>>> owais
