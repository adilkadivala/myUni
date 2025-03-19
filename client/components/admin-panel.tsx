"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Edit,
  FileText,
  Grid,
  Layout,
  Menu,
  PlusCircle,
  Settings,
  Trash2,
  User,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-bold">Admin Panel</h2>
        <Button
          variant="outline"
          size="sm"
          className="md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>
      <p className="text-muted-foreground mb-4">
        University customization and management interface
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Mobile Sidebar (Overlay) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className="w-64 h-full bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-medium">Admin User</p>
                  <p className="text-sm text-muted-foreground">
                    University of Macedonia
                  </p>
                </div>
              </div>

              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Layout size={18} />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Grid size={18} />
                  Customization
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FileText size={18} />
                  Content
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <User size={18} />
                  Users
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Settings size={18} />
                  Settings
                </Button>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <User size={20} />
            </div>
            <div>
              <p className="font-medium">Admin User</p>
              <p className="text-sm text-muted-foreground">
                University of Macedonia
              </p>
            </div>
          </div>

          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Layout size={18} />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Grid size={18} />
              Customization
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText size={18} />
              Content
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <User size={18} />
              Users
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings size={18} />
              Settings
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>University Customization</CardTitle>
              <CardDescription>
                Configure the appearance and features of your university's
                application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Branding */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Branding</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="university-name">University Name</Label>
                    <Input
                      id="university-name"
                      defaultValue="University of Macedonia"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university-acronym">
                      University Acronym
                    </Label>
                    <Input id="university-acronym" defaultValue="UoM" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>University Logo</Label>
                    <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                      <div className="w-24 h-24 bg-muted rounded-md flex items-center justify-center mb-4">
                        <p className="text-muted-foreground">Logo</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Upload Logo
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary"></div>
                      <Input type="text" defaultValue="#0f172a" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Homepage Layout */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Homepage Layout</h3>
                <div className="border rounded-md p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="border rounded-md p-3 bg-muted/50 flex flex-col items-center justify-center h-24">
                      <p className="text-sm font-medium">Announcements</p>
                      <div className="flex mt-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit size={14} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-md p-3 bg-muted/50 flex flex-col items-center justify-center h-24">
                      <p className="text-sm font-medium">Schedule</p>
                      <div className="flex mt-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit size={14} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-md p-3 bg-muted/50 flex flex-col items-center justify-center h-24">
                      <p className="text-sm font-medium">Quick Links</p>
                      <div className="flex mt-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit size={14} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <PlusCircle size={16} className="mr-2" />
                    Add Widget
                  </Button>
                </div>
              </div>

              {/* Feature Toggles */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Feature Toggles</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div>
                      <p className="font-medium">Student Portal</p>
                      <p className="text-sm text-muted-foreground">
                        Academic records and course registration
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-0.5"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div>
                      <p className="font-medium">Library Integration</p>
                      <p className="text-sm text-muted-foreground">
                        Access to library resources and book reservations
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-0.5"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div>
                      <p className="font-medium">Campus Map</p>
                      <p className="text-sm text-muted-foreground">
                        Interactive campus map with building information
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-muted rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute left-1 top-0.5"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
