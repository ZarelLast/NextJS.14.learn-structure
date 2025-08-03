"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Terjadi kesalahan</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Coba Lagi</button>
    </div>
  );
}