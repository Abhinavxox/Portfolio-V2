import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-[300px]">
        <Navbar />
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </main>
  );
}

