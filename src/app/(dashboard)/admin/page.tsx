import ServerStats from "@/components/admin/ServerStats";
import ClientCounter from "@/components/admin/ClientCounter";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard (Hybrid Rendering)</h1>
      
      {/* Bagian ini di-render SSR */}
      <ServerStats />

      {/* Bagian ini di-render CSR */}
      <ClientCounter />
    </div>
  );
}