
export const checkForHitman = ({ request }) => {
    const queryParams = new URL(request.url).searchParams;
    const name = queryParams.get('name');

    if (name && name.toLowerCase() === 'hitman47') {
        throw new Response("This user can only be accessed by a v2 type user.", {
            status: 403,
            statusText: "Forbidden"
        });
    }
    return null;
}