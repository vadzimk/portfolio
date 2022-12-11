import {FormProvider, useForm} from 'react-hook-form';
import React from 'react';
import TextInput from '@/components/Contact/TextInput';
export interface IFormValues {
    "message": string;
    "subject": string;
    "email": string;
}

const Arrow = <svg width="14" height="22" fill="none" className="text-secondary1 fill-current scale-[.80]">
    <path  d="M9.37 10.84.333 19.879l1.917 1.918L13.296 10.75 2.75.204.742 2.212l8.628 8.629Z"/>
</svg>

export default function Form ({onSubmit}){
    const methods = useForm<IFormValues>();

    return (
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
                                bg-gradient-to-tr from-accent1/30 via-accent1/30 to-primary2
                                hover:from-accent1/40 hover:via-accent1/40 hover:to-primary2
                                hover:shadow-md hover:shadow-primary2
                                focus:shadow-inner
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
    )
}