import { useEffect } from "react";
import "./App.css";
import { Dispatch, RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { addPost, loadPosts } from "./store/posts-actions";
import PostsList from "./components/Post/PostsList";
import AddPostForm from "./components/Post/AddPostFrm";
import iPost from "./domain/post";

function App() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(loadPosts());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const posts = useSelector((state: RootState) => state.posts);

  const postAddedHandler = (post: iPost) => {
    dispatch(addPost(post));
  };

  const renderAddPost = () => {
    if (posts && posts.length > 0) {
      if (posts[0].id !== 101) {
        return <AddPostForm onPostAdded={postAddedHandler} />;
      }

      if (posts[0].id === 101) {
        return <p>
          You can add only one post. If you want to add another post, first
          delete the post you added before
        </p>;
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Posts</h1>
      </header>
      <main>
        {renderAddPost()}
        <PostsList postsList={posts} />
      </main>
    </div>
  );
}

export default App;
