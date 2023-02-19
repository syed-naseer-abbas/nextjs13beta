import Link from "next/link"

export default function About() {
    return (
        <div>
            <h1 className=".font-bold"> About Page </h1>
            <Link href={'/'}> Go to Home Page </Link>
        </div>
    )
}
