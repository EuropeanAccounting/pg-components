import type { Meta, StoryObj } from '@storybook/react';

import { Formik, Form as FormikForm } from 'formik';
import { RadioGroup } from '../src';

const wrapper = (Story: any) => (
  <Formik
    initialValues={{ story: '' }}
    onSubmit={() => { }}
    validationSchema={undefined}
  >
    <FormikForm>
      <Story />
    </FormikForm>
  </Formik>
)

const meta = {
  title: 'Eigentümerportal/Radio Groups/Basic Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: 'story',
    label: 'Radio group:',
    inputsList: [
      {
        label: 'Monday',
        value: 'Monday'
      },
      {
        label: 'Wednesday',
        value: 'Wednesday'
      },
      {
        label: 'Friday',
        value: 'Friday'
      },
    ],
    disabled: false,
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Disabled: Story = {
  args: {
    name: 'story',
    label: 'Select a country (you can\'t):',
    inputsList: [
      {
        label: 'Spain',
        value: 'es'
      },
      {
        label: 'France',
        value: 'fr'
      },
      {
        label: 'Germany',
        value: 'de'
      },
    ],
    disabled: true,
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};