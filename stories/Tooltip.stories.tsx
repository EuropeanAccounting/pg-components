// Libraries imports
import type { Meta, StoryObj } from '@storybook/react';

// Local imports
import { Tooltip } from '../src';

const meta = {
    title: 'Eigentümerportal/Tooltips/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Lorem ipsum'
    },
};

export const Right: Story = {
    args: {
        text: 'Lorem ipsum',
        position: 'right',
    },
};

export const Bottom: Story = {
    args: {
        text: 'Lorem ipsum',
        position: 'bottom',
    },
};

export const Left: Story = {
    args: {
        text: 'Lorem ipsum',
        position: 'left',
    },
};