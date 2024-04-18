import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api";
  console.log(user);
  return (
    <div className="flex justify-between gap-2">
      {user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null}
      <Link href={actionUrl} className="bg-color-dark text-color-accent py1 px-12">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
