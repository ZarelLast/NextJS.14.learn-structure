export default function BlogSearch({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <div>
      <h1>Hasil Pencarian</h1>
      <p>Keyword: {searchParams.q}</p>
    </div>
  );
}