import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="flex flex-col items-center">
      {/* Name + Section shifted right */}
      <div className="self-start ml-10 mb-6">
        <h1 className="text-3xl font-bold">Pranav Gupta</h1>
        <h2 className="text-xl text-gray-600">CS5610</h2>
        <a
          href="https://github.com/PranavGupta26/kambaz-next-js"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          GitHub Repository
        </a>
      </div>

      {/* Sign in form stays centered */}
      <h3>Sign in</h3>
      <input placeholder="username" className="wd-username" /> <br />
      <input placeholder="password" type="password" className="wd-password" /> <br />
      <Link href="/Dashboard" id="wd-signin-btn">
        Sign in
      </Link>{" "}
      <br />
      <Link href="Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
