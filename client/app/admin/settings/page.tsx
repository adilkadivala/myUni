"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Settings,
  Database,
  Mail,
  Bell,
  Shield,
  Globe,
  Save,
} from "lucide-react";

export default function SystemSettingsPage() {
  const [settings, setSettings] = useState({
    general: {
      universityName: "University of Macedonia",
      universityCode: "UOM",
      academicYear: "2024-2025",
      timezone: "Europe/Athens",
      language: "en",
      currency: "EUR",
    },
    email: {
      smtpServer: "smtp.uom.gr",
      smtpPort: "587",
      smtpUsername: "system@uom.gr",
      smtpPassword: "",
      fromEmail: "noreply@uom.gr",
      fromName: "University of Macedonia",
      enableSSL: true,
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      maintenanceAlerts: true,
      systemUpdates: true,
      securityAlerts: true,
    },
    security: {
      passwordMinLength: 8,
      passwordRequireUppercase: true,
      passwordRequireNumbers: true,
      passwordRequireSymbols: true,
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      twoFactorAuth: false,
      ipWhitelist: "",
    },
    database: {
      backupFrequency: "daily",
      backupRetention: 30,
      maintenanceWindow: "02:00",
      autoOptimize: true,
      enableLogging: true,
      logRetention: 90,
    },
    system: {
      maintenanceMode: false,
      debugMode: false,
      cacheEnabled: true,
      compressionEnabled: true,
      maxFileSize: 10,
      allowedFileTypes: "pdf,doc,docx,jpg,png,gif",
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
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
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
                  <Label htmlFor="university-code">University Code</Label>
                  <Input
                    id="university-code"
                    value={settings.general.universityCode}
                    onChange={(e) =>
                      updateSetting("general", "universityCode", e.target.value)
                    }
                  />
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

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={settings.general.currency}
                    onValueChange={(value) =>
                      updateSetting("general", "currency", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">Euro (EUR)</SelectItem>
                      <SelectItem value="USD">US Dollar (USD)</SelectItem>
                      <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtp-server">SMTP Server</Label>
                  <Input
                    id="smtp-server"
                    value={settings.email.smtpServer}
                    onChange={(e) =>
                      updateSetting("email", "smtpServer", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input
                    id="smtp-port"
                    value={settings.email.smtpPort}
                    onChange={(e) =>
                      updateSetting("email", "smtpPort", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtp-username">SMTP Username</Label>
                  <Input
                    id="smtp-username"
                    value={settings.email.smtpUsername}
                    onChange={(e) =>
                      updateSetting("email", "smtpUsername", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smtp-password">SMTP Password</Label>
                  <Input
                    id="smtp-password"
                    type="password"
                    value={settings.email.smtpPassword}
                    onChange={(e) =>
                      updateSetting("email", "smtpPassword", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from-email">From Email</Label>
                  <Input
                    id="from-email"
                    value={settings.email.fromEmail}
                    onChange={(e) =>
                      updateSetting("email", "fromEmail", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="from-name">From Name</Label>
                  <Input
                    id="from-name"
                    value={settings.email.fromName}
                    onChange={(e) =>
                      updateSetting("email", "fromName", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="enable-ssl"
                  checked={settings.email.enableSSL}
                  onCheckedChange={(checked) =>
                    updateSetting("email", "enableSSL", checked)
                  }
                />
                <Label htmlFor="enable-ssl">Enable SSL/TLS</Label>
              </div>

              <Button>Test Email Configuration</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.emailNotifications}
                    onCheckedChange={(checked) =>
                      updateSetting(
                        "notifications",
                        "emailNotifications",
                        checked
                      )
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications via SMS
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.smsNotifications}
                    onCheckedChange={(checked) =>
                      updateSetting(
                        "notifications",
                        "smsNotifications",
                        checked
                      )
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Send push notifications to mobile apps
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.pushNotifications}
                    onCheckedChange={(checked) =>
                      updateSetting(
                        "notifications",
                        "pushNotifications",
                        checked
                      )
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Maintenance Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Notify users about system maintenance
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.maintenanceAlerts}
                    onCheckedChange={(checked) =>
                      updateSetting(
                        "notifications",
                        "maintenanceAlerts",
                        checked
                      )
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">System Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Notify about system updates and new features
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.systemUpdates}
                    onCheckedChange={(checked) =>
                      updateSetting("notifications", "systemUpdates", checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Security Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Notify about security-related events
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.securityAlerts}
                    onCheckedChange={(checked) =>
                      updateSetting("notifications", "securityAlerts", checked)
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password Policy</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password-min-length">
                      Minimum Password Length
                    </Label>
                    <Input
                      id="password-min-length"
                      type="number"
                      value={settings.security.passwordMinLength}
                      onChange={(e) =>
                        updateSetting(
                          "security",
                          "passwordMinLength",
                          Number.parseInt(e.target.value)
                        )
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-login-attempts">
                      Max Login Attempts
                    </Label>
                    <Input
                      id="max-login-attempts"
                      type="number"
                      value={settings.security.maxLoginAttempts}
                      onChange={(e) =>
                        updateSetting(
                          "security",
                          "maxLoginAttempts",
                          Number.parseInt(e.target.value)
                        )
                      }
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Require Uppercase Letters</p>
                      <p className="text-sm text-muted-foreground">
                        Passwords must contain uppercase letters
                      </p>
                    </div>
                    <Switch
                      checked={settings.security.passwordRequireUppercase}
                      onCheckedChange={(checked) =>
                        updateSetting(
                          "security",
                          "passwordRequireUppercase",
                          checked
                        )
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Require Numbers</p>
                      <p className="text-sm text-muted-foreground">
                        Passwords must contain numbers
                      </p>
                    </div>
                    <Switch
                      checked={settings.security.passwordRequireNumbers}
                      onCheckedChange={(checked) =>
                        updateSetting(
                          "security",
                          "passwordRequireNumbers",
                          checked
                        )
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Require Symbols</p>
                      <p className="text-sm text-muted-foreground">
                        Passwords must contain special characters
                      </p>
                    </div>
                    <Switch
                      checked={settings.security.passwordRequireSymbols}
                      onCheckedChange={(checked) =>
                        updateSetting(
                          "security",
                          "passwordRequireSymbols",
                          checked
                        )
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">
                        Require 2FA for all users
                      </p>
                    </div>
                    <Switch
                      checked={settings.security.twoFactorAuth}
                      onCheckedChange={(checked) =>
                        updateSetting("security", "twoFactorAuth", checked)
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="session-timeout">
                    Session Timeout (minutes)
                  </Label>
                  <Input
                    id="session-timeout"
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) =>
                      updateSetting(
                        "security",
                        "sessionTimeout",
                        Number.parseInt(e.target.value)
                      )
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ip-whitelist">
                    IP Whitelist (one per line)
                  </Label>
                  <Textarea
                    id="ip-whitelist"
                    placeholder="192.168.1.1&#10;10.0.0.1"
                    value={settings.security.ipWhitelist}
                    onChange={(e) =>
                      updateSetting("security", "ipWhitelist", e.target.value)
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Database Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="backup-frequency">Backup Frequency</Label>
                  <Select
                    value={settings.database.backupFrequency}
                    onValueChange={(value) =>
                      updateSetting("database", "backupFrequency", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="backup-retention">
                    Backup Retention (days)
                  </Label>
                  <Input
                    id="backup-retention"
                    type="number"
                    value={settings.database.backupRetention}
                    onChange={(e) =>
                      updateSetting(
                        "database",
                        "backupRetention",
                        Number.parseInt(e.target.value)
                      )
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maintenance-window">Maintenance Window</Label>
                  <Input
                    id="maintenance-window"
                    type="time"
                    value={settings.database.maintenanceWindow}
                    onChange={(e) =>
                      updateSetting(
                        "database",
                        "maintenanceWindow",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="log-retention">Log Retention (days)</Label>
                  <Input
                    id="log-retention"
                    type="number"
                    value={settings.database.logRetention}
                    onChange={(e) =>
                      updateSetting(
                        "database",
                        "logRetention",
                        Number.parseInt(e.target.value)
                      )
                    }
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto Optimize</p>
                    <p className="text-sm text-muted-foreground">
                      Automatically optimize database performance
                    </p>
                  </div>
                  <Switch
                    checked={settings.database.autoOptimize}
                    onCheckedChange={(checked) =>
                      updateSetting("database", "autoOptimize", checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable Logging</p>
                    <p className="text-sm text-muted-foreground">
                      Log database queries and operations
                    </p>
                  </div>
                  <Switch
                    checked={settings.database.enableLogging}
                    onCheckedChange={(checked) =>
                      updateSetting("database", "enableLogging", checked)
                    }
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button>Run Backup Now</Button>
                <Button variant="outline">Optimize Database</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                System Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Maintenance Mode</p>
                    <p className="text-sm text-muted-foreground">
                      Put the system in maintenance mode
                    </p>
                  </div>
                  <Switch
                    checked={settings.system.maintenanceMode}
                    onCheckedChange={(checked) =>
                      updateSetting("system", "maintenanceMode", checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Debug Mode</p>
                    <p className="text-sm text-muted-foreground">
                      Enable debug mode for troubleshooting
                    </p>
                  </div>
                  <Switch
                    checked={settings.system.debugMode}
                    onCheckedChange={(checked) =>
                      updateSetting("system", "debugMode", checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Cache Enabled</p>
                    <p className="text-sm text-muted-foreground">
                      Enable system caching for better performance
                    </p>
                  </div>
                  <Switch
                    checked={settings.system.cacheEnabled}
                    onCheckedChange={(checked) =>
                      updateSetting("system", "cacheEnabled", checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Compression Enabled</p>
                    <p className="text-sm text-muted-foreground">
                      Enable gzip compression for responses
                    </p>
                  </div>
                  <Switch
                    checked={settings.system.compressionEnabled}
                    onCheckedChange={(checked) =>
                      updateSetting("system", "compressionEnabled", checked)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="max-file-size">Max File Size (MB)</Label>
                  <Input
                    id="max-file-size"
                    type="number"
                    value={settings.system.maxFileSize}
                    onChange={(e) =>
                      updateSetting(
                        "system",
                        "maxFileSize",
                        Number.parseInt(e.target.value)
                      )
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allowed-file-types">Allowed File Types</Label>
                  <Input
                    id="allowed-file-types"
                    placeholder="pdf,doc,docx,jpg,png"
                    value={settings.system.allowedFileTypes}
                    onChange={(e) =>
                      updateSetting(
                        "system",
                        "allowedFileTypes",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button>Clear Cache</Button>
                <Button variant="outline">Restart System</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
