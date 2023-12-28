import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <Image src={session.user.image} alt="user image" width={200} height={200} />}
      {session?.user?.email && <p>Email: {session.user.email}</p>}
    </div>
  )
}

export default Profile;
