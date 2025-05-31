"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Plus,
  Minus,
  Clock,
  Users,
  MapPin,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function RegistrationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);

  const availableCourses = [
    {
      id: 1,
      code: "CS-401",
      name: "Machine Learning",
      instructor: "Prof. Anderson",
      credits: 6,
      schedule: "Mon, Wed 10:00-12:00",
      location: "Room A301",
      enrolled: 45,
      capacity: 60,
      prerequisites: ["CS-301", "MATH-201"],
      description:
        "Introduction to machine learning algorithms and applications.",
    },
    {
      id: 2,
      code: "CS-405",
      name: "Computer Graphics",
      instructor: "Prof. Johnson",
      credits: 6,
      schedule: "Tue, Thu 14:00-16:00",
      location: "Lab B201",
      enrolled: 38,
      capacity: 40,
      prerequisites: ["CS-201", "MATH-101"],
      description: "Fundamentals of computer graphics and visualization.",
    },
    {
      id: 3,
      code: "CS-410",
      name: "Cybersecurity",
      instructor: "Prof. Williams",
      credits: 6,
      schedule: "Mon, Wed 16:00-18:00",
      location: "Room C401",
      enrolled: 52,
      capacity: 55,
      prerequisites: ["CS-315"],
      description: "Network security, cryptography, and ethical hacking.",
    },
    {
      id: 4,
      code: "CS-415",
      name: "Mobile App Development",
      instructor: "Prof. Brown",
      credits: 6,
      schedule: "Tue, Thu 10:00-12:00",
      location: "Lab D301",
      enrolled: 30,
      capacity: 35,
      prerequisites: ["CS-305"],
      description: "iOS and Android application development.",
    },
    {
      id: 5,
      code: "MATH-301",
      name: "Advanced Statistics",
      instructor: "Prof. Davis",
      credits: 6,
      schedule: "Mon, Wed, Fri 09:00-10:00",
      location: "Room E201",
      enrolled: 25,
      capacity: 40,
      prerequisites: ["MATH-201"],
      description: "Advanced statistical methods and data analysis.",
    },
  ];

  const registeredCourses = [
    {
      id: 101,
      code: "CS-301",
      name: "Database Systems",
      instructor: "Prof. Dimitriou",
      credits: 6,
      schedule: "Mon, Wed 09:00-11:00",
      location: "Room A102",
      status: "Enrolled",
    },
    {
      id: 102,
      code: "CS-305",
      name: "Software Engineering",
      instructor: "Prof. Papadopoulos",
      credits: 6,
      schedule: "Tue, Thu 13:00-15:00",
      location: "Room B205",
      status: "Enrolled",
    },
    {
      id: 103,
      code: "CS-315",
      name: "Computer Networks",
      instructor: "Prof. Georgiou",
      credits: 6,
      schedule: "Fri 09:00-13:00",
      location: "Room D401",
      status: "Waitlisted",
    },
  ];

  const registrationPeriods = [
    {
      period: "Early Registration",
      startDate: "2024-03-01",
      endDate: "2024-03-15",
      status: "Completed",
      description: "Priority registration for seniors and honors students",
    },
    {
      period: "Regular Registration",
      startDate: "2024-03-16",
      endDate: "2024-04-15",
      status: "Active",
      description: "Open registration for all eligible students",
    },
    {
      period: "Late Registration",
      startDate: "2024-04-16",
      endDate: "2024-04-30",
      status: "Upcoming",
      description: "Late registration with additional fees",
    },
  ];

  const toggleCourseSelection = (courseId: number) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const getAvailabilityColor = (enrolled: number, capacity: number) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 95) return "text-red-600";
    if (percentage >= 80) return "text-orange-600";
    return "text-green-600";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Enrolled":
        return "bg-green-100 text-green-800";
      case "Waitlisted":
        return "bg-yellow-100 text-yellow-800";
      case "Dropped":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredCourses = availableCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Course Registration</h1>
        <p className="text-muted-foreground">
          Register for courses and manage your academic schedule
        </p>
      </div>

      {/* Registration Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Registration Periods
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {registrationPeriods.map((period, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{period.period}</h3>
                  <Badge
                    variant={
                      period.status === "Active"
                        ? "default"
                        : period.status === "Completed"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {period.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {period.startDate} - {period.endDate}
                </p>
                <p className="text-xs text-muted-foreground">
                  {period.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="available" className="space-y-4">
        <TabsList>
          <TabsTrigger value="available">Available Courses</TabsTrigger>
          <TabsTrigger value="registered">My Courses</TabsTrigger>
          <TabsTrigger value="cart">
            Registration Cart ({selectedCourses.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="available">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle>Available Courses</CardTitle>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-64"
                  />
                  <Button variant="outline">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="border-l-4 border-l-blue-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{course.name}</h3>
                            <Badge variant="outline">{course.code}</Badge>
                            <Badge variant="secondary">
                              {course.credits} Credits
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground">
                            {course.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {course.instructor}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {course.schedule}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {course.location}
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <span
                              className={`text-sm ${getAvailabilityColor(
                                course.enrolled,
                                course.capacity
                              )}`}
                            >
                              {course.enrolled}/{course.capacity} enrolled
                            </span>
                            {course.prerequisites.length > 0 && (
                              <div className="flex items-center gap-1">
                                <AlertCircle className="h-4 w-4 text-orange-500" />
                                <span className="text-sm text-muted-foreground">
                                  Prerequisites:{" "}
                                  {course.prerequisites.join(", ")}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Button
                            variant={
                              selectedCourses.includes(course.id)
                                ? "secondary"
                                : "outline"
                            }
                            size="sm"
                            onClick={() => toggleCourseSelection(course.id)}
                            disabled={course.enrolled >= course.capacity}
                          >
                            {selectedCourses.includes(course.id) ? (
                              <>
                                <Minus className="h-4 w-4 mr-1" />
                                Remove
                              </>
                            ) : (
                              <>
                                <Plus className="h-4 w-4 mr-1" />
                                Add
                              </>
                            )}
                          </Button>

                          {course.enrolled >= course.capacity && (
                            <Button variant="outline" size="sm">
                              Join Waitlist
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="registered">
          <Card>
            <CardHeader>
              <CardTitle>My Registered Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {registeredCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="border-l-4 border-l-green-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{course.name}</h3>
                            <Badge variant="outline">{course.code}</Badge>
                            <Badge variant="secondary">
                              {course.credits} Credits
                            </Badge>
                            <Badge className={getStatusColor(course.status)}>
                              {course.status}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {course.instructor}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {course.schedule}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {course.location}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {course.status === "Enrolled" && (
                            <Button variant="outline" size="sm">
                              Drop Course
                            </Button>
                          )}
                          {course.status === "Waitlisted" && (
                            <Button variant="outline" size="sm">
                              Leave Waitlist
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cart">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Registration Cart</CardTitle>
                {selectedCourses.length > 0 && (
                  <Button>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Register for Selected Courses
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {selectedCourses.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No courses selected. Add courses from the Available Courses
                  tab.
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedCourses.map((courseId) => {
                    const course = availableCourses.find(
                      (c) => c.id === courseId
                    );
                    if (!course) return null;

                    return (
                      <Card
                        key={course.id}
                        className="border-l-4 border-l-primary"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{course.name}</h3>
                                <Badge variant="outline">{course.code}</Badge>
                                <Badge variant="secondary">
                                  {course.credits} Credits
                                </Badge>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {course.instructor}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {course.schedule}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {course.location}
                                </div>
                              </div>
                            </div>

                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleCourseSelection(course.id)}
                            >
                              <Minus className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Credits:</span>
                      <span className="font-bold">
                        {selectedCourses.reduce((total, courseId) => {
                          const course = availableCourses.find(
                            (c) => c.id === courseId
                          );
                          return total + (course?.credits || 0);
                        }, 0)}{" "}
                        Credits
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
