import { User } from "@auth0/auth0-react";
import LogoutButton from "@/components/auth/logout-btn";

export default function Profile({ user }: { user: User }) {
  return (
    <div>
      <p id="user-email">{user?.email}</p>
      <LogoutButton />
    </div>
  );
}
