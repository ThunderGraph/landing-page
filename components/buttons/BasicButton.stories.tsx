import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BasicButton from './basicButton';

const meta: Meta<typeof BasicButton> = {
  title: 'Components/Common/Buttons/BasicButton',
  component: BasicButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof BasicButton>;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span style={{ fontSize: '20px' }}>🚀</span>
        With Icon
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Custom Class Button',
    className: 'custom-button-class',
  },
}; 
