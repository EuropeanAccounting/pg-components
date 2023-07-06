// React imports
import React, { ButtonHTMLAttributes, MouseEvent } from 'react';

// Libraries imports
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Local imports
import { sizeType } from "../../types/sizeType";

interface Props {
    /**
     *  Specifies whether the UI component responds to user interaction.
     */
    disabled?: boolean;
    /**
    * Specifies whether the UI component should include a shadow that makes it look elevated.
    */
    elevated?: boolean;
    /**
    * Specifies whether the UI component includes an FontAwesome icon or not.
    */
    icon?: IconDefinition;
    /**
    * Specifies the icon position if any.
    */
    iconPosition?: iconPositionType;
    /**
    * A function that is executed when the Button is clicked or tapped.
    */
    onClick?: (e: MouseEvent) => void;
    /**
    * Specifies the border radius of the component.
    */
    rounded?: boolean;
    /**
    * Specifies the size of the component.
    */
    size?: sizeType;
    /**
    * Specifies the style of the component.
    */
    style?: styleType;
    /**
    * If true show a loading animation
    */
    isLoading?: boolean;
    /**
     * Specifies the text fo the component.
     */
    text?: string;
    /**
     * Type of button
     */
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

type iconPositionType = 'leading' | 'trailing';
type styleType = 'normal' | 'outline' | 'danger' | 'success' | 'secondary';

const getContainerColors = (style: styleType): string => {
    switch (style) {
        case 'outline':
            return 'border border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 focus:border-primary-700 focus:text-primary-700 disabled:text-primary-300 bg-white'
        case 'danger':
            return 'bg-rose-500 hover:bg-rose-600 focus:bg-rose-700 disabled:bg-rose-300 shadow-rose-200 text-white'
        case 'success':
            return 'bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:bg-emerald-300 shadow-emerald-200 text-white'
        case 'secondary':
            return 'bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 disabled:bg-secondary-300 shadow-secondary-200 text-white'
        // Case normal
        default:
            return 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 disabled:bg-primary-300 shadow-primary-200 text-white'
    }
}

const getSize = (size: sizeType): string => {
    const sizes = {
        large: 'h-12 px-6',
        base: ' h-10 px-5',
    };

    return sizes[size];
}

const getShadow = (size: sizeType): string => size == 'large' ? 'shadow-lg' : 'shadow-md';

export const Button = ({
    text,
    icon,
    onClick,
    size = 'base',
    style = 'normal',
    iconPosition = 'trailing',
    isLoading = false,
    rounded = false,
    elevated = false,
    disabled = false,
    type = 'button'
}: Props): React.ReactElement =>
    <AnimatePresence>
        <motion.button
            className={`inline-flex w-full font-semibold items-center justify-center gap-2 text-sm tracking-wide transition duration-300 
                whitespace-nowrap focus-visible:outline-none disabled:cursor-not-allowed disabled:shadow-none
                disabled:border-primary-300 focus:shadow-primary-200 hover:shadow-primary-200 
                ${rounded ? 'rounded-full' : 'rounded'} ${elevated && getShadow(size)} ${getSize(size)} ${getContainerColors(style)}`}
            initial={false}
            whileTap={{ y: 2 }}
            transition={{
                ease: 'linear',
                duration: 0.001
            }}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {
                text &&
                <span
                    className={`${(icon && iconPosition == 'leading') && 'order-2'}`}
                >
                    {text}
                </span>
            }
            {
                icon &&
                <span className={`relative ${size == 'base' ? 'only:-mx-5' : 'only:-mx-6'}`}>
                    <FontAwesomeIcon icon={icon} />
                </span>
            }
            {
                isLoading &&
                <span className="relative only:-mx-6">
                    <svg
                        className={`w-5 h-5 animate-spin ${style === 'outline' ? 'text-primary-500' : 'text-white'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        role="graphics-symbol"
                        aria-labelledby="title-36 desc-36"
                    >
                        <title id="title-36">Loading icon</title>
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </span>
            }
        </motion.button>
    </AnimatePresence>

export default Button;