"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingUp, BarChart3, FileText, Download, Award } from "lucide-react";

export default function GradesPage() {
  const [selectedSemester, setSelectedSemester] = useState("current");

  const currentGrades = [
    {
      id: 1,
      course: "Database Systems",
      code: "CS-301",
      instructor: "Prof. Dimitriou",
      assignments: [
        { name: "Assignment 1", grade: 8.5, maxGrade: 10, weight: 15 },
        { name: "Midterm Exam", grade: 7.8, maxGrade: 10, weight: 30 },
        { name: "Project", grade: 9.2, maxGrade: 10, weight: 25 },
        { name: "Final Exam", grade: null, maxGrade: 10, weight: 30 },
      ],
      currentGrade: 8.2,
      credits: 6,
    },
    {
      id: 2,
      course: "Software Engineering",
      code: "CS-305",
      instructor: "Prof. Papadopoulos",
      assignments: [
        { name: "Assignment 1", grade: 9.0, maxGrade: 10, weight: 20 },
        { name: "Assignment 2", grade: 8.7, maxGrade: 10, weight: 20 },
        { name: "Midterm Exam", grade: 8.5, maxGrade: 10, weight: 25 },
        { name: "Project", grade: 9.1, maxGrade: 10, weight: 35 },
      ],
      currentGrade: 8.8,
      credits: 6,
    },
    {
      id: 3,
      course: "Computer Networks",
      code: "CS-315",
      instructor: "Prof. Georgiou",
      assignments: [
        { name: "Lab 1", grade: 7.5, maxGrade: 10, weight: 15 },
        { name: "Lab 2", grade: 8.0, maxGrade: 10, weight: 15 },
        { name: "Midterm Exam", grade: 7.2, maxGrade: 10, weight: 30 },
        { name: "Final Project", grade: null, maxGrade: 10, weight: 40 },
      ],
      currentGrade: 7.5,
      credits: 6,
    },
    {
      id: 4,
      course: "Web Development",
      code: "CS-320",
      instructor: "Prof. Stavros",
      assignments: [
        { name: "Project 1", grade: 9.5, maxGrade: 10, weight: 25 },
        { name: "Project 2", grade: 8.8, maxGrade: 10, weight: 25 },
        { name: "Portfolio", grade: 9.0, maxGrade: 10, weight: 50 },
      ],
      currentGrade: 9.1,
      credits: 6,
    },
  ];

  const semesterHistory = [
    {
      semester: "Fall 2023",
      gpa: 8.4,
      credits: 24,
      courses: [
        { course: "Data Structures", grade: 8.5, credits: 6 },
        { course: "Algorithms", grade: 8.0, credits: 6 },
        { course: "Computer Architecture", grade: 7.8, credits: 6 },
        { course: "Mathematics III", grade: 9.2, credits: 6 },
      ],
    },
    {
      semester: "Spring 2023",
      gpa: 8.1,
      credits: 24,
      courses: [
        { course: "Operating Systems", grade: 7.5, credits: 6 },
        { course: "Database Design", grade: 8.8, credits: 6 },
        { course: "Software Engineering I", grade: 8.2, credits: 6 },
        { course: "Statistics", grade: 7.9, credits: 6 },
      ],
    },
  ];

  const getGradeColor = (grade: number) => {
    if (grade >= 9) return "text-green-600";
    if (grade >= 8) return "text-blue-600";
    if (grade >= 7) return "text-yellow-600";
    if (grade >= 6) return "text-orange-600";
    return "text-red-600";
  };

  const getGradeBadgeVariant = (grade: number) => {
    if (grade >= 9) return "default";
    if (grade >= 8) return "secondary";
    if (grade >= 7) return "outline";
    return "destructive";
  };

  const calculateCurrentGPA = () => {
    const totalPoints = currentGrades.reduce(
      (sum, course) => sum + course.currentGrade * course.credits,
      0
    );
    const totalCredits = currentGrades.reduce(
      (sum, course) => sum + course.credits,
      0
    );
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">My Grades</h1>
          <p className="text-muted-foreground">
            Track your academic performance and progress
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Grades
        </Button>
      </div>

      {/* GPA Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Current GPA</p>
                <p className="text-2xl font-bold">{calculateCurrentGPA()}/10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Cumulative GPA</p>
                <p className="text-2xl font-bold">8.2/10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Credits This Semester
                </p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">Class Rank</p>
                <p className="text-2xl font-bold">15/120</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current" className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Current Semester</TabsTrigger>
          <TabsTrigger value="history">Grade History</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <div className="space-y-6">
            {currentGrades.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.course}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {course.code} • {course.instructor} • {course.credits}{" "}
                        Credits
                      </p>
                    </div>
                    <Badge
                      className={getGradeColor(course.currentGrade)}
                      variant={getGradeBadgeVariant(course.currentGrade)}
                    >
                      {course.currentGrade}/10
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      {course.assignments.map((assignment, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-muted rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">
                                {assignment.name}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {assignment.weight}% weight
                              </span>
                            </div>
                            {assignment.grade !== null && (
                              <div className="mt-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>
                                    Score: {assignment.grade}/
                                    {assignment.maxGrade}
                                  </span>
                                  <span>
                                    {(
                                      (assignment.grade / assignment.maxGrade) *
                                      100
                                    ).toFixed(1)}
                                    %
                                  </span>
                                </div>
                                <Progress
                                  value={
                                    (assignment.grade / assignment.maxGrade) *
                                    100
                                  }
                                  className="h-2 mt-1"
                                />
                              </div>
                            )}
                          </div>
                          {assignment.grade === null && (
                            <Badge variant="outline">Pending</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Grade History</CardTitle>
                <Select
                  value={selectedSemester}
                  onValueChange={setSelectedSemester}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current">Current Semester</SelectItem>
                    <SelectItem value="fall2023">Fall 2023</SelectItem>
                    <SelectItem value="spring2023">Spring 2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {semesterHistory.map((semester, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <h3 className="font-semibold">{semester.semester}</h3>
                        <p className="text-sm text-muted-foreground">
                          {semester.credits} Credits
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{semester.gpa}/10</p>
                        <p className="text-sm text-muted-foreground">
                          Semester GPA
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {semester.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex items-center justify-between p-3 border rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{course.course}</p>
                            <p className="text-sm text-muted-foreground">
                              {course.credits} Credits
                            </p>
                          </div>
                          <Badge variant={getGradeBadgeVariant(course.grade)}>
                            {course.grade}/10
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>GPA Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">
                    GPA trend chart would be implemented here
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>A (9.0-10.0)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={25} className="w-24 h-2" />
                      <span className="text-sm">25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>B (8.0-8.9)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={45} className="w-24 h-2" />
                      <span className="text-sm">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>C (7.0-7.9)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={25} className="w-24 h-2" />
                      <span className="text-sm">25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>D (6.0-6.9)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={5} className="w-24 h-2" />
                      <span className="text-sm">5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
