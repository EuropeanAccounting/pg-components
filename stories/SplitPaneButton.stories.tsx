import type { Meta, StoryObj } from '@storybook/react';
import { useState } from "react";

import SplitPane from '../src/components/splitPane/SplitPane';

const meta = {
  title: 'Eigentümerportal/Split Pane/Split PaneAnimation',
  component: SplitPane,
  tags: ['autodocs'],
} satisfies Meta<typeof SplitPane>;

export default meta;
type Story = StoryObj<typeof SplitPane>;

const Wrapper = (Story: any) => {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <div className="w-[75rem] h-[75rem]">
      <button
        className='w-10'
        type="button"
        onClick={() => {
          setVisible((visible) => !visible);
        }}
      >
        {visible ? "Hide" : "Show"}
      </button>
      <Story visible={visible} />
    </div>
  )
}

export const SplitPaneButton: Story = {
  args: {
  },
  decorators: [
    (Story) => Wrapper(Story),
  ]
};
