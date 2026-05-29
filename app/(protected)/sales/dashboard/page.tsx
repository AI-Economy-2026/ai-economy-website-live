import { getSessionUser } from "@/lib/session";
import SalesClient from "@/app/(public)/sales/SalesClient";

export default async function SalesAfterLoginPage() {
  const user = await getSessionUser();
  // Protected layout already redirects if no user, but guard to satisfy types
  if (!user) return null;
  return (
    <SalesClient
      isAuthenticated={true}
      userEmail={user.email}
      ownedProducts={user.owned_products}
      hasToolkit={user.owned_products.includes("toolkit")}
    />
  );
}
