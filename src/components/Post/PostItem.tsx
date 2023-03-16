import { useDispatch } from "react-redux";

import { Dispatch } from "../../store";
import { deletePost } from "../../store/posts-actions";
import iPost from "../../domain/post";
import classes from "./PostItem.module.css";

const PostItem: React.FC<iPost> = ({ id, title, body, userId }) => {
  const dispatch: Dispatch = useDispatch();
  const deletePostHandler = () => {
    dispatch(deletePost(id!));
  };

  return (
    <li className={classes["post-item"]}>
      <h3>{title}</h3>
      <div className={classes.body}>{body}</div>
      <div>
        <button onClick={deletePostHandler}>Delete</button>
      </div>
    </li>
  );
};

export default PostItem;
