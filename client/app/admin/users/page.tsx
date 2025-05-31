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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Users,
  Search,
  Plus,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  const students = [
    {
      id: 1,
      name: "Maria Papadopoulou",
      email: "maria.papadopoulou@student.uom.gr",
      studentId: "20210134",
      program: "Computer Science",
      year: "3rd Year",
      status: "Active",
      gpa: 8.2,
      enrollmentDate: "2021-09-15",
      phone: "+30 694 123 4567",
      address: "Thessaloniki, Greece",
    },
    {
      id: 2,
      name: "Dimitris Nikolaou",
      email: "dimitris.nikolaou@student.uom.gr",
      studentId: "20210089",
      program: "Business Administration",
      year: "2nd Year",
      status: "Active",
      gpa: 7.8,
      enrollmentDate: "2021-09-15",
      phone: "+30 694 234 5678",
      address: "Athens, Greece",
    },
    {
      id: 3,
      name: "Elena Georgiou",
      email: "elena.georgiou@student.uom.gr",
      studentId: "20200156",
      program: "Economics",
      year: "4th Year",
      status: "Probation",
      gpa: 6.5,
      enrollmentDate: "2020-09-15",
      phone: "+30 694 345 6789",
      address: "Patras, Greece",
    },
    {
      id: 4,
      name: "Kostas Stavros",
      email: "kostas.stavros@student.uom.gr",
      studentId: "20220078",
      program: "Computer Science",
      year: "1st Year",
      status: "Active",
      gpa: 9.1,
      enrollmentDate: "2022-09-15",
      phone: "+30 694 456 7890",
      address: "Thessaloniki, Greece",
    },
  ];

  const faculty = [
    {
      id: 1,
      name: "Prof. Ioannis Dimitriou",
      email: "i.dimitriou@uom.gr",
      employeeId: "FAC001",
      department: "Computer Science",
      position: "Professor",
      status: "Active",
      hireDate: "2010-09-01",
      phone: "+30 2310 891 234",
      office: "Building A, Room 301",
      specialization: "Database Systems",
    },
    {
      id: 2,
      name: "Dr. Maria Papadopoulos",
      email: "m.papadopoulos@uom.gr",
      employeeId: "FAC002",
      department: "Computer Science",
      position: "Associate Professor",
      status: "Active",
      hireDate: "2015-02-15",
      phone: "+30 2310 891 235",
      office: "Building A, Room 302",
      specialization: "Software Engineering",
    },
    {
      id: 3,
      name: "Dr. Nikos Georgiou",
      email: "n.georgiou@uom.gr",
      employeeId: "FAC003",
      department: "Computer Science",
      position: "Assistant Professor",
      status: "Active",
      hireDate: "2018-09-01",
      phone: "+30 2310 891 236",
      office: "Building A, Room 303",
      specialization: "Computer Networks",
    },
    {
      id: 4,
      name: "Prof. Anna Nikolaou",
      email: "a.nikolaou@uom.gr",
      employeeId: "FAC004",
      department: "Business Administration",
      position: "Professor",
      status: "On Leave",
      hireDate: "2008-03-01",
      phone: "+30 2310 891 237",
      office: "Building B, Room 201",
      specialization: "Strategic Management",
    },
  ];

  const staff = [
    {
      id: 1,
      name: "Sophia Katsarou",
      email: "s.katsarou@uom.gr",
      employeeId: "STF001",
      department: "Student Services",
      position: "Academic Advisor",
      status: "Active",
      hireDate: "2019-06-01",
      phone: "+30 2310 891 300",
      office: "Student Center, Room 101",
    },
    {
      id: 2,
      name: "Petros Alexandrou",
      email: "p.alexandrou@uom.gr",
      employeeId: "STF002",
      department: "IT Services",
      position: "System Administrator",
      status: "Active",
      hireDate: "2017-01-15",
      phone: "+30 2310 891 400",
      office: "IT Building, Room 001",
    },
    {
      id: 3,
      name: "Christina Vasileiou",
      email: "c.vasileiou@uom.gr",
      employeeId: "STF003",
      department: "Library",
      position: "Head Librarian",
      status: "Active",
      hireDate: "2012-08-01",
      phone: "+30 2310 891 500",
      office: "Library, Room 201",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Probation":
        return "bg-yellow-100 text-yellow-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      case "On Leave":
        return "bg-blue-100 text-blue-800";
      case "Graduated":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getGPAColor = (gpa: number) => {
    if (gpa >= 8.5) return "text-green-600";
    if (gpa >= 7.0) return "text-blue-600";
    if (gpa >= 6.0) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-muted-foreground">
            Manage students, faculty, and staff accounts
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold">{students.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <UserCheck className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Faculty Members</p>
                <p className="text-2xl font-bold">{faculty.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Staff Members</p>
                <p className="text-2xl font-bold">{staff.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <UserX className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">Inactive Users</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="students" className="space-y-4">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle>Student Management</CardTitle>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-64"
                  />
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="probation">Probation</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {students.map((student) => (
                  <Card
                    key={student.id}
                    className="border-l-4 border-l-blue-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{student.name}</h3>
                              <Badge className={getStatusColor(student.status)}>
                                {student.status}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                {student.email}
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="h-4 w-4" />
                                {student.phone}
                              </div>
                              <div>Student ID: {student.studentId}</div>
                              <div>Program: {student.program}</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                              <div>
                                <span className="text-muted-foreground">
                                  Year:{" "}
                                </span>
                                <span className="font-medium">
                                  {student.year}
                                </span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">
                                  GPA:{" "}
                                </span>
                                <span
                                  className={`font-bold ${getGPAColor(
                                    student.gpa
                                  )}`}
                                >
                                  {student.gpa}/10
                                </span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">
                                  Enrolled:{" "}
                                </span>
                                <span className="font-medium">
                                  {student.enrollmentDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View Profile
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

        <TabsContent value="faculty">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle>Faculty Management</CardTitle>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search faculty..."
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
                {faculty.map((member) => (
                  <Card
                    key={member.id}
                    className="border-l-4 border-l-green-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{member.name}</h3>
                              <Badge className={getStatusColor(member.status)}>
                                {member.status}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                {member.email}
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="h-4 w-4" />
                                {member.phone}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {member.office}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                              <div>
                                <span className="text-muted-foreground">
                                  Department:{" "}
                                </span>
                                <span className="font-medium">
                                  {member.department}
                                </span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">
                                  Position:{" "}
                                </span>
                                <span className="font-medium">
                                  {member.position}
                                </span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">
                                  Specialization:{" "}
                                </span>
                                <span className="font-medium">
                                  {member.specialization}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            Courses
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

        <TabsContent value="staff">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle>Staff Management</CardTitle>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search staff..."
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
                {staff.map((member) => (
                  <Card
                    key={member.id}
                    className="border-l-4 border-l-purple-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{member.name}</h3>
                              <Badge className={getStatusColor(member.status)}>
                                {member.status}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                {member.email}
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="h-4 w-4" />
                                {member.phone}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {member.office}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                              <div>
                                <span className="text-muted-foreground">
                                  Department:{" "}
                                </span>
                                <span className="font-medium">
                                  {member.department}
                                </span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">
                                  Position:{" "}
                                </span>
                                <span className="font-medium">
                                  {member.position}
                                </span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">
                                  Hire Date:{" "}
                                </span>
                                <span className="font-medium">
                                  {member.hireDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View Profile
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
      </Tabs>
    </div>
  );
}
