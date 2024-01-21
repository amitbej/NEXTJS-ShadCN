import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LuAlignJustify } from "react-icons/lu";
import Link from "next/link";

const actionbutton = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="/"> Sign In</Link>
                  <Link href="/"> Sign Up</Link>
                  <Link href="/"> Services</Link>
                  <Link href="/"> Features</Link>
                  <Link href="/"> About Us</Link>
                  <Link href="/"> Contact Us</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant={"outline"}>
          Sign In
        </Button>

        <Button className="text-md bg-blue-500" variant={"ghost"}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default actionbutton;
