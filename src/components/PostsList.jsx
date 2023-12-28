import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Manuel" body="React.js is awesome!" />
      <Post author="Maximilian" body="Check out the full course!" />
    </ul>
  );
}

export default PostsList;
