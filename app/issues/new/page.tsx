"use client";

import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import { Button, TextField } from "@radix-ui/themes";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";


interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const router = useRouter();
    const { register, control, handleSubmit } = useForm<IssueForm>();

    const onSubmit: SubmitHandler<IssueForm> = async (data) => {
        await axios.post('/api/issues', data);
        router.push('/issues');
    };

    return (
        <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <TextField.Root placeholder="Title" { ...register('title') } />
            <Controller 
                name="description"
                control={control}
                render={({ field }) => <SimpleMDE placeholder="Description" { ...field } />}
            />
            <Button>Submit New Issue</Button>
        </form>
    )
}

export default NewIssuePage;