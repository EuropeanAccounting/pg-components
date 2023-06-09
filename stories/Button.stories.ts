// Libraries imports
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';

// Local imports
import { Button } from '../src';

const meta = {
    title: 'Eigentümerportal/Buttons/Buttons',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Default Button',
    }
};

export const Squared: Story = {
    args: {
        rounded: false,
        text: 'Squared Button',
    }
};

export const WithoutText: Story = {};

export const Large: Story = {
    args: {
        size: 'large',
        text: 'Large Button',
    }
};

export const Disabled: Story = {
    args: {
        disabled: true,
        text: 'Disabled Button',
    }
};

export const Outline: Story = {
    args: {
        style: 'outline',
        text: 'Outline Button',
    }
};

export const Elevated: Story = {
    args: {
        elevated: true,
        text: 'Elevated Button',
    }
};

export const OnlyIcon: Story = {
    args: {
        icon: faFontAwesome,
    }
};

export const LeadingIcon: Story = {
    args: {
        icon: faFontAwesome,
        iconPosition: 'leading',
        text: 'Leading Icon',
    }
};

export const TrailingIcon: Story = {
    args: {
        icon: faFontAwesome,
        iconPosition: 'trailing',
        text: 'Trailing Icon',
    }
};

