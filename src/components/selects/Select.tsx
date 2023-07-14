// React imports
import React, { useState } from 'react';

// Libraries imports
import { faChevronRight, faXmark, faBan } from '@fortawesome/free-solid-svg-icons';
import { Field, FieldInputProps, FieldProps } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import ReactSelect,
{
    ClearIndicatorProps,
    DropdownIndicatorProps,
    IndicatorSeparatorProps,
    MenuProps,
    MultiValueGenericProps,
    MultiValueRemoveProps,
    NoticeProps
} from 'react-select';

// Local imports
import { sizeType } from '../../types/sizeType';
import FormError from '../notifications/FormError';

/////////////////////// Start Select Components ///////////////////////
const DropdownIndicator = ({ selectProps }: DropdownIndicatorProps): React.ReactElement => {
    // @ts-ignore
    const { menuIsOpen, size } = selectProps;
    return (
        <motion.span
            initial={{
                rotate: 0,
            }}
            animate={{
                rotate: menuIsOpen ? 90 : 0,
                transition: {
                    type: 'spring'
                },
            }}
            className={size === 'base' ? 'h-4 w-4' : 'h-5 w-5'}
        >
            <FontAwesomeIcon
                icon={faChevronRight}
                className={
                    classNames(
                        'transition-all h-full w-full',
                        menuIsOpen ? 'text-slate-500' : 'text-slate-400'
                    )
                }
            />
        </motion.span>
    )
}

const IndicatorSeparator = ({ innerProps, selectProps }: IndicatorSeparatorProps): React.ReactElement => {
    const { menuIsOpen } = selectProps;
    return (
        <span
            {...innerProps}
            className={
                classNames(
                    'self-stretch mx-2 my-3 w-[1px]',
                    menuIsOpen ? 'bg-primary-500' : 'bg-slate-400'
                )
            }
        />
    )
}

const ClearIndicator = ({ innerProps, selectProps }: ClearIndicatorProps): React.ReactElement => {
    // @ts-ignore
    const { menuIsOpen, size } = selectProps;
    return (
        <span
            {...innerProps}
            className={size === 'base' ? 'h-4 w-4' : 'h-5 w-5'}
        >
            <FontAwesomeIcon
                icon={faXmark}
                className={
                    classNames(
                        'transition-all h-full w-full',
                        menuIsOpen ? 'text-slate-500' : 'text-slate-400'
                    )
                }
            />
        </span>
    )
}

const Menu = ({ children, selectProps, innerRef, innerProps }: MenuProps): React.ReactElement => {
    const { menuIsOpen } = selectProps;
    return (
        <motion.div
            // @ts-ignore
            ref={innerRef}
            className='flex absolute top-full z-10 mt-1 max-h-64 w-full list-none flex-col rounded bg-white py-2 shadow-lg shadow-slate-500/10'
            initial={{
                clipPath: 'inset(10% 75% 90% 25%)'
            }}
            animate={{
                clipPath: menuIsOpen ? 'inset(-20% -20% -20% -20%)' : undefined,
                transition: menuIsOpen ?
                    {
                        type: 'spring',
                        bounce: 0,
                        duration: 0.5,
                        delayChildren: 0.1,
                        staggerChildren: 0.05
                    }
                    : undefined
            }}
            {...innerProps}
        >
            {children}
        </motion.div>
    )
}

const MultiValueContainer = ({ children, innerProps }: MultiValueGenericProps): React.ReactElement => (
    <motion.div
        initial={{
            clipPath: 'inset(0% 100% 0% 0%)'
        }}
        animate={{
            clipPath: 'inset(0% 0% 0% 0%)',
            transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.5
            }
        }}
        {...innerProps}
    >
        <div className='flex flex-row gap-2 items-center justify-center rounded bg-slate-100 px-1 ml-1 mb-1'>
            {children}
        </div>
    </motion.div>
)

const MultiValueRemove = ({ innerProps, selectProps }: MultiValueRemoveProps): React.ReactElement => {
    // @ts-ignore
    const { size } = selectProps;
    return (
        <span
            {...innerProps}
            className={size === 'base' ? 'h-4 w-4' : 'h-5 w-5'}
        >
            <FontAwesomeIcon
                icon={faXmark}
                className={'w-full h-full text-slate-400'}
            />
        </span>
    )
}

const NoOptionsMessage = ({ innerProps, selectProps }: NoticeProps): React.ReactElement => {
    // @ts-ignore
    const { size } = selectProps;
    return (
        <span
            {...innerProps}
            className='flex flex-row justify-center my-2 w-full h-full'
        >
            <FontAwesomeIcon
                icon={faBan}
                className={'text-slate-400/50 ' + (size === 'base' ? 'h-7 w-7' : 'h-8 w-8')}
            />
        </span>
    )
}
/////////////////////// End Select Components ///////////////////////

interface Props {
    /**
    * Name HTML prop
    */
    name: string;
    /**
    * List of inputs to display
    */
    inputsList?: {
        label: string;
        value: string;
    }[];
    /**
    * An object from the inputsList to set as default
    */
    defaultValue?: {
        label: string;
        value: string;
    }
    /**
    * Select text label
    */
    label?: string;
    /**
    * Mark input with secondary style
    */
    isSecondary?: boolean;
    /**
    * Show loading icon
    */
    isLoading?: boolean;
    /**
    * Show clear button
    */
    isClearable?: boolean;
    /**
    * Enable multiple select
    */
    isMulti?: boolean;
    /**
    * Activate search functionality
    */
    isSearchable?: boolean;
    /**
    * Required HTML prop
    */
    required?: boolean;
    /**
    * Read only HTML prop
    */
    readOnly?: boolean;
    /**
    * Disabled HTML prop
    */
    isDisabled?: boolean;
    /**
    * Specifies the size of the component
    */
    size?: sizeType;
    /**
    * Specifies if the form should submit onChange
    */
    submitOnChange?: boolean;
    /**
     * Determines whether a small space should be reserved for a error message or not.
     */
    needsErrorMessage?: boolean;
}

const Select = ({
    inputsList,
    label,
    size = 'base',
    isSearchable = false,
    isClearable = false,
    isMulti = false,
    submitOnChange = false,
    needsErrorMessage = true,
    readOnly = false,
    ...rest
}: Props): React.ReactElement => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    rest.required && (label += ' *');

    const requiredNoValue = (field: FieldInputProps<any>) => rest.required && !field.value;
    const isBase = () => size === 'base';

    const labelMenuIsOpenClasses = (field: FieldInputProps<any>): string => {
        if (menuIsOpen && !readOnly) {
            const isMultiClasses = isMulti ? '-top-4' : '-top-2';
            const requiredClasses = requiredNoValue(field) ? 'text-pink-500' : 'text-primary-500';
            return classNames('text-xs', isMultiClasses, requiredClasses);
        } else {
            const isBaseClasses = isBase() ? 'top-2.5 text-sm' : 'top-3 text-base';
            const textClasses = field.value ? '-top-2 text-xs' : isBaseClasses;
            return classNames('text-slate-400', textClasses);
        }
    };

    const getControlClasses = (isDisabled: boolean, menuIsOpen: boolean, field: FieldInputProps<any>): string => {
        const baseClasses = 'w-full px-4 transition-all';

        const isMultiIsBaseClasses = isBase() ? 'min-h-[2.5rem] text-sm' : 'min-h-[3rem] text-base';
        const notIsMultiIsBaseClasses = isBase() ? 'h-10 text-sm' : 'h-12 text-base';
        const isMultiClasses = isMulti ? classNames(isMultiIsBaseClasses, 'h-auto') : notIsMultiIsBaseClasses;

        const isSecondaryClasses = rest.isSecondary ? 'rounded border' : 'border-b';
        const isReadOnlyClasses = readOnly ? 'border-dashed' : '';

        const menuIsOpenRequired = requiredNoValue(field) ? 'border-pink-500' : 'border-primary-500';
        const menuIsOpenClasses = menuIsOpen ? menuIsOpenRequired : 'border-slate-200';

        const isDisabledClasses = isDisabled ? 'bg-slate-50 text-slate-400' : 'bg-white text-slate-500';

        return classNames(baseClasses, isMultiClasses, isSecondaryClasses, isReadOnlyClasses, menuIsOpenClasses, isDisabledClasses)
    };

    return (
        <div
            className={
                classNames(
                    'w-full relative',
                    rest.isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
                )
            }
        >
            <Field name={rest.name}>
                {({ form, field }: FieldProps) => (
                    <>
                        {
                            // This is important for the CSS classes to be aplied correctly
                            isMulti
                            && Array.isArray(field.value)
                            && field.value.length === 0
                            && (field.value = undefined)
                        }
                        <ReactSelect
                            {...rest}
                            id={rest.name}
                            unstyled
                            components={{
                                // @ts-ignore
                                DropdownIndicator, IndicatorSeparator, ClearIndicator, MultiValueContainer, MultiValueRemove, Menu, NoOptionsMessage
                            }}
                            isSearchable={isSearchable && !readOnly}
                            isClearable={isClearable}
                            isMulti={isMulti}
                            closeMenuOnSelect={!isMulti}
                            menuIsOpen={readOnly ? false : undefined}
                            blurInputOnSelect={!isMulti}
                            onMenuOpen={() => setMenuIsOpen(true)}
                            onMenuClose={() => setMenuIsOpen(false)}
                            // @ts-ignore
                            size={size}
                            placeholder=''
                            options={inputsList}
                            onChange={(newValue: any) => {
                                form.setFieldTouched(rest.name)
                                const returnValue = !isMulti
                                    ? newValue.value ?? ''
                                    : newValue.map((obj: { value: string, label: string }) => obj.value)
                                form.setFieldValue(rest.name, returnValue)
                                submitOnChange && form.submitForm()
                            }}
                            classNames={{
                                control: ({ isDisabled, menuIsOpen }) => getControlClasses(isDisabled, menuIsOpen, field),
                                option: ({ isSelected }) =>
                                    classNames(
                                        "w-full flex items-start justify-start px-5 transition-colors duration-300",
                                        "hover:bg-primary-100 hover:text-primary-500 focus:bg-primary-300 focus:outline-none focus-visible:outline-none",
                                        isSelected ? 'bg-primary-600 text-primary-100' : 'bg-none text-slate-500',
                                        isBase() ? 'gap-2 p-2' : 'gap-3 p-3'
                                    ),
                            }}
                        />
                        <label
                            htmlFor={rest.name}
                            className={
                                classNames(
                                    "pointer-events-none absolute left-2 z-[1] px-2 transition-all",
                                    "before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all",
                                    labelMenuIsOpenClasses(field),
                                    rest.isDisabled ? 'text-slate-400 before:bg-transparent' : 'before:bg-white'
                                )
                            }
                        >
                            {label}
                        </label>
                    </>
                )}
            </Field>
            {
                needsErrorMessage &&
                <FormError name={rest.name} />
            }
        </div>
    )
}

export default Select