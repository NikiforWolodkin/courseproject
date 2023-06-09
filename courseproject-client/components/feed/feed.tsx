import React from "react";
import PostComponent from "../post/post";
import Post from "@/types/post";

interface IFeedProps {
  posts: Post[],
}

const Feed: React.FC<IFeedProps> = ({ posts }) => {    
    return (
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center mx-4 max-w-4xl w-full">
          {posts.map(item => {
            return <PostComponent
                    key={item.id} 
                    post={item}
                   />;
          })}
        </div>
      </div>
    );
};

export default Feed;