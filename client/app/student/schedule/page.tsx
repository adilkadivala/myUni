"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";

export default function SchedulePage() {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const weeklySchedule = [
    {
      day: "Monday",
      date: "2024-01-15",
      classes: [
        {
          id: 1,
          course: "Database Systems",
          code: "CS-301",
          time: "09:00 - 11:00",
          location: "Room A102",
          instructor: "Prof. Dimitriou",
          type: "Lecture",
        },
        {
          id: 2,
          course: "Software Engineering",
          code: "CS-305",
          time: "15:00 - 17:00",
          location: "Lab C301",
          instructor: "Prof. Papadopoulos",
          type: "Lab",
        },
      ],
    },
    {
      day: "Tuesday",
      date: "2024-01-16",
      classes: [
        {
          id: 3,
          course: "Algorithms",
          code: "CS-310",
          time: "10:00 - 12:00",
          location: "Room B205",
          instructor: "Prof. Nikolaou",
          type: "Lecture",
        },
        {
          id: 4,
          course: "Computer Networks",
          code: "CS-315",
          time: "14:00 - 16:00",
          location: "Room D401",
          instructor: "Prof. Georgiou",
          type: "Lecture",
        },
      ],
    },
    {
      day: "Wednesday",
      date: "2024-01-17",
      classes: [
        {
          id: 5,
          course: "Database Systems",
          code: "CS-301",
          time: "09:00 - 11:00",
          location: "Room A102",
          instructor: "Prof. Dimitriou",
          type: "Lecture",
        },
        {
          id: 6,
          course: "Web Development",
          code: "CS-320",
          time: "13:00 - 15:00",
          location: "Lab B301",
          instructor: "Prof. Stavros",
          type: "Lab",
        },
      ],
    },
    {
      day: "Thursday",
      date: "2024-01-18",
      classes: [
        {
          id: 7,
          course: "Algorithms",
          code: "CS-310",
          time: "10:00 - 12:00",
          location: "Room B205",
          instructor: "Prof. Nikolaou",
          type: "Lecture",
        },
        {
          id: 8,
          course: "Software Engineering",
          code: "CS-305",
          time: "16:00 - 18:00",
          location: "Room C201",
          instructor: "Prof. Papadopoulos",
          type: "Seminar",
        },
      ],
    },
    {
      day: "Friday",
      date: "2024-01-19",
      classes: [
        {
          id: 9,
          course: "Computer Networks",
          code: "CS-315",
          time: "09:00 - 13:00",
          location: "Lab D301",
          instructor: "Prof. Georgiou",
          type: "Lab",
        },
      ],
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Database Project Presentation",
      course: "CS-301",
      date: "2024-01-22",
      time: "14:00",
      location: "Room A102",
      type: "Presentation",
    },
    {
      id: 2,
      title: "Algorithms Midterm Exam",
      course: "CS-310",
      date: "2024-01-25",
      time: "10:00",
      location: "Exam Hall 1",
      type: "Exam",
    },
    {
      id: 3,
      title: "Software Engineering Review",
      course: "CS-305",
      date: "2024-01-28",
      time: "15:00",
      location: "Room C201",
      type: "Review",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lecture":
        return "bg-blue-100 text-blue-800";
      case "Lab":
        return "bg-green-100 text-green-800";
      case "Seminar":
        return "bg-purple-100 text-purple-800";
      case "Exam":
        return "bg-red-100 text-red-800";
      case "Presentation":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">My Schedule</h1>
          <p className="text-muted-foreground">
            View your weekly schedule and upcoming events
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Schedule
        </Button>
      </div>

      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="weekly">Weekly View</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Weekly Schedule
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">
                    Week of Jan 15, 2024
                  </span>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {weeklySchedule.map((day) => (
                  <div key={day.day} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{day.day}</h3>
                      <span className="text-sm text-muted-foreground">
                        {day.date}
                      </span>
                    </div>

                    {day.classes.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {day.classes.map((classItem) => (
                          <Card
                            key={classItem.id}
                            className="border-l-4 border-l-primary"
                          >
                            <CardContent className="p-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-medium">
                                    {classItem.course}
                                  </h4>
                                  <Badge
                                    className={getTypeColor(classItem.type)}
                                  >
                                    {classItem.type}
                                  </Badge>
                                </div>

                                <p className="text-sm text-muted-foreground">
                                  {classItem.code}
                                </p>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {classItem.time}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {classItem.location}
                                  </div>
                                </div>

                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <User className="h-4 w-4" />
                                  {classItem.instructor}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No classes scheduled for this day
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="border-l-4 border-l-orange-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{event.title}</h4>
                            <Badge className={getTypeColor(event.type)}>
                              {event.type}
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground">
                            {event.course}
                          </p>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                          </div>
                        </div>

                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">
                  Calendar component would be implemented here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
