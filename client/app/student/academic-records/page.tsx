"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, TrendingUp, Award, Calendar } from "lucide-react";

export default function AcademicRecordsPage() {
  const courseHistory = [
    {
      course: "Introduction to Programming",
      semester: "1st",
      year: "2021-2022",
      credits: 6,
      grade: 9.0,
    },
    {
      course: "Data Structures",
      semester: "2nd",
      year: "2021-2022",
      credits: 6,
      grade: 8.5,
    },
    {
      course: "Computer Architecture",
      semester: "2nd",
      year: "2021-2022",
      credits: 6,
      grade: 7.0,
    },
    {
      course: "Algorithms",
      semester: "3rd",
      year: "2022-2023",
      credits: 6,
      grade: 8.0,
    },
    {
      course: "Database Systems",
      semester: "4th",
      year: "2022-2023",
      credits: 6,
      grade: 8.5,
    },
    {
      course: "Operating Systems",
      semester: "4th",
      year: "2022-2023",
      credits: 6,
      grade: 7.8,
    },
  ];

  const semesterGPA = [
    { semester: "1st", year: "2021-2022", gpa: 8.7, credits: 30 },
    { semester: "2nd", year: "2021-2022", gpa: 8.2, credits: 30 },
    { semester: "3rd", year: "2022-2023", gpa: 8.4, credits: 30 },
    { semester: "4th", year: "2022-2023", gpa: 8.1, credits: 30 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Academic Records</h1>
          <p className="text-muted-foreground">
            View your academic progress and course history
          </p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Download Transcript
        </Button>
      </div>

      {/* Academic Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Current GPA</p>
                <p className="text-2xl font-bold">8.2/10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Completed Credits
                </p>
                <p className="text-2xl font-bold">120/240</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Current Semester
                </p>
                <p className="text-2xl font-bold">5th</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">Class Rank</p>
                <p className="text-2xl font-bold">15/120</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">Course History</TabsTrigger>
          <TabsTrigger value="gpa">GPA Trends</TabsTrigger>
          <TabsTrigger value="transcript">Official Transcript</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>Course History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Course</th>
                      <th className="text-left p-3">Semester</th>
                      <th className="text-left p-3">Year</th>
                      <th className="text-left p-3">Credits</th>
                      <th className="text-left p-3">Grade</th>
                      <th className="text-left p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseHistory.map((course, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 font-medium">{course.course}</td>
                        <td className="p-3">{course.semester}</td>
                        <td className="p-3">{course.year}</td>
                        <td className="p-3">{course.credits}</td>
                        <td className="p-3">
                          <Badge
                            variant={
                              course.grade >= 8
                                ? "default"
                                : course.grade >= 6
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {course.grade}/10
                          </Badge>
                        </td>
                        <td className="p-3">
                          <Badge variant="outline">Completed</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gpa">
          <Card>
            <CardHeader>
              <CardTitle>GPA by Semester</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {semesterGPA.map((semester, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">
                        {semester.semester} Semester {semester.year}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {semester.credits} Credits
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{semester.gpa}/10</p>
                      <p className="text-sm text-muted-foreground">GPA</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transcript">
          <Card>
            <CardHeader>
              <CardTitle>Official Transcript</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Student Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>
                        <strong>Name:</strong> Maria Papadopoulou
                      </p>
                      <p>
                        <strong>Student ID:</strong> 20210134
                      </p>
                      <p>
                        <strong>Program:</strong> Computer Science
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Enrollment Date:</strong> September 2021
                      </p>
                      <p>
                        <strong>Expected Graduation:</strong> June 2025
                      </p>
                      <p>
                        <strong>Academic Status:</strong> Active
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Download Official Transcript
                  </Button>
                  <Button variant="outline">Request Certified Copy</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
