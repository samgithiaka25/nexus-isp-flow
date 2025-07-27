import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ISPSidebar } from "./ISPSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <ISPSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card/50 backdrop-blur-sm flex items-center px-6 sticky top-0 z-40">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl font-semibold">ISP Management System</h1>
            <div className="ml-auto flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                <span>System Online</span>
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}