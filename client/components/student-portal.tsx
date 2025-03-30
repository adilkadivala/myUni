"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Menu, Settings, User, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function StudentPortal() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center dark:text-zinc-700">
        <h2 className="text-xl md:text-2xl font-bold">Student Portal</h2>
        <Button
          variant="outline"
          size="sm"
          className="md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>
      <p className="text-muted-foreground mb-4 dark:text-zinc-700">
        Centralized access to student information and academic records
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Mobile Sidebar (Overlay) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className="w-64 h-full bg-white p-4 dark:text-zinc-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-medium">Maria Papadopoulou</p>
                  <p className="text-sm text-muted-foreground">ID: 20210134</p>
                </div>
              </div>

              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <User size={18} />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FileText size={18} />
                  Academic Records
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Calendar size={18} />
                  Course Registration
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FileText size={18} />
                  Transcripts
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Settings size={18} />
                  Account Settings
                </Button>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 bg-white p-4 rounded-lg shadow dark:text-zinc-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <User size={20} />
            </div>
            <div>
              <p className="font-medium">Maria Papadopoulou</p>
              <p className="text-sm text-muted-foreground">ID: 20210134</p>
            </div>
          </div>

          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <User size={18} />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText size={18} />
              Academic Records
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar size={18} />
              Course Registration
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText size={18} />
              Transcripts
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings size={18} />
              Account Settings
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic Records</CardTitle>
              <CardDescription>
                View your academic progress and course history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Current GPA</p>
                    <p className="text-2xl font-bold">8.2/10</p>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      Completed Credits
                    </p>
                    <p className="text-2xl font-bold">120/240</p>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      Current Semester
                    </p>
                    <p className="text-2xl font-bold">5th</p>
                  </div>
                </div>

                {/* Course History */}
                <div>
                  <h3 className="text-lg font-medium mb-3">Course History</h3>
                  <div className="border rounded-md overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-3 text-left font-medium">Course</th>
                          <th className="p-3 text-left font-medium">
                            Semester
                          </th>
                          <th className="p-3 text-left font-medium">Credits</th>
                          <th className="p-3 text-left font-medium">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3">Introduction to Programming</td>
                          <td className="p-3">1st</td>
                          <td className="p-3">6</td>
                          <td className="p-3">9.0</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Data Structures</td>
                          <td className="p-3">2nd</td>
                          <td className="p-3">6</td>
                          <td className="p-3">8.5</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Computer Architecture</td>
                          <td className="p-3">2nd</td>
                          <td className="p-3">6</td>
                          <td className="p-3">7.0</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Algorithms</td>
                          <td className="p-3">3rd</td>
                          <td className="p-3">6</td>
                          <td className="p-3">8.0</td>
                        </tr>
                        <tr>
                          <td className="p-3">Database Systems</td>
                          <td className="p-3">4th</td>
                          <td className="p-3">6</td>
                          <td className="p-3">8.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Current Courses */}
                <div>
                  <h3 className="text-lg font-medium mb-3">Current Courses</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          Web Development
                        </CardTitle>
                        <CardDescription>CS-301 • 6 Credits</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          Prof. Dimitriou
                        </p>
                        <div className="flex justify-between text-sm">
                          <span>Progress:</span>
                          <span>60%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-1">
                          <div className="bg-primary h-2 rounded-full w-3/5"></div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          Software Engineering
                        </CardTitle>
                        <CardDescription>CS-305 • 6 Credits</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          Prof. Papadopoulos
                        </p>
                        <div className="flex justify-between text-sm">
                          <span>Progress:</span>
                          <span>45%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-1">
                          <div className="bg-primary h-2 rounded-full w-[45%]"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default StudentPortal;
