"use client";
import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import React from "react";

function HeaderProfileBtn() {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            href="/profile"
            label="Profile"
            labelIcon={<User className="size-4"></User>}
          ></UserButton.Link>
        </UserButton.MenuItems>
      </UserButton>
    </>
  );
}

export default HeaderProfileBtn;
