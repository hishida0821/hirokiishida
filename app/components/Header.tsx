import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 bg-white border-[3px] border-solid border-black z-50'>
      <div className="flex items-center justify-between w-full max-w-7xl h-12 mx-auto px-4 md:px-10">
        <Link className='text-xl md:text-2xl font-roboto font-bold' href='/'>HIROKI ISHIDA</Link>
        <Navigation />
      </div>
    </header>
  )
}