// React imports
import React, { useState } from 'react';

// Libraries imports
import { faChevronRight, faXmark, faBan } from '@fortawesome/free-solid-svg-icons';
import { Field, FieldInputProps, FieldProps } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import ReactDatePicker from 'react-datepicker';

interface Props {
    /**
    * Name HTML prop
    */
    name: string;
    /**
    * Date selected value
    */
    value: string;
    /**
    * Select text label
    */
    label?: string;
    /**
    * Mark input with secondary style
    */
    isSecondary?: boolean;
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
    * Disabled HTML prop
    */
    isDisabled?: boolean;
    /**
     * Determines whether a small space should be reserved for a error message or not.
     */
    needsErrorMessage?: boolean;
}

const DatePicker = ({
    value,
    label,
    isSearchable = false,
    isClearable = false,
    isMulti = false,
    needsErrorMessage = true,
    ...rest
}: Props): React.ReactElement => {
    return (
        <div
            className={
                classNames(
                    'w-full relative',
                    rest.isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
                )
            }
        >
            <Field name={rest.name} >
                {({ form, field }: FieldProps) => (
                    <>
                        <ReactDatePicker
                            onChange={(date) => {
                                form.setFieldValue(rest.name, date)
                            }}
                        />
                        <label
                            htmlFor={rest.name}
                            className={
                                classNames(
                                    "pointer-events-none absolute left-2 z-[1] px-2 transition-all",
                                    "before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all",
                                    // labelMenuIsOpenClasses(field),
                                    rest.isDisabled ? 'text-slate-400 before:bg-transparent' : 'before:bg-white'
                                )
                            }
                        >
                            {label}
                        </label>
                    </>
                )}
            </Field>
        </div>
    )
}

export default DatePicker