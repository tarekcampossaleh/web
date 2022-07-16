import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExperienceCard from "./ExperienceCard";

export default {
  title: "Components/ExperienceCard",
  component: ExperienceCard,
  argTypes: {},
} as ComponentMeta<typeof ExperienceCard>;

const Template: ComponentStory<typeof ExperienceCard> = () => (
  <ExperienceCard />
);

export const Primary = Template.bind({});
