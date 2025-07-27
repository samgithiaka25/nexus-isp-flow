import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "./MetricCard";
import { 
  Users, 
  DollarSign, 
  Wifi, 
  Activity,
  TrendingUp,
  AlertTriangle
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const revenueData = [
  { month: 'Jan', revenue: 45000, customers: 120 },
  { month: 'Feb', revenue: 52000, customers: 135 },
  { month: 'Mar', revenue: 48000, customers: 128 },
  { month: 'Apr', revenue: 61000, customers: 156 },
  { month: 'May', revenue: 55000, customers: 142 },
  { month: 'Jun', revenue: 67000, customers: 168 },
];

const planDistribution = [
  { name: 'Basic 10Mbps', value: 45, color: '#3b82f6' },
  { name: 'Standard 25Mbps', value: 30, color: '#10b981' },
  { name: 'Premium 50Mbps', value: 20, color: '#f59e0b' },
  { name: 'Enterprise 100Mbps', value: 5, color: '#ef4444' },
];

const networkUsage = [
  { time: '00:00', usage: 45 },
  { time: '04:00', usage: 25 },
  { time: '08:00', usage: 75 },
  { time: '12:00', usage: 85 },
  { time: '16:00', usage: 95 },
  { time: '20:00', usage: 80 },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Customers"
          value="168"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
        />
        <MetricCard
          title="Monthly Revenue"
          value="KES 67,000"
          change="+8.2% from last month"
          changeType="positive"
          icon={DollarSign}
        />
        <MetricCard
          title="Active Connections"
          value="156"
          change="92.9% uptime"
          changeType="positive"
          icon={Wifi}
        />
        <MetricCard
          title="Network Load"
          value="78%"
          change="Peak: 95%"
          changeType="neutral"
          icon={Activity}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue Trend */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Revenue Trend
            </CardTitle>
            <CardDescription>
              Monthly revenue and customer growth over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Service Plan Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Service Plan Distribution</CardTitle>
            <CardDescription>
              Customer distribution across different service plans
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={planDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {planDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Network Usage */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-info" />
            Network Usage Today
          </CardTitle>
          <CardDescription>
            Bandwidth utilization throughout the day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={networkUsage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="usage" fill="hsl(var(--info))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Quick Actions & Alerts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg border-l-4 border-warning">
              <div>
                <p className="font-medium">High bandwidth usage detected</p>
                <p className="text-sm text-muted-foreground">Router MK-001 at 95% capacity</p>
              </div>
              <span className="text-sm text-warning">2 min ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-info/10 rounded-lg border-l-4 border-info">
              <div>
                <p className="font-medium">New customer registration</p>
                <p className="text-sm text-muted-foreground">John Doe signed up for Premium plan</p>
              </div>
              <span className="text-sm text-info">15 min ago</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Router Status</CardTitle>
            <CardDescription>
              Current status of all managed routers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {['MK-001', 'MK-002', 'MK-003', 'MK-004'].map((router) => (
              <div key={router} className="flex items-center justify-between p-3 bg-card rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <span className="font-medium">{router}</span>
                </div>
                <div className="text-right text-sm">
                  <div className="text-success">Online</div>
                  <div className="text-muted-foreground">Load: {Math.floor(Math.random() * 40 + 60)}%</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}