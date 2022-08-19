// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import Button from "../../../components/Button";

import { ReactComponent as GoogleLogo } from "../../../assets/images/google-logo.svg";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button/Example",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = (args: any) => (
  <Button {...args}>
    <button onClick={() => console.log("hi")}>Get Started</button>
  </Button>
);
Primary.args = {
  state: "primary",
};

export const Secondary = (args: any) => (
  <Button {...args}>
    <button onClick={() => console.log("hi")}>Sign In</button>
  </Button>
);
Secondary.args = {
  state: "secondary",
};

export const Alternative = (args: any) => (
  <Button {...args}>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      <GoogleLogo />
      <span className="ml-2">Sign In with Google</span>
    </a>
  </Button>
);
Alternative.args = {
  state: "alternative",
  className: "border-2 border-[#E7E5F4]",
};
