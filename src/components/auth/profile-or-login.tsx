import { useAuth0 } from "@auth0/auth0-react";
import Profile from "@/components/auth/profile";
import LoginButton from "@/components/auth/login-btn";

export default function ProfileOrLogin() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated && user) {
    return <Profile user={user} />;
  }

  return <LoginButton />;
}
