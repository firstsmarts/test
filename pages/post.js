import {
    useRouter
} from 'next/router';
import Link from "next/link"
import fetch from "isomorphic-unfetch"
const Post = (props) => {
    let router = useRouter()
    return (
        <div> 
            {
                props.shows.map(item => (
                    <div key={item.id}>
                        <Link href="/p/[id]" as={`/p/${item.id}`} ><a>{item.name}</a></Link>
                    </div>
                ))
            }
        </div>
    )
}

Post.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    return {
        shows: data.map(entry => entry.show)
    }
}

export default Post