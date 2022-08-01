import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SKButton } from '@Components/atoms/button/SKButton';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/button/SKButton',
  component: SKButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SKButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SKButton> = (args) => (
  <SKButton {...args} />
);

export const Button = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button.args = {
  label: 'SKButton',
};
