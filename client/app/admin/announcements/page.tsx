"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  MessageSquare,
  Plus,
  Edit,
  Trash2,
  Send,
  Eye,
  Users,
  AlertCircle,
} from "lucide-react";

export default function AnnouncementsPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    category: "",
    priority: "medium",
    targetAudience: "all",
    publishNow: true,
    scheduledDate: "",
  });

  const announcements = [
    {
      id: 1,
      title: "Course Registration Opens for Spring 2025",
      content:
        "Registration for Spring 2025 semester will begin on December 1st, 2024. Students are advised to meet with their academic advisors before registration.",
      category: "Academic",
      priority: "high",
      targetAudience: "Students",
      author: "Academic Office",
      publishDate: "2024-11-15",
      status: "Published",
      views: 1247,
      likes: 89,
    },
    {
      id: 2,
      title: "Library Hours Extended During Exam Period",
      content:
        "The university library will extend its operating hours during the final exam period. New hours: Monday-Sunday 7:00 AM - 2:00 AM.",
      category: "Facilities",
      priority: "medium",
      targetAudience: "All",
      author: "Library Services",
      publishDate: "2024-11-10",
      status: "Published",
      views: 892,
      likes: 156,
    },
    {
      id: 3,
      title: "Guest Lecture: Future of Artificial Intelligence",
      content:
        "Join us for an exciting guest lecture by Dr. Sarah Johnson on 'The Future of Artificial Intelligence in Education' on November 25th at 2:00 PM in the main auditorium.",
      category: "Events",
      priority: "medium",
      targetAudience: "Faculty & Students",
      author: "Computer Science Department",
      publishDate: "2024-11-08",
      status: "Published",
      views: 634,
      likes: 78,
    },
    {
      id: 4,
      title: "Campus Maintenance Schedule",
      content:
        "Scheduled maintenance will occur in Building A from November 20-22. Classes will be relocated to alternative venues during this period.",
      category: "Maintenance",
      priority: "high",
      targetAudience: "All",
      author: "Facilities Management",
      publishDate: "2024-11-05",
      status: "Published",
      views: 1156,
      likes: 23,
    },
    {
      id: 5,
      title: "New Scholarship Program Available",
      content:
        "We are pleased to announce a new merit-based scholarship program for outstanding students. Applications are now open and due by December 15th.",
      category: "Financial Aid",
      priority: "medium",
      targetAudience: "Students",
      author: "Financial Aid Office",
      publishDate: "2024-11-01",
      status: "Draft",
      views: 0,
      likes: 0,
    },
  ];

  const categories = [
    "Academic",
    "Events",
    "Facilities",
    "Financial Aid",
    "Maintenance",
    "General",
  ];
  const priorities = ["low", "medium", "high", "urgent"];
  const audiences = [
    "All",
    "Students",
    "Faculty",
    "Staff",
    "Faculty & Students",
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      case "Scheduled":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleCreateAnnouncement = () => {
    // Handle announcement creation logic here
    console.log("Creating announcement:", newAnnouncement);
    setIsCreating(false);
    setNewAnnouncement({
      title: "",
      content: "",
      category: "",
      priority: "medium",
      targetAudience: "all",
      publishNow: true,
      scheduledDate: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Announcements</h1>
          <p className="text-muted-foreground">
            Create and manage university announcements
          </p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Announcement
        </Button>
      </div>

      {/* Announcement Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Announcements
                </p>
                <p className="text-2xl font-bold">{announcements.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Eye className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold">
                  {announcements
                    .reduce((sum, ann) => sum + ann.views, 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Send className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Published</p>
                <p className="text-2xl font-bold">
                  {announcements.filter((a) => a.status === "Published").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">High Priority</p>
                <p className="text-2xl font-bold">
                  {announcements.filter((a) => a.priority === "high").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Announcement Form */}
      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Announcement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Announcement title"
                    value={newAnnouncement.title}
                    onChange={(e) =>
                      setNewAnnouncement({
                        ...newAnnouncement,
                        title: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={newAnnouncement.category}
                    onValueChange={(value) =>
                      setNewAnnouncement({
                        ...newAnnouncement,
                        category: value,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Announcement content"
                  className="min-h-[120px]"
                  value={newAnnouncement.content}
                  onChange={(e) =>
                    setNewAnnouncement({
                      ...newAnnouncement,
                      content: e.target.value,
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    value={newAnnouncement.priority}
                    onValueChange={(value) =>
                      setNewAnnouncement({
                        ...newAnnouncement,
                        priority: value,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorities.map((priority) => (
                        <SelectItem key={priority} value={priority}>
                          {priority.charAt(0).toUpperCase() + priority.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="audience">Target Audience</Label>
                  <Select
                    value={newAnnouncement.targetAudience}
                    onValueChange={(value) =>
                      setNewAnnouncement({
                        ...newAnnouncement,
                        targetAudience: value,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      {audiences.map((audience) => (
                        <SelectItem key={audience} value={audience}>
                          {audience}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scheduled-date">
                    Scheduled Date (Optional)
                  </Label>
                  <Input
                    id="scheduled-date"
                    type="datetime-local"
                    value={newAnnouncement.scheduledDate}
                    onChange={(e) =>
                      setNewAnnouncement({
                        ...newAnnouncement,
                        scheduledDate: e.target.value,
                      })
                    }
                    disabled={newAnnouncement.publishNow}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="publish-now"
                  checked={newAnnouncement.publishNow}
                  onCheckedChange={(checked) =>
                    setNewAnnouncement({
                      ...newAnnouncement,
                      publishNow: checked,
                    })
                  }
                />
                <Label htmlFor="publish-now">Publish immediately</Label>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleCreateAnnouncement}>
                  <Send className="h-4 w-4 mr-2" />
                  {newAnnouncement.publishNow ? "Publish" : "Schedule"}
                </Button>
                <Button variant="outline" onClick={() => setIsCreating(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Announcements List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <CardTitle>All Announcements</CardTitle>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search announcements..."
                className="w-full sm:w-64"
              />
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card
                key={announcement.id}
                className="border-l-4 border-l-blue-500"
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">
                            {announcement.title}
                          </h3>
                          <Badge
                            className={getPriorityColor(announcement.priority)}
                          >
                            {announcement.priority}
                          </Badge>
                          <Badge
                            className={getStatusColor(announcement.status)}
                          >
                            {announcement.status}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {announcement.content}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-muted-foreground">
                          <div>Category: {announcement.category}</div>
                          <div>Audience: {announcement.targetAudience}</div>
                          <div>Author: {announcement.author}</div>
                          <div>Published: {announcement.publishDate}</div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {announcement.views} views
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {announcement.likes} likes
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
