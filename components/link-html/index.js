import Link from 'next/link'

function NavLink({ href = '', name = '', children = '' }) {
  // Must add passHref to Link
  return (
    <Link href={href + (href != './'  && process.env.NODE_ENV === 'production' ? '.html' : '')} passHref>
      <a>{ name || children}</a>
    </Link>
  )
}

export default NavLink