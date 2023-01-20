import Link from 'next/link'

export default function Title () {
  return (
    <ul>
      <li>
        <h1><Link href='/prep'>PREP</Link></h1>
        <h1><Link href='/paper'>PAPER</Link></h1>
      </li>
    </ul>
  )
}
