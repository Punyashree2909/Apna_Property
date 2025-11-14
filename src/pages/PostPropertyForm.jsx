import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function PostProperty() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6 text-gray-900">
        Post Your Property
      </h1>

      <Tabs defaultValue="basic" className="w-full">
        {/* ---------------- TAB HEADERS ---------------- */}
        <TabsList className="grid grid-cols-4 bg-white shadow rounded-xl mb-8">
          <TabsTrigger value="basic">Basic Details</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
          <TabsTrigger value="media">Photos & Media</TabsTrigger>
        </TabsList>

        {/* ---------------- TAB 1 : BASIC DETAILS ---------------- */}
        <TabsContent value="basic">
          <Card className="shadow-lg rounded-xl">
            <CardContent className="space-y-6 py-6">

              <div>
                <label className="font-medium">Property Title</label>
                <Input placeholder="e.g. 2 BHK Apartment in Pune" className="mt-1" />
              </div>

              <div>
                <label className="font-medium">Description</label>
                <Textarea placeholder="Write about the property…" className="mt-1" />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="font-medium">Property Type</label>
                  <Input placeholder="Apartment / Villa / Plot" className="mt-1" />
                </div>
                <div>
                  <label className="font-medium">Status</label>
                  <Input placeholder="Available / Sold / Pending" className="mt-1" />
                </div>
              </div>

            </CardContent>
          </Card>
        </TabsContent>

        {/* ---------------- TAB 2 : LOCATION ---------------- */}
        <TabsContent value="location">
          <Card className="shadow-lg rounded-xl">
            <CardContent className="space-y-6 py-6">

              <div>
                <label className="font-medium">City</label>
                <Input placeholder="Enter city name" className="mt-1" />
              </div>

              <div>
                <label className="font-medium">Address</label>
                <Textarea placeholder="Full property address" className="mt-1" />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="font-medium">Latitude</label>
                  <Input placeholder="Optional" className="mt-1" />
                </div>
                <div>
                  <label className="font-medium">Longitude</label>
                  <Input placeholder="Optional" className="mt-1" />
                </div>
              </div>

            </CardContent>
          </Card>
        </TabsContent>

        {/* ---------------- TAB 3 : AMENITIES ---------------- */}
        <TabsContent value="amenities">
          <Card className="shadow-lg rounded-xl">
            <CardContent className="py-6">

              <h2 className="text-lg font-semibold mb-4">Select Amenities</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Parking",
                  "Swimming Pool",
                  "Garden",
                  "Lift",
                  "Security",
                  "Water Supply",
                  "Power Backup",
                  "Gym",
                  "Kids Play Area",
                ].map((item) => (
                  <label key={item} className="flex items-center space-x-2">
                    <Checkbox />
                    <span>{item}</span>
                  </label>
                ))}
              </div>

            </CardContent>
          </Card>
        </TabsContent>

        {/* ---------------- TAB 4 : PHOTOS & MEDIA ---------------- */}
        <TabsContent value="media">
          <Card className="shadow-lg rounded-xl">
            <CardContent className="space-y-6 py-6">

              <div>
                <label className="font-medium">Upload Property Images</label>
                <Input type="file" multiple className="mt-1" />
              </div>

              <div>
                <label className="font-medium">Video URL (Optional)</label>
                <Input placeholder="YouTube or video link" className="mt-1" />
              </div>

              <Button className="w-full py-6 text-lg rounded-xl">
                Submit Property
              </Button>

            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
