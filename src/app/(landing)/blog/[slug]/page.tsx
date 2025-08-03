export default function BlogDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Detail Blog: {params.slug}</h1>
      <p>Konten blog untuk {params.slug} akan ditampilkan di sini.</p>
    </div>
  );
}