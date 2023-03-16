import iPost from "../../domain/post";
import Card from "../UI/Card";
import PostItem from "./PostItem";

const PostsList: React.FC<{ postsList: iPost[] }> = ({ postsList }) => {
  return (
    <section>
      <Card>
        <ul>
          {postsList.map((postItem) => (
            <PostItem key={postItem.id} {...postItem} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default PostsList;
