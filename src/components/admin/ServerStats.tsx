// ❌ Tidak ada "use client", artinya ini Server Component (SSR)
export default async function ServerStats() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon", {
    cache: "no-store" // pastikan fetch dilakukan di server setiap request
  });
  const data = await res.json();

  return (
    <div>
      <h2>Server Stats (SSR)</h2>
      <p>Total API Public: {data.results.length}</p>
    </div>
  );
}