import {
    Path,
    useForm,
    UseFormRegister,
    SubmitHandler,
    useFormState,
    FormProvider,
    useFormContext
} from "react-hook-form";

import React, {ReactElement} from 'react';


interface IFormValues {
    "message": string;
    "subject": string;
    "email": string;
}

type InputProps = {
    type?: string;
    label: string;
    name: Path<IFormValues>;
    required: boolean;
    className?: string;
};
// The following component is an example of your existing Input Component
const TextInput = ({type, label, name, required, className}: InputProps) => {
    const {register, formState: {errors}} = useFormContext(); // retrieve all hook methods
    console.log(name, errors[name])

    let Component = (props) => <input {...props} {...register(name, {required: "Required"})}/> as React.ReactElement
    if (type === 'textarea')
        Component = (props) => <textarea {...props} {...register(name, {required: "Required"})}/> as React.ReactElement

    return (
        <div className={className}>
            <div className="relative h-full">
                <Component
                    type="text"
                    id="filled_error"
                    aria-describedby="filled_error_help"
                    placeholder=" "
                    className={`block px-3 pb-2.5 pt-5 w-full h-full text-sm bg-white
                    border-0 box-border appearance-none focus:outline-none focus:ring-0 peer 
                    ${errors[name] ? 'border-red-600 border-b-2' : ''}
                    overflow-scroll
                    `}
                />
                <label htmlFor="filled_error"
                       className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    {label}
                </label>
            </div>
            <div id="filled_error_help"
                 className={`mt-0.5 text-xs text-red-800 absolute ${errors[name]?.type === 'required'} '' ? 'hidden'`}
            >
                {errors[name]?.message as string}
            </div>

        </div>);
};

export default function Contact() {
    const methods = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        alert(JSON.stringify(data));
    };
    return (
        <section
            id="contact"
            className="bg-red-100 section-container">
            <h2>Contact</h2>
            <div className="pt-14">
                <FormProvider {...methods}>
                    <form className="flex flex-col gap-8 sm:flex-row"
                          onSubmit={methods.handleSubmit(onSubmit)}>
                        <TextInput
                            type="textarea"
                            className="h-72 grow"
                            label="Message"
                            name="message"
                            required/>
                        <div className="flex flex-col gap-8 grow sm:justify-between">
                            <div className="flex flex-col gap-8">
                                <TextInput
                                    label="Subject"
                                    name="subject"
                                    required/>
                                <TextInput
                                    label="Your email"
                                    name="email"
                                    required/>
                            </div>
                            <button type="submit"
                                    className="w-full font-serif text-xl text-center
                                bg-gradient-to-tr from-accent1/30 via-accent1/30 to-primary1
                                hover:from-accent1/40 hover:via-accent1/40 hover:to-primary1
                                hover:shadow-lg focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 rounded px-5 py-2.5"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </section>
    )
}