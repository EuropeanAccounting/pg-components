import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../src';

const meta = {
  title: 'Eigentümerportal/Charts',
  component: Button,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BarChart: Story = {
  args: {
    text: 'Bar docs',
    onClick: () => window.open('https://nivo.rocks/bar/')
  }
};

export const LineChart: Story = {
  args: {
    text: 'Line docs',
    onClick: () => window.open('https://nivo.rocks/line/')
  }
};

export const PieChart: Story = {
  args: {
    text: 'Pie docs',
    onClick: () => window.open('https://nivo.rocks/pie/')
  }
};