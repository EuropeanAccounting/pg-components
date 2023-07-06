import type { Meta, StoryObj } from '@storybook/react';

import { Notification } from '../src';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Eigentümerportal/Notifications/Notification',
  component: Notification,
  tags: ['autodocs'],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'New business partner added',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    icon: true,
    dismissable: true,
    type: 'default'
  },
};

export const Success: Story = {
  args: {
    title: 'YES! New record added',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    icon: true,
    type: 'success'
  },
};

export const Warning: Story = {
  args: {
    title: 'Check your permissions',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    icon: true,
    type: 'warning'
  },
};

export const Danger: Story = {
  args: {
    title: 'Error in the API call',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    icon: true,
    type: 'danger'
  },
};

export const Info: Story = {
  args: {
    title: 'You need to drink 1L a day',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    icon: true,
    type: 'info'
  },
};

export const Dismissable: Story = {
  args: {
    title: 'This is a DIMISSABLE notification',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    dismissable: true
  },
};

export const Timed: Story = {
  args: {
    title: 'This notification ends in 2s',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    duration: 2000,
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This notification has a long title so you can see what happen',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    icon: true,
    dismissable: true,
    type: 'info'
  },
};

export const NoBody: Story = {
  args: {
    title: 'This notification has a long title AND no body so you can see what happen',
    icon: true,
    dismissable: true,
    type: 'success'
  },
};