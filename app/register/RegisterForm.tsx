"use client"

import Heading from "@/app/components/Heading"
import Input from "@/app/components/inputs/input"
import Button from "../components/Button"
import Link from "next/link"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineGoogle } from "react-icons/ai"
import axios from "axios"
import { toast } from "react-hot-toast"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const RegisterForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({ defaultValues: { name: '', email: '', password: '' }, })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post("/register", data)
            .then(() => {
                toast.success("Account created successfully");

                signIn("credentials", {
                    email: data.email,
                    password: data.password,
                    redirect: false
                })
                .then((callback) => {
                    console.log("signIn response:", callback);
                    if (callback?.ok) {
                        router.push('/cart');
                        toast.success("Logged in successfully");
                    }
                    if (callback?.error) {
                        toast.error(callback.error);
                    }
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response?.data) {
                        toast.error(error.response.data.message || "Something went wrong");
                    } else {
                        toast.error("Something went wrong");
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                });
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to create an account");
            });
    };

    return (
        <>
            <Heading title="Sing up for E-Shop" />
            <Button outline label="Sign up with Google" icon={AiOutlineGoogle} onClick={() => { }} />
            <hr className="bg-slate-300 w-full h-px" />
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password" />
            <Button label={isLoading ? "loading" : "Sign up"} onClick={handleSubmit(onSubmit)} />
            <p>Already have an account?{" "}
                <Link href="/login" legacyBehavior>
                    <a className="font-semibold underline">Login</a>
                </Link>
            </p>
        </>
    )
}

export default RegisterForm;