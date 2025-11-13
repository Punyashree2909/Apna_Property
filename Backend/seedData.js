import dotenv from "dotenv";
import connectDB, { db } from "./config/db.js";
import User from "./models/User.js";
import Property from "./models/Property.js";
import bcrypt from "bcryptjs";

dotenv.config();

const seedData = async () => {
  try {
    connectDB();
    
    // Wait for database to be ready
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create a sample user
    const hashedPassword = await bcrypt.hash("password123", 10);
    const sampleUser = await User.create({
      fullName: "Demo User",
      userType: "Seller",
      email: "demo@apnaproperty.com",
      password: hashedPassword
    });

    const sampleProperties = [
      {
        title: "Modern 3BHK Apartment",
        price: "1.25 Cr",
        tags: ["Premium"],
        imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9e191414d?w=600&auto=format&fit=crop",
        photoCount: 12,
        sqft: 1800,
        status: "Ready to Move",
        floor: "12th of 20 Floors",
        description: "Spacious 3BHK with panoramic city views, premium amenities, and close proximity to metro.",
        listerName: "Rohan Sharma",
        listerAvatar: "https://i.pravatar.cc/150?img=11",
        location: "Gurgaon",
        propertyType: "Apartment",
        ownerId: sampleUser.id
      },
      {
        title: "Elegant 5BHK Villa",
        price: "3.50 Cr",
        tags: ["Verified"],
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop",
        photoCount: 8,
        sqft: 3200,
        status: "Under Construction",
        floor: "Ground + 1",
        description: "Luxurious villa with private garden, high-end finishes, and exclusive access to club.",
        listerName: "Priya Singh",
        listerAvatar: "https://i.pravatar.cc/150?img=12",
        location: "Noida",
        propertyType: "Villa",
        ownerId: sampleUser.id
      }
    ];

    for (const propertyData of sampleProperties) {
      await Property.create(propertyData);
    }
    
    console.log("✅ Sample data seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedData();