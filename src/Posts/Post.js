import React from 'react';
import './Post.css';
import { postLists } from './PostLists';

function Post() {
    const PostList = postLists.map((post , index) => {
        return (
            <div className="posts-container" key={index}>
                <div className="post-title"><h5>{post.id}. {post.title}</h5></div>
                <div className="post-content">
                    <div className="top-post-content">
                        <img src={post.profilePic} alt={post.name}/>
                        <div>
                            <p>{post.name}</p>
                            <p>{post.username}</p>
                        </div>
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div className="middle-post-content">
                        <p>{post.content}</p>
                        <a href="#">{post.hashtag}</a>
                    </div>
                    <div className="image-post-content">
                        <img src={post.image} alt={post.title} />
                    </div>
                    <div className="timestamp-post-content">
                        <p>{post.date}</p><i class="fas fa-exclamation-circle"></i>
                    </div>
                    <div className="bottom-post-content">
                        <div>
                            <i class="far fa-heart"></i><p>{post.like}</p>
                        </div>
                        <div>
                            <i class="far fa-comment"></i><p>{post.comment}</p>
                        </div>
                        <div>
                        <i class="far fa-share-square"></i><a href="#">Share this Tweet</a>
                        </div>
                    </div>
                    <button>Tweet your reply</button>
                </div>
            </div>
        )
    })
    return (
        <>
            {PostList}
        </>
    )
}

export default Post;
