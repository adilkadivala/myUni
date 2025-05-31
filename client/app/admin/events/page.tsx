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
import {
  Calendar,
  Plus,
  Edit,
  Trash2,
  MapPin,
  Clock,
  Users,
  Eye,
} from "lucide-react";

export default function EventsPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    capacity: "",
    registrationRequired: false,
  });

  const events = [
    {
      id: 1,
      title: "Orientation Week 2024",
      description:
        "Welcome new students to the university with a week-long orientation program including campus tours, academic sessions, and social activities.",
      date: "2024-09-02",
      time: "09:00",
      endDate: "2024-09-06",
      endTime: "17:00",
      location: "Main Campus",
      category: "Academic",
      capacity: 500,
      registered: 387,
      status: "Upcoming",
      organizer: "Student Services",
    },
    {
      id: 2,
      title: "Career Fair 2024",
      description:
        "Annual career fair featuring top employers from various industries. Students can network, submit resumes, and explore internship and job opportunities.",
      date: "2024-10-15",
      time: "10:00",
      endDate: "2024-10-15",
      endTime: "16:00",
      location: "Student Center",
      category: "Career",
      capacity: 300,
      registered: 245,
      status: "Registration Open",
      organizer: "Career Services",
    },
    {
      id: 3,
      title: "Research Symposium",
      description:
        "Annual research symposium showcasing student and faculty research projects across all departments.",
      date: "2024-11-20",
      time: "13:00",
      endDate: "2024-11-20",
      endTime: "18:00",
      location: "Conference Hall",
      category: "Academic",
      capacity: 200,
      registered: 156,
      status: "Registration Open",
      organizer: "Research Office",
    },
    {
      id: 4,
      title: "Alumni Networking Event",
      description:
        "Connect with successful alumni from various graduating classes and industries. Great opportunity for mentorship and career guidance.",
      date: "2024-12-05",
      time: "18:00",
      endDate: "2024-12-05",
      endTime: "21:00",
      location: "Alumni Hall",
      category: "Networking",
      capacity: 150,
      registered: 89,
      status: "Registration Open",
      organizer: "Alumni Relations",
    },
    {
      id: 5,
      title: "Spring Festival",
      description:
        "Annual spring festival with cultural performances, food stalls, games, and entertainment for the entire university community.",
      date: "2025-03-15",
      time: "12:00",
      endDate: "2025-03-15",
      endTime: "20:00",
      location: "University Grounds",
      category: "Cultural",
      capacity: 1000,
      registered: 0,
      status: "Planning",
      organizer: "Student Activities",
    },
  ];

  const categories = [
    "Academic",
    "Career",
    "Cultural",
    "Networking",
    "Sports",
    "Social",
    "Workshop",
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      case "Registration Open":
        return "bg-green-100 text-green-800";
      case "Registration Closed":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      case "Planning":
        return "bg-purple-100 text-purple-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCapacityColor = (registered: number, capacity: number) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90) return "text-red-600";
    if (percentage >= 75) return "text-orange-600";
    return "text-green-600";
  };

  const handleCreateEvent = () => {
    // Handle event creation logic here
    console.log("Creating event:", newEvent);
    setIsCreating(false);
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      category: "",
      capacity: "",
      registrationRequired: false,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Event Management</h1>
          <p className="text-muted-foreground">
            Create and manage university events
          </p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Event
        </Button>
      </div>

      {/* Event Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Events</p>
                <p className="text-2xl font-bold">{events.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Registrations
                </p>
                <p className="text-2xl font-bold">
                  {events.reduce((sum, event) => sum + event.registered, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Upcoming Events</p>
                <p className="text-2xl font-bold">
                  {events.filter((e) => e.status === "Upcoming").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Active Registrations
                </p>
                <p className="text-2xl font-bold">
                  {
                    events.filter((e) => e.status === "Registration Open")
                      .length
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Event Form */}
      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Event</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event-title">Event Title</Label>
                  <Input
                    id="event-title"
                    placeholder="Event title"
                    value={newEvent.title}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, title: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-category">Category</Label>
                  <Select
                    value={newEvent.category}
                    onValueChange={(value) =>
                      setNewEvent({ ...newEvent, category: value })
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
                <Label htmlFor="event-description">Description</Label>
                <Textarea
                  id="event-description"
                  placeholder="Event description"
                  className="min-h-[100px]"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event-date">Date</Label>
                  <Input
                    id="event-date"
                    type="date"
                    value={newEvent.date}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, date: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-time">Time</Label>
                  <Input
                    id="event-time"
                    type="time"
                    value={newEvent.time}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, time: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-capacity">Capacity</Label>
                  <Input
                    id="event-capacity"
                    type="number"
                    placeholder="Maximum attendees"
                    value={newEvent.capacity}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, capacity: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-location">Location</Label>
                <Input
                  id="event-location"
                  placeholder="Event location"
                  value={newEvent.location}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, location: e.target.value })
                  }
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleCreateEvent}>Create Event</Button>
                <Button variant="outline" onClick={() => setIsCreating(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Events List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <CardTitle>All Events</CardTitle>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search events..."
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
            {events.map((event) => (
              <Card key={event.id} className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">
                            {event.title}
                          </h3>
                          <Badge variant="outline">{event.category}</Badge>
                          <Badge className={getStatusColor(event.status)}>
                            {event.status}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                          <div>Organizer: {event.organizer}</div>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">
                            Registration:
                          </span>
                          <span
                            className={getCapacityColor(
                              event.registered,
                              event.capacity
                            )}
                          >
                            {event.registered}/{event.capacity} attendees
                          </span>
                          <span className="text-muted-foreground">
                            (
                            {(
                              (event.registered / event.capacity) *
                              100
                            ).toFixed(1)}
                            % full)
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Users className="h-4 w-4 mr-1" />
                          Attendees
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
