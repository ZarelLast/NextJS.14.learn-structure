export default function BlogList() {
  const blogs = [
    { slug: "nextjs-routing", title: "Belajar Routing di Next.js" },
    { slug: "material-ui", title: "Material UI untuk Pemula" },
  ];

  return (
    <div>
      <h1>Daftar Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <a href={`/blog/${blog.slug}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}