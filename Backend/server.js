import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);

// Base test route
app.get("/", (req, res) => {
  res.send("Apna Property Backend API 🚀");
});

// Quick test route for properties
app.get("/test-properties", async (req, res) => {
  try {
    const Property = (await import("./models/Property.js")).default;
    const properties = await Property.findAll();
    res.json({ count: properties.length, properties: properties.slice(0, 3) });
  } catch (error) {
    res.status(500).json({ error: "Database not ready" });
  }
});

app.get("/seed", async (req, res) => {
  try {
    const bcrypt = await import("bcryptjs");
    const User = (await import("./models/User.js")).default;
    const Property = (await import("./models/Property.js")).default;
    
    // Create sample user
    const hashedPassword = await bcrypt.hash("password123", 10);
    const sampleUser = await User.create({
      fullName: "Demo User",
      userType: "Seller",
      email: "demo@apnaproperty.com",
      password: hashedPassword
    });

    // Create sample properties
    const properties = [
      {
        title: "3BHK Apartment in DLF Phase 2",
        price: "1.25 Cr",
        tags: ["Premium"],
        imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9e191414d?w=600&auto=format&fit=crop",
        photoCount: 12,
        sqft: 1800,
        status: "Ready to Move",
        floor: "12th of 20 Floors",
        description: "Spacious 3BHK in DLF Phase 2 with metro connectivity, premium amenities, and 24/7 security.",
        listerName: "Rohan Sharma",
        listerAvatar: "https://i.pravatar.cc/150?img=11",
        location: "Gurgaon, Haryana",
        propertyType: "Apartment",
        ownerId: sampleUser.id
      },
      {
        title: "5BHK Villa in Sector 50",
        price: "3.50 Cr",
        tags: ["Verified"],
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop",
        photoCount: 8,
        sqft: 3200,
        status: "Under Construction",
        floor: "Ground + 1",
        description: "Luxurious villa in Sector 50 Noida with private garden, club access, and modern architecture.",
        listerName: "Priya Singh",
        listerAvatar: "https://i.pravatar.cc/150?img=12",
        location: "Noida, Uttar Pradesh",
        propertyType: "Villa",
        ownerId: sampleUser.id
      },
      {
        title: "2BHK Flat in Lajpat Nagar",
        price: "85 Lac",
        tags: ["Budget Friendly"],
        imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop",
        photoCount: 6,
        sqft: 1200,
        status: "Ready to Move",
        floor: "5th of 10 Floors",
        description: "Well-designed 2BHK in Lajpat Nagar with metro connectivity and local market access.",
        listerName: "Amit Kumar",
        listerAvatar: "https://i.pravatar.cc/150?img=13",
        location: "Delhi",
        propertyType: "Apartment",
        ownerId: sampleUser.id
      },
      {
        title: "Penthouse in Bandra West",
        price: "5.75 Cr",
        tags: ["Luxury"],
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop",
        photoCount: 15,
        sqft: 4500,
        status: "Ready to Move",
        floor: "25th Floor (Top)",
        description: "Exclusive penthouse in Bandra West with Arabian Sea view, private terrace, and premium finishes.",
        listerName: "Neha Gupta",
        listerAvatar: "https://i.pravatar.cc/150?img=14",
        location: "Mumbai, Maharashtra",
        propertyType: "Apartment",
        ownerId: sampleUser.id
      },
      {
        title: "Studio in Koregaon Park",
        price: "45 Lac",
        tags: ["Compact"],
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop",
        photoCount: 4,
        sqft: 600,
        status: "Ready to Move",
        floor: "3rd of 8 Floors",
        description: "Modern studio apartment in Koregaon Park, perfect for IT professionals with cafe culture nearby.",
        listerName: "Rajesh Patel",
        listerAvatar: "https://i.pravatar.cc/150?img=15",
        location: "Pune, Maharashtra",
        propertyType: "Apartment",
        ownerId: sampleUser.id
      },
      {
        title: "Farmhouse in Sohna Road",
        price: "2.80 Cr",
        tags: ["Farmhouse"],
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop",
        photoCount: 20,
        sqft: 5000,
        status: "Ready to Move",
        floor: "Ground + 1",
        description: "Beautiful farmhouse on Sohna Road with swimming pool, landscaped garden, and peaceful environment.",
        listerName: "Sunita Sharma",
        listerAvatar: "https://i.pravatar.cc/150?img=16",
        location: "Gurgaon, Haryana",
        propertyType: "House",
        ownerId: sampleUser.id
      },
      {
        title: "Office Space in Electronic City",
        price: "1.50 Cr",
        tags: ["Commercial"],
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop",
        photoCount: 8,
        sqft: 2000,
        status: "Ready to Move",
        floor: "8th of 15 Floors",
        description: "Prime commercial office space in Electronic City Phase 1 with IT park amenities and parking.",
        listerName: "Vikram Singh",
        listerAvatar: "https://i.pravatar.cc/150?img=17",
        location: "Bangalore, Karnataka",
        propertyType: "Apartment",
        ownerId: sampleUser.id
      },
      {
        title: "Independent House in Malviya Nagar",
        price: "1.95 Cr",
        tags: ["Independent"],
        imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop",
        photoCount: 12,
        sqft: 2800,
        status: "Under Construction",
        floor: "Ground + 2",
        description: "Spacious 4BHK independent house in Malviya Nagar with traditional Rajasthani architecture.",
        listerName: "Kavita Jain",
        listerAvatar: "https://i.pravatar.cc/150?img=18",
        location: "Jaipur, Rajasthan",
        propertyType: "House",
        ownerId: sampleUser.id
      }
    ];

    for (const propertyData of properties) {
      await Property.create(propertyData);
    }
    
    res.json({ message: "Sample data created successfully ✅", user: sampleUser.id, properties: properties.length });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating sample data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));