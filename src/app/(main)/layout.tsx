import { Header } from "@/components/lauout/header";
import { SideBar } from "@/components/lauout/side-bar";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <main className="w-full flex-1 overflow-hidden ">
          <div className="m-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
