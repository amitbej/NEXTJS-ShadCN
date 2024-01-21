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
import { ModeToggle } from "@/components/theme-button";

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
                <ModeToggle />
                <div className="flex flex-col items-center font-medium  space-y-4 w-full text-3xl text-orange-400 mt-10 md:text-orange-400">
                  <Link href="/"> Sign In</Link>
                  <Link href="/"> Sign Up</Link>
                  <Link href="/"> Services</Link>
                  <Link href="/cjoinus"> Career</Link>
                  <Link href="/aboutus"> About Us</Link>
                  <Link href="/"> Contact Us</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className=" items-center hidden md:flex md:space-x-4">
        <Button className="text-md" variant={"snbej"}>
          Get Started
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default actionbutton;
