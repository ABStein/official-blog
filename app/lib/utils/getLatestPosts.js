const getLatestPosts = (posts) => {
    posts.sort((a, b) => {
        const postA = new Date(a.created_at);
        const postB = new Date(b.created_at);
        return postB - postA;
    });
    return posts;
}

export default getLatestPosts;
