import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex pt-20 dark:bg-gray-600 bg-black p-4 lg:text-lg justify-center gap-6 text-white border-b border-neutral-800'>
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  );
}