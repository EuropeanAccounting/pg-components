import React from 'react'
import { ErrorMessage } from 'formik'

const FormError = ({ name }: { name: string }): React.ReactElement => {
    return (
        <div className='h-4 block'>
            <ErrorMessage
                name={name}
                component='span'
                className='text-sm text-pink-500 mt-1'
            />
        </div>
    )
}

export default FormError