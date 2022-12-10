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
                    className={`block px-3 pb-2.5 pt-5 w-full h-full bg-white
                    border-0 box-border appearance-none 
                    shadow-[inset_1px_2px_4px_rgba(0,0,0,0.1)]
                    focus:outline-none focus:ring-0 peer 
                    ${errors[name] ? 'border-secondary1 border-b-2' : ''}
                    overflow-scroll resize-none
                    `}
                />
                <label htmlFor="filled_error"
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
const Arrow = <svg width="14" height="22" fill="none" className="text-secondary1 fill-current scale-[.80]">
    <path  d="M9.37 10.84.333 19.879l1.917 1.918L13.296 10.75 2.75.204.742 2.212l8.628 8.629Z"/>
</svg>

export default function Contact() {
    const methods = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        console.log(JSON.stringify(data));
    };
    return (
        <section
            id="contact"
            className="section-container pb-48">
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
                                    className="w-full font-serif text-xl text-center rounded px-5 py-2.5
                                bg-gradient-to-tr from-accent1/30 via-accent1/30 to-primary1
                                hover:from-accent1/40 hover:via-accent1/40 hover:to-primary1
                                hover:shadow-lg focus:shadow-inner
                                focus:brightness-[.95] flex justify-center gap-2
                                "
                            >
                                <div>Send</div>
                                <div className="flex flex-col justify-center items-center">
                                    {Arrow}
                                </div>
                            </button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </section>
    )
}