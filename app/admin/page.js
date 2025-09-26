import { Suspense } from "react";
import AdminDashboard from "@/app/admin/components/AdminDashboard";

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading Admin Dashboard...</div>}>
      <AdminDashboard />
    </Suspense>
  );
}
