import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";

function PostsList() {
  const [enteredBoby, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredBoby} body={enteredAuthor} />
        <Post author="Maximilian" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
