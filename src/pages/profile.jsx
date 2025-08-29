import { useOutletContext } from "react-router-dom";

export default function ProfilePage() {
  const { username } = useOutletContext();
  return (
    <div>
      <h1>Profile</h1>
      usernama : {username}
    </div>
  );
}
