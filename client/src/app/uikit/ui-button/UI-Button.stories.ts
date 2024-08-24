import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './UI-Button';

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    btnType: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    label: 'Secondary',
    btnType: 'secondary',
  },
};
