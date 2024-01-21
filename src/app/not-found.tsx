import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center flex justify-center flex-col pt-60">
      <h1 className="text-4xl">Page Not Found .</h1>
      <p className="flex text-2xl flex-row text-center justify-center align-middle items-center">
        Go Back to the Dashboard
        <Link href="/" className="text-3xl text-green-500 pl-2">
          Dashboard
        </Link>
      </p>
    </main>
  );
}

export default NotFound;
