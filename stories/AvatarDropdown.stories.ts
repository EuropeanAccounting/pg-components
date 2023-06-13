import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from '../src';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Eigentümerportal/Dropdowns/Avatar Dropdown',
  component: AvatarDropdown,
  tags: ['autodocs'],
  argTypes: {
    picture: { type: 'string' },
  },
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    placeholder: '../assets/Portrait_Placeholder.png',
    picture: 'https://api.dicebear.com/6.x/bottts-neutral/svg?seed=OrAnnieeo',
    navigationItems: [
      {
        linkName: "Dashboard",
        onClick: () => alert("You have clicked, Dashboard")
      },
      {
        linkName: "Metrics and analytics",
        onClick: () => alert("You have clicked, Metrics and analytics")
      },
      {
        linkName: "Multi-Channel Funnels overview",
        onClick: () => alert("You have clicked, Multi-Channel Funnels overview")
      },
      {
        linkName: "User settings",
        onClick: () => alert("You have clicked, User settings")
      },
    ]
  },
};

export const NoPicture: Story = {
  args: {
    placeholder: '../assets/Portrait_Placeholder.png',
    picture: undefined,
    navigationItems: [
      {
        linkName: "This is a test",
        onClick: "#"
      },
      {
        linkName: "And this is a text with emoji 😎",
        onClick: "#"
      },
    ]
  },
};

export const LongText: Story = {
  args: {
    placeholder: '../assets/Portrait_Placeholder.png',
    picture: 'https://api.dicebear.com/6.x/bottts-neutral/svg?seed=ewrewrewr',
    navigationItems: [
      {
        linkName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum, eaque rerum!",
        onClick: "#"
      },
      {
        linkName: "And this is a long text to test the long content text texted to the content",
        onClick: "#"
      },
    ]
  },
};