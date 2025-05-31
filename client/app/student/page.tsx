"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Book,
  Calendar,
  FileText,
  User,
  TrendingUp,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Maria!</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your studies today.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current GPA</p>
                <p className="text-xl font-bold">8.2/10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Book className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Credits Earned</p>
                <p className="text-xl font-bold">120/240</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Current Semester
                </p>
                <p className="text-xl font-bold">5th</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Tasks</p>
                <p className="text-xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <h3 className="font-medium">Database Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    Prof. Dimitriou • Room A102
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">09:00 - 11:00</p>
                  <p className="text-sm text-green-600">In Progress</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <h3 className="font-medium">Algorithms</h3>
                  <p className="text-sm text-muted-foreground">
                    Prof. Papadopoulos • Room B205
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">13:00 - 15:00</p>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <h3 className="font-medium">Software Engineering Lab</h3>
                  <p className="text-sm text-muted-foreground">
                    Prof. Nikolaou • Lab C301
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">15:30 - 17:30</p>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-3">
                <h4 className="font-medium">Registration Deadline</h4>
                <p className="text-sm text-muted-foreground">
                  Course registration closes on Friday
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  2 hours ago
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-medium">Library Hours Extended</h4>
                <p className="text-sm text-muted-foreground">
                  Extended hours during exam period
                </p>
                <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
              </div>

              <div className="border-l-4 border-green-500 pl-3">
                <h4 className="font-medium">Guest Lecture</h4>
                <p className="text-sm text-muted-foreground">
                  AI in Education - Tomorrow 2 PM
                </p>
                <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-red-100 flex items-center justify-center text-red-600">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="font-medium">Database Project</p>
                  <p className="text-sm text-red-600">Due in 2 days</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-amber-100 flex items-center justify-center text-amber-600">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="font-medium">Algorithms Assignment</p>
                  <p className="text-sm text-amber-600">Due in 5 days</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="font-medium">Research Paper</p>
                  <p className="text-sm text-blue-600">Due in 1 week</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Web Development</span>
                <span className="font-medium text-green-600">8.5/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Data Structures</span>
                <span className="font-medium text-green-600">9.0/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Computer Networks</span>
                <span className="font-medium text-blue-600">7.5/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Software Engineering</span>
                <span className="font-medium text-green-600">8.8/10</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
