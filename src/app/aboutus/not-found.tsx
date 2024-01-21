import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center flex justify-center flex-col pt-60">
      <h1 className="text-4xl">Page Not Found .</h1>
      <p className="flex text-2xl flex-row text-center justify-center align-middle items-center">
        Go Back to the About Section.
        <Link href="/aboutus" className="text-3xl text-orange-500 pl-2">
          AboutUs
        </Link>
      </p>
    </main>
  );
}

export default NotFound;
