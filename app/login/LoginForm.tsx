"use client"

import Heading from "@/app/components/Heading"
import Input from "@/app/components/inputs/input"
import Button from "../components/Button"
import Link from "next/link"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineGoogle } from "react-icons/ai"

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({ defaultValues: { email: '', password: '' }, })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        console.log(data)
        setIsLoading(false)
    }

    return (
        <>
            <Heading title="Sign in for E-Shop" />
            <Button outline label="Continue with Google" icon={AiOutlineGoogle} onClick={() => {}}/>
            <hr className="bg-slate-300 w-full h-px" />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password" />
            <Button label={isLoading ? "loading" : "Login"} onClick={handleSubmit(onSubmit)}/>
            <p>Do not have an account?{" "}
                <Link href="/register" legacyBehavior>
                    <a className="font-semibold underline">Sign up</a>
                </Link>
            </p>
        </>
    )
}

export default LoginForm;