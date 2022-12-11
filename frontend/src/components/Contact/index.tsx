import {
    Path,
    useForm,
    UseFormRegister,
    SubmitHandler,
    useFormState,
    FormProvider,
    useFormContext
} from "react-hook-form";
import Form, {IFormValues} from './Form';
import Reply from './Reply'
import {useState} from 'react';


export default function Contact() {
    const [isSubmitted, setIsSubmitted]=useState(false);

    const onSubmit: SubmitHandler<IFormValues> = data => {
        setIsSubmitted(true)
        console.log(JSON.stringify(data));
    };

    return (
        <section
            id="contact"
            className="section-container pb-48">
            <h2>Contact</h2>
            <div className="pt-14">
                {! isSubmitted
                    ? <Form onSubmit={onSubmit}/>
                    : <Reply/>
                }
            </div>
        </section>
    )
}