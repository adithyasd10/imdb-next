export default function Loading() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black text-white z-50'>
      <img className='h-52' src='spinner.svg' alt='loading...' />
    </div>
  );
}