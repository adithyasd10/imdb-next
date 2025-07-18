'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        className={`hover:text-emerald-500 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-emerald-500 rounded-lg'
            : ''
        }`}
        href={`/reviews?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}