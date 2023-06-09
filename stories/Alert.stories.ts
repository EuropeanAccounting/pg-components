import type { Meta, StoryObj } from '@storybook/react';

import Alert from '../src/components/notifications/Alert';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Eigentümerportal/Notifications/Alert',
  component: Alert,
  tags: ['autodocs'],
  // argTypes: {
  //   label: { control: 'color' },
  // },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
  },
};

export const Success: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    type: 'success'
  },
};

export const Warning: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    type: 'warning'
  },
};

export const Danger: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    type: 'danger'
  },
};

export const Info: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    type: 'info'
  },
};

export const With_Title: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    title: 'Lorem ipsum',
  },
};

export const Dismissable: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    dismissable: true
  },
};

export const With_Icon: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    icon: true
  },
};

export const Everything: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet maximus lorem. Sed lobortis vitae arcu non tincidunt. Fusce in arcu quis massa vulputate euismod ac sed turpis. Donec porta sollicitudin nibh vel aliquet.',
    isVisible: true,
    dismissable: true,
    icon: true,
    title: 'Lorem ipsum'
  },
};