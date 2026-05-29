import { getSessionUser } from "@/lib/session";
import DashboardClient from "@/components/DashboardClient";

export default async function DashboardPage() {
  const user = await getSessionUser();

  return (
    <DashboardClient
      userName={user?.full_name ?? ""}
      userEmail={user?.email ?? ""}
    />
  );
}
