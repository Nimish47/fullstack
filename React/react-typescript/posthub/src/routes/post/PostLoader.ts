import { redirect } from "react-router-dom";

type Params = {
    id?: string
}

type CustomProps = {
    params: Params
}

export const fetchPost = async ({ params }: CustomProps) => {
    try {

        if (Number(params?.id) === 5) return redirect('/user')

        const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
        const response = await fetch(url);
        const data = await response.json();
        return data

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}