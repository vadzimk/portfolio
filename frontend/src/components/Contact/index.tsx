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
import axios from 'axios';
import {log} from 'util';


export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit: SubmitHandler<IFormValues> = data => {
        axios.post("/api/contact", data)
            .then(res => res.status===200 ? setIsSubmitted(true) : console.log(res.status))
            .catch(e=>console.log(e.message))
    };

    return (
        <section
            id="contact"
            className="section-container pb-48">
            <h2>Contact</h2>
            <div className="pt-14">
                {!isSubmitted
                    ? <Form onSubmit={onSubmit}/>
                    : <Reply/>
                }
            </div>
        </section>
    )
}