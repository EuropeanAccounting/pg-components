import type { Meta, StoryObj } from '@storybook/react';

import Badge from '../src/components/notifications/Badge';
import { faBell } from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Eigentümerportal/Notifications/Badge',
    component: Badge,
    tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 12,
    },
};

export const Success: Story = {
    args: {
        value: 435,
        type: 'success'
    },
};

export const Warning: Story = {
    args: {
        value: 5,
        type: 'warning'
    },
};

export const Danger: Story = {
    args: {
        value: 10,
        type: 'danger'
    },
};

export const Info: Story = {
    args: {
        value: 60,
        type: 'info'
    },
};

export const Squared: Story = {
    args: {
        value: 68,
        rounded: false,
    },
};

export const Animated: Story = {
    args: {
        value: 69,
        animate: true,
    },
};

export const Without_Value: Story = {};

export const With_Icon_And_Value: Story = {
    args: {
        icon: faBell,
        value: 13
    },
};