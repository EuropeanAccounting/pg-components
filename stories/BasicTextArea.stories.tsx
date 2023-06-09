import type { Meta, StoryObj } from '@storybook/react';

import { Formik, Form as FormikForm } from 'formik';
import { TextArea } from '../src';

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

const wrapperWithContent = (Story: any) => (
  <Formik
    initialValues={{ story: 'Test Value' }}
    onSubmit={() => { }}
    validationSchema={undefined}
  >
    <FormikForm>
      <Story />
    </FormikForm>
  </Formik>
)

const meta = {
  title: 'Eigentümerportal/Text Area/Basic Text Area',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: 'story',
    label: 'This is a text area'
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Large: Story = {
  args: {
    name: 'story',
    label: 'This is a LARGE text area',
    size: 'large'
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Required: Story = {
  args: {
    name: 'story',
    label: 'This is a required text area',
    required: true
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Disabled: Story = {
  args: {
    name: 'story',
    label: 'This is a disabled text area',
    disabled: true
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const ReadOnly: Story = {
  args: {
    name: 'story',
    label: 'This is a read only text area',
    readOnly: true,
  },
  decorators: [
    (Story) => wrapperWithContent(Story),
  ]
};