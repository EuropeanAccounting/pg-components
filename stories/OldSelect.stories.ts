import type { Meta, StoryObj } from '@storybook/react';

import OldSelect from '../src/components/selects/OldSelect';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Eigentümerportal/Selects/OldSelect',
  component: OldSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof OldSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    labelText: 'Select a day:',
    inputsList: [
      {
        labelText: 'Monday',
        value: 'Monday'
      },
      {
        labelText: 'Wednesday',
        value: 'Wednesday'
      },
      {
        labelText: 'Friday',
        value: 'Friday'
      },
    ],
    isDisabled: false,
    isRequired: false,
    onValueChanged: (e) => alert('The selected value now is: ' + e)
  },
};

export const Required: Story = {
  args: {
    labelText: 'Select a fruit:',
    inputsList: [
      {
        labelText: 'Banana 🍌',
        value: 'ban'
      },
      {
        labelText: 'Apple 🍎',
        value: 'app'
      },
      {
        labelText: 'Cookie 🍪',
        value: 'coo'
      },
    ],
    isRequired: true,
  },
};

export const Disabled: Story = {
  args: {
    labelText: 'Select a country (you can\'t):',
    inputsList: [
      {
        labelText: 'Spain',
        value: 'es'
      },
      {
        labelText: 'France',
        value: 'fr'
      },
      {
        labelText: 'Germany',
        value: 'de'
      },
    ],
    isDisabled: true,
  },
};