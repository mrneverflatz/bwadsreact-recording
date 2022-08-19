import React from "react";

import Input from "../../../components/Input";

type Props = {};

function Sample({}: Props) {
  return (
    <Input
      wrapperClassName="w-56"
      placeholder="Your Email Here"
      label="Email Address"
      id="email"
      name="email"
      type="email"
    />
  );
}

export default Sample;
