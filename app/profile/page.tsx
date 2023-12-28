import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";

const Profile = async () => {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="user image" />}
      {session?.user?.email && <p>Email: {session.user.email}</p>}
    </div>
  )
}

export default Profile;
