"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Bell,
  Book,
  Calendar,
  FileText,
  Home,
  Menu,
  MessageSquare,
  Settings,
  User,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-bold">Student Dashboard</h2>
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
        Personalized homepage with customizable tiles and content
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
                  <p className="font-medium">Maria Papadopoulou</p>
                  <p className="text-sm text-muted-foreground">
                    Computer Science
                  </p>
                </div>
              </div>

              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Home size={18} />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Calendar size={18} />
                  Schedule
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FileText size={18} />
                  Courses
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <MessageSquare size={18} />
                  Messages
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Bell size={18} />
                  Notifications
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
              <p className="font-medium">Maria Papadopoulou</p>
              <p className="text-sm text-muted-foreground">Computer Science</p>
            </div>
          </div>

          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home size={18} />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar size={18} />
              Schedule
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText size={18} />
              Courses
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MessageSquare size={18} />
              Messages
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Bell size={18} />
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings size={18} />
              Settings
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          {/* Header */}
          <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
            <h3 className="text-lg font-medium">Welcome back, Maria!</h3>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Bell size={18} />
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <MessageSquare size={18} />
              </Button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Upcoming Classes */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Today's Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <p className="font-medium">Database Systems</p>
                      <p className="text-sm">09:00 - 11:00</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Room A102</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <p className="font-medium">Algorithms</p>
                      <p className="text-sm">13:00 - 15:00</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Room B205</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-3">
                    <p className="font-medium">Registration Deadline</p>
                    <p className="text-sm text-muted-foreground">
                      Course registration closes on Friday
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <p className="font-medium">Library Hours Extended</p>
                    <p className="text-sm text-muted-foreground">
                      Extended hours during exam period
                    </p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assignments */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-red-100 flex items-center justify-center text-red-600">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Database Project</p>
                      <p className="text-sm text-muted-foreground">
                        Due in 2 days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-amber-100 flex items-center justify-center text-amber-600">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Algorithms Assignment</p>
                      <p className="text-sm text-muted-foreground">
                        Due in 5 days
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grades */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Grades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p>Web Development</p>
                    <p className="font-medium">8.5/10</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Data Structures</p>
                    <p className="font-medium">9.0/10</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Computer Networks</p>
                    <p className="font-medium">7.5/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campus Map */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Campus Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Campus Map Placeholder
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    className="h-auto py-2 justify-start"
                  >
                    <Book size={16} className="mr-2" />
                    Library
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-2 justify-start"
                  >
                    <Calendar size={16} className="mr-2" />
                    Academic Calendar
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-2 justify-start"
                  >
                    <FileText size={16} className="mr-2" />
                    Transcript
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-2 justify-start"
                  >
                    <User size={16} className="mr-2" />
                    Student Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
