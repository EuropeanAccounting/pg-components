import type { Meta, StoryObj } from '@storybook/react';

import { Formik, Form as FormikForm } from 'formik';
import Select from '../src/components/selects/Select';

const wrapper = (Story: any) => (
  <Formik
    initialValues={{ story: '' }}
    onSubmit={() => { }}
    validationSchema={undefined}
  >
    <FormikForm>
      <div className='w-[20rem]'>
        <Story />
      </div>
    </FormikForm>
  </Formik>
)

const meta = {
  title: 'Eigentümerportal/Selects/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: 'story',
    label: 'Select a day:',
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
    size: 'base',
    isLoading: false,
    isSearchable: false,
    isSecondary: false,
    isDisabled: false,
    isClearable: false,
    isMulti: false,
    required: false
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Required: Story = {
  args: {
    name: 'story',
    label: 'Select a fruit:',
    inputsList: [
      {
        label: 'Banana 🍌',
        value: 'ban'
      },
      {
        label: 'Apple 🍎',
        value: 'app'
      },
      {
        label: 'Cookie 🍪',
        value: 'coo'
      },
    ],
    required: true
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
    isDisabled: true
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const ManyOptions: Story = {
  args: {
    name: 'story',
    label: 'Select a car:',
    inputsList: [
      {
        label: 'Volvo',
        value: 'volvo'
      },
      {
        label: 'Ferrari',
        value: 'ferrari'
      },
      {
        label: 'Mercedes',
        value: 'mercedes'
      },
      {
        label: 'BMW',
        value: 'bmw'
      },
      {
        label: 'Toyota',
        value: 'toyota'
      },
      {
        label: 'Honda',
        value: 'honda'
      },
      {
        label: 'Ford',
        value: 'ford'
      },
      {
        label: 'Chevrolet',
        value: 'chevrolet'
      },
      {
        label: 'Audi',
        value: 'audi'
      },
      {
        label: 'Lamborghini',
        value: 'lamborghini'
      },
      {
        label: 'Porsche',
        value: 'porsche'
      },
      {
        label: 'Jaguar',
        value: 'jaguar'
      },
      {
        label: 'Subaru',
        value: 'subaru'
      },
      {
        label: 'Nissan',
        value: 'nissan'
      },
      {
        label: 'Mazda',
        value: 'mazda'
      },
      {
        label: 'Kia',
        value: 'kia'
      },
      {
        label: 'Hyundai',
        value: 'hyundai'
      },
      {
        label: 'Tesla',
        value: 'tesla'
      },
      {
        label: 'GMC',
        value: 'gmc'
      },
      {
        label: 'Jeep',
        value: 'jeep'
      }
    ],
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};