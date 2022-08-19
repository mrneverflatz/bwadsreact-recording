// Badge.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import Badge from "../../../components/Badge";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Badge/Example",
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Success = (args: any) => <Badge {...args}>Success</Badge>;
Success.args = {
  state: "success",
};

export const Warning = (args: any) => <Badge {...args}>Warning</Badge>;
Warning.args = {
  state: "warning",
};

export const Danger = (args: any) => <Badge {...args}>Danger</Badge>;
Danger.args = {
  state: "danger",
};
