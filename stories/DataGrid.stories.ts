import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../src';

const meta = {
  title: 'Eigentümerportal/DataGrids',
  component: Button,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Simple Grid',
    onClick: () => window.open('https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/SimpleArray/React/Light/')
  }
};

export const Grouping: Story = {
  args: {
    text: 'Grouping Grid',
    onClick: () => window.open('https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordGrouping/React/Light/')
  }
};

export const SortingAndFiltering: Story = {
  args: {
    text: 'Sorting & Filtering',
    onClick: () => window.open('https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/React/Light/')
  }
};

export const Editing: Story = {
  args: {
    text: 'Editing with popup',
    onClick: () => window.open('https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PopupEditing/React/Light/')
  }
};