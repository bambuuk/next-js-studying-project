import GoogleButton from "@/components/GoogleButton";
import SignInForm from "@/components/SignInForm";


const SignIn = async () => {
  return (
    <div className="signIn">
      <h1>Sign In</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  )
}

export default SignIn;
