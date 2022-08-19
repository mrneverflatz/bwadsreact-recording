import React from "react";

import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";
import Link from "../../../components/Link";

type Props = {};

function Sample({}: Props) {
  return (
    <Navbar
      cta={
        <>
          <Button state="secondary" className="relative px-8">
            <a>Sign In</a>
          </Button>
          <Button state="primary" className="relative px-8">
            <a>Sign Up</a>
          </Button>
        </>
      }
      pathname="/program"
      className={{ active: "text-purple", idle: "text-navy" }}
    >
      <Link href="/program">
        <a>Program</a>
      </Link>

      <Link href="/mentor">
        <a>Mentor</a>
      </Link>

      <Link href="/pricing">
        <a>Pricing</a>
      </Link>

      <Link href="/business">
        <a>Business</a>
      </Link>
    </Navbar>
  );
}

export default Sample;
