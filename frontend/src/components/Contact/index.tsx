import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form"


interface IFormValues {
    "Message": string;
    "Subject": string;
    "Your email": string;
}

type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
    className?: string;
};
// The following component is an example of your existing Input Component
const Input = ({label, register, required, className}: InputProps) => (
    <div className={className}>
        <div className="relative">
            <input {...register(label, {required})}
                type="text" id="filled_error" aria-describedby="filled_error_help"
                   className="block px-3 pb-2.5 pt-5 w-full text-sm bg-white
                    border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 border-red-600 focus:border-red-600  peer"
                   placeholder=" "/>
            <label htmlFor="filled_error"
                   className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                {label}</label>
        </div>
        <p id="filled_error_help" className="mt-1 text-xs text-red-800"><span className="font-medium">Oh, </span> Some
            error message.</p>
    </div>
);

export default function Contact() {
    const {register, handleSubmit} = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        alert(JSON.stringify(data));
    };
    return (
        <section
            id="contact" className="bg-red-100 section-container">
            <h2>Contact</h2>
            <div className="pt-14">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input className=""
                           label="Message" register={register} required/>
                    <Input label="Subject" register={register} required/>
                    <Input label="Your email" register={register} required/>
                    <button type="submit"
                            className="w-full font-serif bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 rounded px-5 py-2.5 text-center mr-2 mb-2">Send
                    </button>
                </form>
            </div>
        </section>
    )
}