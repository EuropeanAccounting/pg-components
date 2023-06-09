import type { Meta, StoryObj } from '@storybook/react';

import BasicModal from '../src/components/modals/BasicModal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Eigentümerportal/Modals/Basic Modal',
  component: BasicModal,
  tags: ['autodocs'],
} satisfies Meta<typeof BasicModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    labelText: 'Open Modal',
    title: 'This is a test modal',
    bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi!',
    showCloseButton: true,
    hideOnOutsideClick: true
  },
};

export const LargeBody: Story = {
  args: {
    labelText: 'Long Text Modal',
    title: 'This is a test modal',
    bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur!',
    showCloseButton: true,
    hideOnOutsideClick: true
  },
};
