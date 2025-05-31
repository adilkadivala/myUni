"use client";

import type React from "react";

import { SidebarLayout } from "@/components/sidebar";
import {
  Home,
  Users,
  FileText,
  Calendar,
  BookOpen,
  MessageSquare,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Academic", href: "/admin/academic", icon: BookOpen },
  { name: "Content", href: "/admin/content", icon: FileText },
  { name: "Announcements", href: "/admin/announcements", icon: MessageSquare },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
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
