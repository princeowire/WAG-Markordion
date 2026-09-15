import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
            <div className="hidden items-center gap-1 rounded-full border border-[#314342]/40 bg-[#142627]/70 p-1 backdrop-blur-xl lg:flex">

          <Link
            href="/"
            className="rounded-full bg-[#2A3C3C] px-5 py-2 text-[11px] text-[#E9EDE1] transition-colors hover:bg-[#3B4F4D]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="rounded-full px-5 py-2 text-[11px] text-[#9DAAA4] transition-colors hover:bg-[#2A3C3C] hover:text-[#E9EDE1]"
          >
            About
          </Link>

        </div>
  )
}

export default Nav