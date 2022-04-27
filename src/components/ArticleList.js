import Article from "./Article.js";

function ArticleList(props) {
  const posts = props.posts.map(post => <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />);

  return (
    <main>
      {posts}
    </main>
  );
}

export default ArticleList;
