// Libraries imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import classNames from 'classnames';

interface Props {
    /**
     * Boolean to indicate wether the badge should be animated or not
     */
    animate?: boolean;
    /**
     * React className
     */
    className?: string;
    /**
     * FontAwesome icon displayed.
     */
    icon?: IconProp;
    /**
     * Indicates if the badge is round or not.
     */
    rounded?: boolean;
    /**
     * Value to display on the badge.
     */
    value?: number;
    /**
    * Type of badge.
    */
    type?: badgeType;
}

type badgeType = 'success' | 'warning' | 'info' | 'danger' | 'default';

const getContainerColorStyle = (type: badgeType): string => {
    const colors = {
        success: '  border-emerald-100  bg-emerald-50   text-emerald-700',
        warning: '  border-amber-100    bg-amber-50     text-amber-700',
        info: '     border-cyan-100     bg-cyan-50      text-cyan-700',
        danger: '   border-red-100      bg-red-50       text-red-700',
        default: '  border-primary-600  bg-primary-500  text-custom-white',
    };

    return colors[type];
};

export const Badge = ({
    animate = false,
    className,
    icon,
    rounded = true,
    type = 'default',
    value = undefined,
}: Props): JSX.Element =>
    <motion.span
        className={`
            min-h-[16px] min-w-[16px] flex items-center justify-center gap-1 px-1.5 text-sm text-white border
            ${rounded ? 'rounded-full' : 'rounded'} ${getContainerColorStyle(type)} ${className}
        `}
        animate={animate && {
            scale: [1, 1.5, 1],
            transition: {
                duration: .25,
                ease: 'easeIn',
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 5
            }
        }}
    >
        {
            icon &&
            <FontAwesomeIcon icon={icon} className='px-[2px]' />
        }
        <p className='p-[0.5px]'>
            {value}
        </p>
    </motion.span>

export default Badge;
