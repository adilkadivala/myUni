import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import LoginScreen from "@/components/login-screen";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl mx-auto">
          <LoginScreen />
        </div>
      </main>
      <Footer />
    </div>
  );
}
