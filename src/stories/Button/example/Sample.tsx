import React from "react";

import Button from "../../../components/Button";

type Props = {};

function Sample({}: Props) {
  return (
    <Button state="primary">
      <button onClick={() => console.log("hi")}>Okay, got it</button>
    </Button>
  );
}

export default Sample;
