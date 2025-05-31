"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  PlusCircle,
  Edit,
  Trash2,
  Calendar,
  FileText,
  MessageSquare,
  ImageIcon,
} from "lucide-react";

export default function ContentManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const announcements = [
    {
      id: 1,
      title: "Registration Deadline Extended",
      category: "Academic",
      date: "2023-09-15",
      status: "Published",
      author: "Admin",
    },
    {
      id: 2,
      title: "Library Hours Extended for Exam Period",
      category: "Facilities",
      date: "2023-09-10",
      status: "Published",
      author: "Library Staff",
    },
    {
      id: 3,
      title: "Guest Lecture: AI in Education",
      category: "Events",
      date: "2023-09-05",
      status: "Draft",
      author: "CS Department",
    },
    {
      id: 4,
      title: "Campus Maintenance Schedule",
      category: "Maintenance",
      date: "2023-09-01",
      status: "Published",
      author: "Facilities",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Orientation Week",
      date: "2023-09-20",
      location: "Main Campus",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Career Fair 2023",
      date: "2023-10-15",
      location: "Student Center",
      status: "Planning",
    },
    {
      id: 3,
      title: "Research Symposium",
      date: "2023-11-05",
      location: "Conference Hall",
      status: "Draft",
    },
  ];

  const news = [
    {
      id: 1,
      title: "University Receives Research Grant",
      category: "Research",
      date: "2023-09-12",
      status: "Published",
    },
    {
      id: 2,
      title: "New Partnership with Tech Company",
      category: "Partnerships",
      date: "2023-09-08",
      status: "Published",
    },
    {
      id: 3,
      title: "Student Achievement Awards",
      category: "Student Life",
      date: "2023-09-03",
      status: "Draft",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Content Management</h1>
          <p className="text-muted-foreground">
            Manage announcements, events, news, and other content
          </p>
        </div>
      </div>

      <Tabs defaultValue="announcements" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="announcements">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Announcements
                </CardTitle>
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:max-w-sm"
                  />
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Search size={16} className="mr-2" />
                    Search
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Title</th>
                        <th className="text-left p-3">Category</th>
                        <th className="text-left p-3">Date</th>
                        <th className="text-left p-3">Status</th>
                        <th className="text-left p-3">Author</th>
                        <th className="text-left p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {announcements.map((announcement) => (
                        <tr key={announcement.id} className="border-b">
                          <td className="p-3 font-medium">
                            {announcement.title}
                          </td>
                          <td className="p-3">
                            <Badge variant="secondary">
                              {announcement.category}
                            </Badge>
                          </td>
                          <td className="p-3 text-sm text-muted-foreground">
                            {announcement.date}
                          </td>
                          <td className="p-3">
                            <Badge
                              variant={
                                announcement.status === "Published"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {announcement.status}
                            </Badge>
                          </td>
                          <td className="p-3 text-sm">{announcement.author}</td>
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
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Events
                </CardTitle>
                <Button>
                  <PlusCircle size={16} className="mr-2" />
                  New Event
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((event) => (
                  <Card key={event.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <Badge
                          variant={
                            event.status === "Upcoming"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {event.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          {event.date}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          📍 {event.location}
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <Edit size={14} className="mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <Trash2 size={14} className="mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  News Articles
                </CardTitle>
                <Button>
                  <PlusCircle size={16} className="mr-2" />
                  New Article
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {news.map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{article.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {article.date}
                        </span>
                        <Badge
                          variant={
                            article.status === "Published"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {article.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Resources
                </CardTitle>
                <Button>
                  <PlusCircle size={16} className="mr-2" />
                  Upload Resource
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-medium">Student Handbook</p>
                        <p className="text-sm text-muted-foreground">
                          PDF • 2.3 MB
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit size={14} className="mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Trash2 size={14} className="mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <ImageIcon className="h-8 w-8 text-green-600" />
                      <div>
                        <p className="font-medium">Campus Map</p>
                        <p className="text-sm text-muted-foreground">
                          PNG • 1.8 MB
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit size={14} className="mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Trash2 size={14} className="mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-purple-600" />
                      <div>
                        <p className="font-medium">Academic Calendar</p>
                        <p className="text-sm text-muted-foreground">
                          PDF • 856 KB
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit size={14} className="mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Trash2 size={14} className="mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
