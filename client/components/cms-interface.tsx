"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  Edit,
  FileText,
  Layout,
  Menu,
  MessageSquare,
  PlusCircle,
  Search,
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
import { Input } from "./ui/input";

function CMSInterface() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center dark:text-zinc-700">
        <h2 className="text-xl md:text-2xl font-bold">CMS Interface</h2>
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
        Content management system for university administrators
      </p>

      <div className="flex flex-col md:flex-row gap-4 dark:text-zinc-700">
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
                  <p className="font-medium">Content Manager</p>
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
                  <FileText size={18} />
                  Announcements
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Calendar size={18} />
                  Events
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <MessageSquare size={18} />
                  News
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
        <div className="hidden md:block w-64 bg-white p-4 rounded-lg shadow dark:text-zinc-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <User size={20} />
            </div>
            <div>
              <p className="font-medium">Content Manager</p>
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
              <FileText size={18} />
              Announcements
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar size={18} />
              Events
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MessageSquare size={18} />
              News
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
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <CardTitle>Announcements</CardTitle>
                  <CardDescription>
                    Manage university-wide announcements
                  </CardDescription>
                </div>
                <Button>
                  <PlusCircle size={16} className="mr-2" />
                  New Announcement
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <Input
                    placeholder="Search announcements..."
                    className="w-full sm:max-w-sm"
                  />
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Search size={16} className="mr-2" />
                    Search
                  </Button>
                </div>

                <div className="border rounded-md overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-muted">
                        <th className="p-3 text-left font-medium">Title</th>
                        <th className="p-3 text-left font-medium">Category</th>
                        <th className="p-3 text-left font-medium">Date</th>
                        <th className="p-3 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Registration Deadline Extended</td>
                        <td className="p-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            Academic
                          </span>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">
                          2023-09-15
                        </td>
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Edit size={16} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          Library Hours Extended for Exam Period
                        </td>
                        <td className="p-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Facilities
                          </span>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">
                          2023-09-10
                        </td>
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Edit size={16} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Guest Lecture: AI in Education</td>
                        <td className="p-3">
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                            Events
                          </span>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">
                          2023-09-05
                        </td>
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Edit size={16} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Campus Maintenance Schedule</td>
                        <td className="p-3">
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                            Maintenance
                          </span>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">
                          2023-09-01
                        </td>
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Edit size={16} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    Showing 4 of 24 announcements
                  </div>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-primary text-primary-foreground"
                    >
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
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

export default CMSInterface;
