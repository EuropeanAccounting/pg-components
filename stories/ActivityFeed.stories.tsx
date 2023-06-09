// Libraries imports
import { faBolt, faList, faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';

// Local imports
import { ActivityFeed } from '../src';


const meta = {
    title: 'Eigentümerportal/Feeds/Activity Feed',
    component: ActivityFeed,
    tags: ['autodocs'],
} satisfies Meta<typeof ActivityFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

const activities = [
    {
        description: 'UI/UX project created',
        icon: faGithub,
        time: '13:12pm'
    },
    {
        description: 'Task list created for project',
        icon: faList,
        time: '13:31pm'
    },
    {
        description: 'Warning! Project name cannot be empty',
        icon: faBolt,
        time: '13:32pm'
    },
    {
        description: 'New user added',
        icon: faUserPlus,
        time: '13:56pm'
    },
    {
        description: 'Warning! Project is going to be expired',
        icon: faBolt,
        time: '14:32pm'
    },
    {
        description: 'Project deleted',
        icon: faTrashCan,
        time: '14:32pm'
    },
]

export const Default: Story = {
    args: { activities },
};

export const Small: Story = {
    args: { 
        activities,
        size: 'large'
    },
};
