// React imports
import React, { MouseEvent, useEffect, useState } from 'react';

// Libraries imports
import { AnimatePresence, motion } from 'framer-motion';
import { faBolt, faCheck, faInfo, faLightbulb, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { alertType } from '../../types';

interface Props {
  /**
   * Title of the alert.
   */
  title: string;
  /**
   * Content of the alert.
   */
  body?: string;
  /**
   * Indicates whether the alert can be closed or not.
   */
  dismissable?: boolean;
  /**
   * Period of time (ms) before hidding the alert.
   */
  duration?: number;
  /**
   * Indicate whether the alert should display an icon or not.
   * The icon varies depending on the type of alert.
   */
  icon?: boolean;
  /**
   * Determines whether the alert is visible or not.
   */
  isVisible?: boolean;
  /**
   * A function that is executed after the UI component is hidden.
   */
  onHidden?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  /**
   * Type of alert.
   */
  type?: alertType;
}

const getContainerColorStyle = (type: alertType): string => {
  const colors = {
    success: 'border-emerald-100 bg-emerald-50 text-emerald-700 shadow-emerald-100 ring-emerald-100',
    warning: 'border-amber-100 bg-amber-50 text-amber-700 shadow-amber-100 ring-amber-100',
    info: 'border-cyan-100 bg-cyan-50 text-cyan-700 shadow-cyan-100 ring-cyan-100',
    danger: 'border-rose-100 bg-rose-50 text-rose-700 shadow-rose-100 ring-rose-100',
    default: 'border-primary-700 bg-primary-500 text-custom-white shadow-primary-100 ring-primary-100',
  };

  return colors[type];
};

const getIcon = (type: alertType): IconProp => {
  const icons = {
    success: faCheck,
    warning: faTriangleExclamation,
    info: faInfo,
    danger: faBolt,
    default: faLightbulb,
  };

  return icons[type];
}

const getButtonColorStyle = (type: alertType): string => {
  const colors = {
    success: 'text-emerald-700 hover:bg-emerald-200 hover:text-emerald-600 focus:bg-emerald-300 focus:text-emerald-700',
    warning: 'text-amber-700 hover:bg-amber-200 hover:text-amber-600 focus:bg-amber-300 focus:text-amber-700',
    info: 'text-cyan-700 hover:bg-cyan-200 hover:text-cyan-600 focus:bg-cyan-300 focus:text-cyan-700',
    danger: 'text-rose-700 hover:bg-rose-200 hover:text-rose-600 focus:bg-rose-300 focus:text-rose-700',
    default: 'text-custom-white hover:bg-primary-100 hover:text-primary-500 focus:bg-primary-600 focus:text-custom-white',
  };

  return colors[type];
};

const Notification = ({
  body,
  dismissable = false,
  duration,
  icon = false,
  isVisible = true,
  onHidden = () => null,
  title,
  type = 'default'
}: Props): React.ReactElement => {
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(isVisible);

  useEffect(() => {
    isVisible && duration &&
      setTimeout(() => {
        setIsAlertVisible(false);
        onHidden();
      }, duration);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {
        isAlertVisible &&
        <motion.div
          className={`
            relative flex w-80 max-w-full flex-col overflow-hidden rounded px-4 py-3 text-sm shadow-lg ring-1 ring-inset
            ${getContainerColorStyle(type)}
          `}
          role="status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: .5, ease: 'easeInOut' } }}
          exit={{ opacity: 0, transition: { duration: .5, ease: 'easeInOut' } }}
        >
          {/*  <!-- Heading with icon & close button --> */}
          <div className="flex items-center gap-4">
            {/*    <!-- Icon --> */}
            {icon && <FontAwesomeIcon icon={getIcon(type)} className='h-6 w-6 text-xl' />}
            {/*    <!-- Headline --> */}
            <h3 className="flex-1 font-semibold">
              {title}
            </h3>
            {/*  <!-- Close button --> */}
            {
              dismissable &&
              <motion.button
                aria-label="Close"
                className={`
                  inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-4 text-xs
                  font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed 
                  disabled:shadow-none disabled:hover:bg-transparent
                  ${getButtonColorStyle(type)}
                `}
                whileHover={{ rotate: 90 }}
                transition={{
                  ease: "linear",
                  duration: 0.01
                }}
                onClick={(e) => onHidden(e)}
              >
                <span className="relative only:-mx-4 text-xl flex">
                  <FontAwesomeIcon icon={faXmark} />
                </span>
              </motion.button>
            }
          </div>
          {/*  <!-- Body --> */}
          {
            body &&
            <div className={`mt-2 ${icon && 'pl-9'}`}>
              <p>{body}</p>
            </div>
          }
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default Notification;