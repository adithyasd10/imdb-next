export default function Loading() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black w-full h-full text-white'>
      <img className='h-52' src='spinner.svg' alt='loading...' />
    </div>
  );
}