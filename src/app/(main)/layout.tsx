import { SideBar } from "@/components/lauout/side-bar";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <main className="w-full flex-1 overflow-hidden ">
          {children}
        </main>
      </div>
    </div>
  );
}
