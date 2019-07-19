import Link from "next/link"
import Header from "../components/Header"
export default function Index() {
    return (
        <div>
            <Header />
            <p>This is the index page</p>
            {/* <Link href="/about">about</Link> */}
        </div>
    );
}