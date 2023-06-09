import React from 'react'

// Libraries imports
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Local imports
import { itemVariants } from '../../framerMotion/dropdownVariants';
import { sizeType } from "../../types/sizeType";

interface Props {
    /**
     * Array of activities to display
     */
    activities: ActivityInterface[];
    /**
     * Size of the feed
     */
    size?: sizeType;
    /**
     * Specifies whether the component is visible or nots
     */
    visible?: boolean;
}

const variantsUL = {
    open: {
        opacity: 1,
        height: '100%',
        transition: { duration: .5, ease: 'easeInOut', staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        opacity: 0,
        height: 0,
        transition: { duration: .5, ease: 'easeInOut', staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const getSize = (size: sizeType): string =>
    size === 'base'
        ? 'pl-8 before:left-8 after:left-8'
        : 'pl-6 before:left-6 after:left-6';

export const ActivityFeed = ({
    activities,
    size = 'base',
    visible = true
}: Props): React.ReactElement => (
    <AnimatePresence>
        {
            visible &&
            <motion.ul
                layout
                aria-label='Activity feed'
                role='feed'
                className={`
                    after:-translate-x-1/2 after:absolute after:border after:bottom-6 after:top-6 before:-translate-x-1/2 
                    before:absolute before:border before:border-dashed before:h-full before:top-0 flex flex-col gap-12 
                    py-12 relative
                    before:border-primary-200 after:border-primary-200
                    ${getSize(size)}
                `}
                variants={variantsUL}
                initial='closed'
                animate='open'
                exit='closed'
            >
                {
                    activities.map(activity =>
                        <Activity
                            activity={activity}
                            size={size}
                            key={activity.description}
                        />
                    )
                }
            </motion.ul >
        }
    </AnimatePresence>
)

export default ActivityFeed;

interface ActivityInterface {
    description: string,
    icon: IconProp,
    time: string;
}

interface ActivityProps {
    activity: ActivityInterface;
    size: sizeType;
}

const Activity = ({ activity, size }: ActivityProps): React.ReactElement => {
    const { description, icon, time } = activity;
    return (
        <motion.li
            role='article'
            className={`relative ${size == 'base' ? 'pl-8' : 'pl-6'} z-10`}
            variants={itemVariants}
        >
            <span
                className={`
                    -translate-x-1/2 absolute flex items-center justify-center left-0 ring-2 
                    rounded-full z-10 ring-white bg-secondary-500 text-white
                    ${size == 'base' ? 'w-10 h-10' : 'w-8 h-8'}
                `}
            >
                <FontAwesomeIcon icon={icon} />
            </span>
            <div className='flex flex-col flex-1 gap-0'>
                <h4 className='text-base font-medium text-secondary-700'>
                    {` ${description} `}
                </h4>
                <p className={`${size == 'base' ? 'text-sm' : 'text-xs'} text-secondary-500`}>
                    {time}
                </p>
            </div>
        </motion.li>
    )
}