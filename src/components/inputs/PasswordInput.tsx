// React imports
import React, { useId, useState } from 'react';

// Libraries imports
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Local imports
import FormError from '../notifications/FormError';

interface Props {
  /**
  * HTML name field
  */
  name: string;
  /**
  * Floating input label text
  */
  label?: string;
  /**
  * Mark input with secondary style
  */
  isSecondary?: boolean;
  /**
  * Required HTML prop
  */
  required?: boolean;
  /**
  * Disabled HTML prop
  */
  disabled?: boolean;
  /**
  * Read only HTML prop
  */
  readOnly?: boolean;
}

export default function PasswordInput(props: Props): React.ReactElement {
  const { label, isSecondary, ...rest } = props;

  const inputId = useId();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative">
      <Field
        {...rest}
        id={inputId}
        type={showPassword ? "text" : "password"}
        placeholder={label}
        className={`peer relative h-12 w-full border-slate-200 px-4 text-slate-500
          ${isSecondary ? 'rounded border' : 'border-b'} ${rest.readOnly ? 'border-dashed' : 'border-solid'}
          placeholder-transparent outline-none transition-all autofill:bg-white
          focus:border-primary-500
          focus:outline-none focus-visible:outline-none
          disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
      />
      <label
        htmlFor={inputId}
        className="absolute left-2 -top-2 z-[1] cursor-text select-none px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:rounded before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-primary-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
      >
        {label}
      </label>
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        onClick={() => !rest.disabled && setShowPassword(!showPassword)}
        className="absolute top-3 right-4 h-6 w-6 cursor-pointer text-slate-400 peer-disabled:cursor-not-allowed"
      />
      <FormError name={rest.name} />
    </div>
  )
}