import { redirect } from "react-router-dom";

export const checkForHitmanv2 = ({ request }) => {
    const queryParams = new URL(request.url).searchParams;
    const name = queryParams.get('name');

    if (name && name.toLowerCase() === 'hitman47') {
        return redirect("/users/47")
    }
    return null;
}