"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex items-center gap-2 w-full mt-4 max-w-6xl mx-auto p-2 rounded-full bg-black/60 border border-transparent bg-gradient-to-r from-neutral-700/40 via-neutral-500/10 to-neutral-700/40"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 h-10 px-4 bg-transparent text-white placeholder-gray-400 outline-none rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition disabled:opacity-50"
        disabled={search === ""}
        aria-label="Search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
        </svg>
      </button>
    </form>
  );
}
