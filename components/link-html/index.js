import Link from 'next/link'

function NavLink({ href = '', name = '', children = '', addHtml = true, isActive, style = {} }) {
  // Must add passHref to Link
  return (
    <Link href={href} as={href + (addHtml  && process.env.NODE_ENV === 'production' ? '.html' : '')} passHref>
      <a className={isActive ? 'active' : ''} style={style}>{ name || children}</a>
    </Link>
  )
}

export default NavLink