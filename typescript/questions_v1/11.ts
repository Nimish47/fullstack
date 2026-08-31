type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

type PostSummary = Pick<Post, "id" | "title">;

// accurately check if incoming data is a Post type

function isPost(value: unknown): value is Post {
    if (typeof value !== "object" || value === null) return false;

    if (!("id" in value) ||
        !("title" in value) ||
        !("body" in value) ||
        !("userId" in value)) return false;

    return (
        typeof value.id === "number" &&
        typeof value.title === "string" &&
        typeof value.body === "string" &&
        typeof value.userId === "number"
    );
}

// In order to guarantee that return is of type = Post[]
// 
async function fetchPosts(url: string): Promise<Post[]> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
        throw new Error("Invalid API response");
    }

    return data.filter(isPost);
}

function filterPosts(posts: Post[]): PostSummary[] {
    return posts.map(post => ({
        id: post.id,
        title: post.title
    }));
}

async function main() {
    try {
        const apiData = await fetchPosts("https://jsonplaceholder.typicode.com/posts");
        const filteredData = filterPosts(apiData);
        filteredData.forEach(post => { console.log(post) });
    } catch {
        console.log("Failed to fetch posts");
    }
}

main();