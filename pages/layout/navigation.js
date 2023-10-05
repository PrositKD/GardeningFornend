import Link from 'next/link'

export default function Navigation(){
    
    return(
        <>
       
       <nav className="bg-blue-500 p-4 flex justify-between items-center">
  <div className="text-white text-lg">
    <Link href="/" className="mr-6">Home</Link>
    <Link href="/user/indoor" className="mr-6">Indoor Plants</Link>
    <Link href="/parcel" className="mr-6">Outdoor Plants</Link>
    <Link href="/history" className="mr-6">Medicinal Plants</Link>
    <Link href="/" className="mr-6">Herbs</Link>
    <Link href="/" className="mr-6">Show Products</Link>
  </div>
  <div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/agriculture.png" alt="Avatar" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link href='about'>
            Notifications
            <span className="badge">...</span>
          </Link>
        </li>
        <li><Link href='update'>Settings</Link></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}