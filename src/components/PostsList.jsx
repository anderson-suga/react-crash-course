import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Manuel" body="React.js is awesome!" />
        <Post author="Maximilian" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
