"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Settings, Save, Palette, Upload } from "lucide-react";

export default function SystemSettingsPage() {
  const [settings, setSettings] = useState({
    general: {
      universityName: "University of Macedonia",
      dateformat: "MM/DD/YYYY",
      academicYear: "2024-2025",
      timezone: "Europe/Athens",
      language: "en",
      font: "Poppins",
    },
  });

  const updateSetting = (category: string, key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value,
      },
    }));
  };

  const saveSettings = () => {
    // Handle settings save logic here
    console.log("Saving settings:", settings);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">System Settings</h1>
          <p className="text-muted-foreground">
            Configure university system settings and preferences
          </p>
        </div>
        <Button onClick={saveSettings}>
          <Save className="h-4 w-4 mr-2" />
          Save All Settings
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="university-name">University Name</Label>
                  <Input
                    id="university-name"
                    value={settings.general.universityName}
                    onChange={(e) =>
                      updateSetting("general", "universityName", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateformat">Date format</Label>
                  <Select
                    value={settings.general.dateformat}
                    onValueChange={(value) =>
                      updateSetting("general", "dateformat", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select date format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="YYYY/DD/MM">YYYY/DD/MM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="academic-year">Academic Year</Label>
                  <Input
                    id="academic-year"
                    value={settings.general.academicYear}
                    onChange={(e) =>
                      updateSetting("general", "academicYear", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={settings.general.timezone}
                    onValueChange={(value) =>
                      updateSetting("general", "timezone", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Europe/Athens">
                        Europe/Athens
                      </SelectItem>
                      <SelectItem value="Europe/London">
                        Europe/London
                      </SelectItem>
                      <SelectItem value="America/New_York">
                        America/New_York
                      </SelectItem>
                      <SelectItem value="Asia/Tokyo">Asia/Tokyo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select
                    value={settings.general.language}
                    onValueChange={(value) =>
                      updateSetting("general", "language", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="el">Greek</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                University Branding
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="university-name">University Name</Label>
                    <Input
                      id="university-name"
                      defaultValue="University of Macedonia"
                    />
                  </div>
                </div>
              </div>

              {/* Logo and Colors */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Visual Identity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="font">Default Font</Label>
                    <Select
                      value={settings.general.font}
                      onValueChange={(value) =>
                        updateSetting("general", "font", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Poppins">Poppins</SelectItem>
                        <SelectItem value="Roboto">Roboto</SelectItem>
                        <SelectItem value="Sens-serif">Sens-serif</SelectItem>
                        <SelectItem value="Roman">Roman</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Primary Color</Label>
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-md bg-primary border"></div>
                        <Input
                          type="text"
                          defaultValue="#0f172a"
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Secondary Color</Label>
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-md bg-secondary border"></div>
                        <Input
                          type="text"
                          defaultValue="#64748b"
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Reset</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
