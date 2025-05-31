"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Plus,
  Edit,
  Trash2,
  Users,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";

export default function AcademicManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: 1,
      code: "CS-301",
      name: "Database Systems",
      department: "Computer Science",
      credits: 6,
      semester: "Fall 2024",
      instructor: "Prof. Dimitriou",
      enrolled: 45,
      capacity: 60,
      schedule: "Mon, Wed 09:00-11:00",
      room: "A102",
      status: "Active",
    },
    {
      id: 2,
      code: "CS-305",
      name: "Software Engineering",
      department: "Computer Science",
      credits: 6,
      semester: "Fall 2024",
      instructor: "Prof. Papadopoulos",
      enrolled: 38,
      capacity: 40,
      schedule: "Tue, Thu 13:00-15:00",
      room: "B205",
      status: "Active",
    },
    {
      id: 3,
      code: "BUS-201",
      name: "Marketing Fundamentals",
      department: "Business Administration",
      credits: 6,
      semester: "Fall 2024",
      instructor: "Prof. Nikolaou",
      enrolled: 52,
      capacity: 55,
      schedule: "Mon, Wed 14:00-16:00",
      room: "C301",
      status: "Active",
    },
    {
      id: 4,
      code: "ECON-101",
      name: "Microeconomics",
      department: "Economics",
      credits: 6,
      semester: "Fall 2024",
      instructor: "Prof. Georgiou",
      enrolled: 30,
      capacity: 45,
      schedule: "Tue, Thu 10:00-12:00",
      room: "D201",
      status: "Active",
    },
  ];

  const programs = [
    {
      id: 1,
      name: "Computer Science",
      department: "School of Engineering",
      degree: "Bachelor",
      duration: "4 years",
      totalCredits: 240,
      students: 450,
      status: "Active",
      coordinator: "Prof. Dimitriou",
    },
    {
      id: 2,
      name: "Business Administration",
      department: "School of Business",
      degree: "Bachelor",
      duration: "4 years",
      totalCredits: 240,
      students: 380,
      status: "Active",
      coordinator: "Prof. Papadopoulos",
    },
    {
      id: 3,
      name: "Economics",
      department: "School of Economics",
      degree: "Bachelor",
      duration: "4 years",
      totalCredits: 240,
      students: 320,
      status: "Active",
      coordinator: "Prof. Nikolaou",
    },
    {
      id: 4,
      name: "Data Science",
      department: "School of Engineering",
      degree: "Master",
      duration: "2 years",
      totalCredits: 120,
      students: 85,
      status: "Active",
      coordinator: "Prof. Georgiou",
    },
  ];

  const departments = [
    {
      id: 1,
      name: "Computer Science",
      school: "School of Engineering",
      head: "Prof. Dimitriou",
      faculty: 12,
      students: 450,
      programs: 2,
      established: "1995",
    },
    {
      id: 2,
      name: "Business Administration",
      school: "School of Business",
      head: "Prof. Papadopoulos",
      faculty: 15,
      students: 380,
      programs: 3,
      established: "1990",
    },
    {
      id: 3,
      name: "Economics",
      school: "School of Economics",
      head: "Prof. Nikolaou",
      faculty: 10,
      students: 320,
      programs: 2,
      established: "1985",
    },
  ];

  const semesters = [
    {
      id: 1,
      name: "Fall 2024",
      startDate: "2024-09-15",
      endDate: "2024-12-20",
      status: "Current",
      courses: 45,
      students: 1250,
    },
    {
      id: 2,
      name: "Spring 2024",
      startDate: "2024-02-15",
      endDate: "2024-06-15",
      status: "Completed",
      courses: 42,
      students: 1180,
    },
    {
      id: 3,
      name: "Spring 2025",
      startDate: "2025-02-15",
      endDate: "2025-06-15",
      status: "Planning",
      courses: 0,
      students: 0,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
      case "Current":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      case "Planning":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCapacityColor = (enrolled: number, capacity: number) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 90) return "text-red-600";
    if (percentage >= 75) return "text-orange-600";
    return "text-green-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Academic Management</h1>
          <p className="text-muted-foreground">
            Manage courses, programs, departments, and academic structure
          </p>
        </div>
      </div>

      {/* Academic Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Active Courses</p>
                <p className="text-2xl font-bold">{courses.length}</p>
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
                  Academic Programs
                </p>
                <p className="text-2xl font-bold">{programs.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Departments</p>
                <p className="text-2xl font-bold">{departments.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Current Semester
                </p>
                <p className="text-2xl font-bold">Fall 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="semesters">Semesters</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle>Course Management</CardTitle>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-64"
                  />
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="bus">Business</SelectItem>
                      <SelectItem value="econ">Economics</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Course
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course) => (
                  <Card
                    key={course.id}
                    className="border-l-4 border-l-blue-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
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

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-muted-foreground">
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
                              Room {course.room}
                            </div>
                            <div>Department: {course.department}</div>
                          </div>

                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-muted-foreground">
                              Enrollment:
                            </span>
                            <span
                              className={getCapacityColor(
                                course.enrolled,
                                course.capacity
                              )}
                            >
                              {course.enrolled}/{course.capacity} students
                            </span>
                            <span className="text-muted-foreground">
                              Semester: {course.semester}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 mr-1" />
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

        <TabsContent value="programs">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Academic Programs</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Program
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((program) => (
                  <Card
                    key={program.id}
                    className="border-l-4 border-l-green-500"
                  >
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">
                            {program.name}
                          </h3>
                          <Badge className={getStatusColor(program.status)}>
                            {program.status}
                          </Badge>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Department:
                            </span>
                            <span>{program.department}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Degree:
                            </span>
                            <span>{program.degree}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Duration:
                            </span>
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Total Credits:
                            </span>
                            <span>{program.totalCredits}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Enrolled Students:
                            </span>
                            <span className="font-medium">
                              {program.students}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Coordinator:
                            </span>
                            <span>{program.coordinator}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            View Curriculum
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

        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Department Management</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Department
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departments.map((department) => (
                  <Card
                    key={department.id}
                    className="border-l-4 border-l-purple-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">
                            {department.name}
                          </h3>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">
                                School:{" "}
                              </span>
                              <span className="font-medium">
                                {department.school}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Department Head:{" "}
                              </span>
                              <span className="font-medium">
                                {department.head}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Faculty Members:{" "}
                              </span>
                              <span className="font-medium">
                                {department.faculty}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Students:{" "}
                              </span>
                              <span className="font-medium">
                                {department.students}
                              </span>
                            </div>
                          </div>

                          <div className="flex gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">
                                Programs:{" "}
                              </span>
                              <span className="font-medium">
                                {department.programs}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Established:{" "}
                              </span>
                              <span className="font-medium">
                                {department.established}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View Details
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

        <TabsContent value="semesters">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Semester Management</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Semester
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {semesters.map((semester) => (
                  <Card
                    key={semester.id}
                    className="border-l-4 border-l-orange-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">
                              {semester.name}
                            </h3>
                            <Badge className={getStatusColor(semester.status)}>
                              {semester.status}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">
                                Start Date:{" "}
                              </span>
                              <span className="font-medium">
                                {semester.startDate}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                End Date:{" "}
                              </span>
                              <span className="font-medium">
                                {semester.endDate}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Courses:{" "}
                              </span>
                              <span className="font-medium">
                                {semester.courses}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Students:{" "}
                              </span>
                              <span className="font-medium">
                                {semester.students}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View Schedule
                          </Button>
                          {semester.status === "Planning" && (
                            <Button variant="outline" size="sm">
                              Activate
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
      </Tabs>
    </div>
  );
}
