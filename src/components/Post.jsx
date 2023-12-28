const Names = ["Maximilian", "Manuel"];

function Post() {
  const chooseName = Math.random() > 0.5 ? Names[0] : Names[1];
  return (
    <div>
      <p>{chooseName}</p>
      <p>React is awesome!</p>
    </div>
  );
}

export default Post;
