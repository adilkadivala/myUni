"use client";

import type React from "react";

import { SidebarLayout } from "@/components/sidebar";
import {
  Home,
  BookOpen,
  FileText,
  Calendar,
  GraduationCap,
  Settings,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/student", icon: Home },
  { name: "Courses", href: "/student/courses", icon: BookOpen },
  { name: "Schedule", href: "/student/schedule", icon: Calendar },
  { name: "Grades", href: "/student/grades", icon: GraduationCap },
  { name: "Registration", href: "/student/registration", icon: FileText },
  { name: "Records", href: "/student/records", icon: User },
  { name: "Settings", href: "/student/settings", icon: Settings },
];

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigationWithCurrent = navigation.map((item) => ({
    ...item,
    current: pathname === item.href,
  }));
  return (
    <SidebarLayout navigation={navigationWithCurrent}>{children}</SidebarLayout>
  );
}
