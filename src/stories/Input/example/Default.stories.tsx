// Input.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import Input from "../../../components/Input";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Input/Example",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default = (args: any) => <Input {...args} />;
Default.args = {
  wrapperClassName: "w-56",
  placeholder: "Your Email Here",
  label: "Email Address",
  id: "email",
  name: "email",
  type: "email",
};

export const InputImage = (args: any) => <Input {...args} />;
InputImage.args = {
  id: "avatar",
  name: "avatar",
  type: "file",
  accept: "image/*",
};
