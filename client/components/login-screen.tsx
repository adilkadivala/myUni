import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function LoginScreen() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold">Login Screen</h2>
      <p className="text-muted-foreground mb-4">
        Authentication interface for university users
      </p>

      <div className="flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center text-white mb-4">
              <User size={32} />
            </div>
            <CardTitle>MyUni Login</CardTitle>
            <CardDescription>
              Sign in to access your university portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">University Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="student@university.gr"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" className="p-0 h-auto text-sm">
                    Forgot password?
                  </Button>
                </div>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">Sign In</Button>
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Don&rsquo;t have an account? Contact your university administrator.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LoginScreen;
