"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  MessageSquare,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          University management and system overview
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-xl font-bold">15,247</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Faculty Members</p>
                <p className="text-xl font-bold">1,234</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Courses</p>
                <p className="text-xl font-bold">1,567</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">System Uptime</p>
                <p className="text-xl font-bold">99.9%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent System Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium">Course registration opened</p>
                  <p className="text-sm text-muted-foreground">
                    Spring 2024 registration is now available
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  2 hours ago
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                <div className="flex-1">
                  <p className="font-medium">System maintenance scheduled</p>
                  <p className="text-sm text-muted-foreground">
                    Planned downtime this weekend
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  4 hours ago
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium">New faculty member added</p>
                  <p className="text-sm text-muted-foreground">
                    Dr. Smith joined Computer Science department
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">1 day ago</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <FileText className="h-5 w-5 text-purple-600" />
                <div className="flex-1">
                  <p className="font-medium">Announcement published</p>
                  <p className="text-sm text-muted-foreground">
                    Library hours extended for exam period
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  2 days ago
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Database</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Online</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">API Services</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Online</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">File Storage</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Online</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Email Service</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-yellow-600">Degraded</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Backup System</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Online</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 border rounded">
                <span className="text-sm">Review course proposals</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                  Urgent
                </span>
              </div>

              <div className="flex items-center justify-between p-2 border rounded">
                <span className="text-sm">Approve faculty applications</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  Medium
                </span>
              </div>

              <div className="flex items-center justify-between p-2 border rounded">
                <span className="text-sm">Update system policies</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Low
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">New Registrations</span>
                <span className="font-medium">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Active Sessions</span>
                <span className="font-medium">3,421</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Support Tickets</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">System Alerts</span>
                <span className="font-medium">3</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
