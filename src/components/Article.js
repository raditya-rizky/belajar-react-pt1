function Article(title, body, createdAt) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{createdAt.toString()}</p>
    </div>
  );
}

export default Article;
