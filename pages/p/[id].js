import {
    useRouter
} from 'next/router'
import Header from "../../components/Header"
import fetch from "isomorphic-unfetch"
const Post = (props) => {
    let router = useRouter()
    return (
        <div> 
            <Header/>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={props.show.image.medium} />

            <style jsx>
                {
                    `
                    h1 {
                        font-size: 30px;
                        color: #f40;
                    }
                    p {
                        font-size: 14px;
                        color: #555;
                        
                    }

                    `
                }
            </style>
        </div>
    )
}

Post.getInitialProps = async function (context) {
    const {id} = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    return {
        show
    }
}

export default Post