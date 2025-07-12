import Card from './Card';

export default function Results({ results }) {
  return (
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      2xl:grid-cols-4 
      gap-6 
      max-w-7xl 
      mx-auto 
      px-4 
      py-8 
      bg-black 
      text-white
    ">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
