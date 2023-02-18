import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <h1> Home Page </h1>
      <Link href={'/about'}> Go to About Page </Link>
      <Image
        src="/flag.jpg"
        width={250}
        height={250}
        alt="Picture of the flag"
      />
      <img
        src="/flag.jpg"
        width={250}
        height={250}
        alt="Picture of the flag" />
    </div>
  )
}
