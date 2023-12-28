'use client';

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  return (
    <button onClick={() => signIn('google', { callbackUrl })} className="authBtn">
      Sign In with Google
    </button>
  )
}

export default GoogleButton
