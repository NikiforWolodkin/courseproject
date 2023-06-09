type Post = {
    id: number, 
    text: string,
    authorId: number,
    authorUsername: string,
    creationTime: string,
    isLiked: boolean,
    likeCount: number,
    commentCount: number,
    shareCount: number,
    reportCount: number,
    authorProfileColor: string,
    authorAvatar: string,
    authorStatus: string,
    tags: string[]
};

export default Post;