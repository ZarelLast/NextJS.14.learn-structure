"use client";

import { useState, useEffect } from "react";

export default function ClientCounter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Mounted");
  }, []);

  // Updating (saat id berubah)
  useEffect(() => {
    console.log(`Count berubah: ${count}`);
  }, [count]);

  // Unmounting (cleanup)
  useEffect(() => {
    // const timer = setInterval(() => console.log("Timer jalan"), 1000);
    return () => {
      // clearInterval(timer);
      console.log("Timer dibersihkan (Unmount)");
    };
  }, []);
  return (
    <div>
      <h2>Client Counter (CSR)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Tambah</button>
    </div>
  );
}