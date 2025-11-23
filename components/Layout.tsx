import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen relative z-10">
      <Sidebar />
      <div className="flex-1 md:ml-[300px] relative z-10">
        <Navbar />
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </main>
  );
}

