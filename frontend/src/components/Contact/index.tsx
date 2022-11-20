import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form"


interface IFormValues {
    "First Name": string;
}

type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
};
// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);

export default function Contact() {
    const { register, handleSubmit } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        alert(JSON.stringify(data));
    };
    return (
        <section id="contact" className="bg-red-100 section-container">
            <h2>Contact</h2>
            <div className="pt-14">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="First Name" register={register} required />
                    <input type="submit" />
                </form>
            </div>
        </section>
    )
}