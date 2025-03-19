"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import StudentDashboard from "@/components/student-dashboard";
import StudentPortal from "@/components/student-portal";
import AdminPanel from "@/components/admin-panel";
import CMSInterface from "@/components/cms-interface";
import LoginScreen from "@/components/login-screen";
import SystemArchitecture from "@/components/system-architecture";

export default function Wireframes() {
  const [currentWireframe, setCurrentWireframe] = useState("student-dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">MyUni Wireframes</h1>

      <div className="md:hidden mb-4">
        <Button
          variant="outline"
          className="w-full flex justify-between items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span>Select Wireframe</span>
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>

        {mobileMenuOpen && (
          <div className="mt-2 border rounded-lg p-2 bg-background shadow-lg">
            <div className="flex flex-col space-y-1">
              <Button
                variant={
                  currentWireframe === "student-dashboard" ? "default" : "ghost"
                }
                className="justify-start"
                onClick={() => {
                  setCurrentWireframe("student-dashboard");
                  setMobileMenuOpen(false);
                }}
              >
                Student Dashboard
              </Button>
              <Button
                variant={
                  currentWireframe === "student-portal" ? "default" : "ghost"
                }
                className="justify-start"
                onClick={() => {
                  setCurrentWireframe("student-portal");
                  setMobileMenuOpen(false);
                }}
              >
                Student Portal
              </Button>
              <Button
                variant={
                  currentWireframe === "admin-panel" ? "default" : "ghost"
                }
                className="justify-start"
                onClick={() => {
                  setCurrentWireframe("admin-panel");
                  setMobileMenuOpen(false);
                }}
              >
                Admin Panel
              </Button>
              <Button
                variant={currentWireframe === "cms" ? "default" : "ghost"}
                className="justify-start"
                onClick={() => {
                  setCurrentWireframe("cms");
                  setMobileMenuOpen(false);
                }}
              >
                CMS Interface
              </Button>
              <Button
                variant={currentWireframe === "login" ? "default" : "ghost"}
                className="justify-start"
                onClick={() => {
                  setCurrentWireframe("login");
                  setMobileMenuOpen(false);
                }}
              >
                Login Screen
              </Button>
              <Button
                variant={
                  currentWireframe === "system-architecture"
                    ? "default"
                    : "ghost"
                }
                className="justify-start"
                onClick={() => {
                  setCurrentWireframe("system-architecture");
                  setMobileMenuOpen(false);
                }}
              >
                System Architecture
              </Button>
            </div>
          </div>
        )}
      </div>

      <Tabs
        defaultValue="student-dashboard"
        value={currentWireframe}
        onValueChange={setCurrentWireframe}
        className="w-full"
      >
        <TabsList className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          <TabsTrigger value="student-dashboard">Student Dashboard</TabsTrigger>
          <TabsTrigger value="student-portal">Student Portal</TabsTrigger>
          <TabsTrigger value="admin-panel">Admin Panel</TabsTrigger>
          <TabsTrigger value="cms">CMS Interface</TabsTrigger>
          <TabsTrigger value="login">Login Screen</TabsTrigger>
          <TabsTrigger value="system-architecture">
            System Architecture
          </TabsTrigger>
        </TabsList>

        <div
          className={
            currentWireframe
              ? "bg-white"
              : "mt-6 border rounded-lg p-4 bg-gray-50 "
          }
        >
          <TabsContent value="student-dashboard">
            <StudentDashboard />
          </TabsContent>

          <TabsContent value="student-portal">
            <StudentPortal />
          </TabsContent>

          <TabsContent value="admin-panel">
            <AdminPanel />
          </TabsContent>

          <TabsContent value="cms">
            <CMSInterface />
          </TabsContent>

          <TabsContent value="login">
            <LoginScreen />
          </TabsContent>

          <TabsContent value="system-architecture">
            <SystemArchitecture />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
