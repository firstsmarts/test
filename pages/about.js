import Link from "next/link"
import Header from "../components/Header"

export default function About() {
    return (
        <div>
            <Header />
            <p>This is the about page</p>
            {/* <Link href="/"><button>Go to About Page</button></Link> */}
        </div>
    );
}