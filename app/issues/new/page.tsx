"use client";

import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
    const router = useRouter();
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit: SubmitHandler<IssueForm> = async (data) => {
        try {
            setIsSubmitting(true)
            await axios.post('/api/issues', data);
            router.push('/issues');
        } catch (error) {
            setIsSubmitting(false)
            setError("An unexpected Error Occurred.")
        }
    };

    return (
        <div className="max-w-xl">
            {error && <Callout.Root color="red" className="mb-5">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>}
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <TextField.Root placeholder="Title" { ...register('title') } />
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <Controller 
                    name="description"
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder="Description" { ...field } />}
                />
                <ErrorMessage>{errors.description?.message}</ErrorMessage>
                <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Spinner />}</Button>
            </form>
        </div>
    )
}

export default NewIssuePage;