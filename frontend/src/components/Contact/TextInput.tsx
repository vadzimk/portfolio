import {Path, RegisterOptions, useFormContext} from 'react-hook-form';
import React from 'react';
import {IFormValues} from './Form';

type InputProps = {
    type?: string;
    label: string;
    name: Path<IFormValues>;
    options: RegisterOptions;
    className?: string;
};

export default function TextInput ({type, label, name, options, className}: InputProps) {
    const {register, formState: {errors}} = useFormContext(); // retrieve all hook methods
    // console.log(name, errors[name])

    let Component = (props) => <input {...props} {...register(name, options)}/> as React.ReactElement
    if (type === 'textarea')
        Component = (props) => <textarea {...props} {...register(name, options)}/> as React.ReactElement

    return (
        <div className={className}>
            <div className="relative h-full">
                <Component
                    type="text"
                    id={`input_${name}`}
                    aria-describedby="filled_error_help"
                    placeholder=" "
                    className={`block px-3 pb-2.5 pt-5 w-full h-full bg-white
                    border border-slate-100 box-border appearance-none 
                    shadow-[inset_1px_2px_4px_rgba(0,0,0,0.1)]
                    focus:outline-none focus:ring-0 peer 
                    ${errors[name] ? 'border-secondary1 border-b-2' : ''}
                    overflow-scroll resize-none
                    `}
                />
                <label htmlFor={`input_${name}`}
                       className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 opacity-70">
                    {label}
                </label>
            </div>
            <div id="filled_error_help"
                 className={`mt-0.5 text-xs text-[#AA72E2FF] absolute ${errors[name]?.type === 'required'} '' ? 'hidden'`}
            >
                {errors[name]?.message as string}
            </div>

        </div>);
};