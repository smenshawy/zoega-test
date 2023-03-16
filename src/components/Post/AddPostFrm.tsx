import React from "react";

import iPost from "../../domain/post";
import Card from "../UI/Card";

interface iAddPostForm {
  onPostAdded: (post: iPost) => void;
}

const AddPostForm: React.FC<iAddPostForm> = ({ onPostAdded }) => {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const bodyRef = React.useRef<HTMLTextAreaElement>(null);

  const formSubmitted = (event: React.FormEvent) => {
    event.preventDefault();
    onPostAdded({
      title: titleRef.current!.value,
      body: bodyRef.current!.value,
      userId: 1,
    });
  };
  return (
    <section>
      <Card>
        <form onSubmit={formSubmitted}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              min="1"
              max="50"
              id="title"
              name="title"
              required
              ref={titleRef}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea id="body" name="body" required ref={bodyRef} />
          </div>
          <button type="submit">Add Post</button>
        </form>
      </Card>
    </section>
  );
};

export default AddPostForm;
