import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList as PostListContext } from "../Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "30rem", margin: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <MdDelete />
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        <p>
          👍 {post.reactions?.likes} | 👎 {post.reactions?.dislikes}
        </p>

        <p>
          Views: <strong>{post.views}</strong>
        </p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary me-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
