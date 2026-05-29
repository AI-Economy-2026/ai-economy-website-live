"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    try {
      await fetch("/api/auth/session", { method: "DELETE" });
      toast.success("Signed out successfully.");
      router.push("/login");
      router.refresh();
    } catch {
      toast.error("Failed to sign out. Please try again.");
    }
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-sm font-semibold text-gray-400 hover:text-red-500 transition-colors"
    >
      Sign Out
    </button>
  );
}
