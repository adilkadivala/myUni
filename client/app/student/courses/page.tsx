"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Book, Clock, User, FileText, Calendar } from "lucide-react";

export default function CoursesPage() {
  const currentCourses = [
    {
      id: 1,
      code: "CS-301",
      name: "Web Development",
      instructor: "Prof. Dimitriou",
      credits: 6,
      progress: 60,
      grade: "8.5",
      schedule: "Mon, Wed 09:00-11:00",
      room: "A102",
    },
    {
      id: 2,
      code: "CS-305",
      name: "Software Engineering",
      instructor: "Prof. Papadopoulos",
      credits: 6,
      progress: 45,
      grade: "8.8",
      schedule: "Tue, Thu 13:00-15:00",
      room: "B205",
    },
    {
      id: 3,
      code: "CS-310",
      name: "Database Systems",
      instructor: "Prof. Nikolaou",
      credits: 6,
      progress: 70,
      grade: "8.2",
      schedule: "Mon, Wed 15:00-17:00",
      room: "C301",
    },
    {
      id: 4,
      code: "CS-315",
      name: "Computer Networks",
      instructor: "Prof. Georgiou",
      credits: 6,
      progress: 55,
      grade: "7.5",
      schedule: "Fri 09:00-13:00",
      room: "D401",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My Courses</h1>
        <p className="text-muted-foreground">
          Current semester courses and progress
        </p>
      </div>

      {/* Course Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Book className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Enrolled Courses
                </p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Credits</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Progress</p>
                <p className="text-2xl font-bold">58%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Courses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {course.code} • {course.credits} Credits
                  </p>
                </div>
                <Badge variant="secondary">{course.grade}/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {course.instructor}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {course.schedule}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Room {course.room}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Course Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Materials
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Assignments
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
