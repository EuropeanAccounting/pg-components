import type { Meta, StoryObj } from '@storybook/react';

import ConfirmationModal from '../src/components/modals/ConfirmationModal';
import { faTrashCan, faQuestion, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Eigentümerportal/Modals/Confirmation Modal',
  component: ConfirmationModal,
  tags: ['autodocs'],
} satisfies Meta<typeof ConfirmationModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    labelText: 'Open Modal',
    title: 'Are you sure?',
    bodyText: 'After deleting the file, recovery will not be possible',
    hideOnOutsideClick: true,
    icon: faTrashCan,
    iconColor: 'danger',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes, I\'m sure',
    cancelButtonText: 'No, cancel',
    onConfirm: () => alert('FILE DELETED!')
  },
};

export const NoCancelButton: Story = {
  args: {
    labelText: 'Open Modal',
    title: 'Why you clicked?',
    bodyText: 'Now you have superpowers',
    hideOnOutsideClick: false,
    icon: faQuestion,
    iconColor: 'info',
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'WOW THANKS!',
  },
};

export const NoIcon: Story = {
  args: {
    labelText: 'Open Modal',
    title: 'No icon modal',
    bodyText: 'Now I\'m sad 😪',
    hideOnOutsideClick: false,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'I like icons',
  },
};

export const OnlyTitle: Story = {
  args: {
    labelText: 'Open Modal',
    title: 'Soon you will have to file the 210 tax form',
    icon: faTriangleExclamation,
    iconColor: 'warning',
    hideOnOutsideClick: true,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'Okay',
  },
};

export const OnlyBody: Story = {
  args: {
    labelText: 'Open Modal',
    bodyText: 'Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!',
    hideOnOutsideClick: false,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Whats this?',
    onConfirm: () => window.open('https://es.wikipedia.org/wiki/Lorem_ipsum')
  },
};
