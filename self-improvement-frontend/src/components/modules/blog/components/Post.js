function Post(props){
    
    return <div className="py-lg-5">
        <h1>{props.post.title}</h1>
        <p>Written by {props.post.author}</p>
        <h5>{props.post.content.substring(0,100)+" ..."} </h5>
        <a href={"/posts/"+props.post.id}>Read More</a>
    </div>
}
export default Post;