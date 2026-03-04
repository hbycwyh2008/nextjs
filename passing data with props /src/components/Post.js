const names = ["John", "Jane"];
function Post(props){
        return <div>
                 <p>{props.author}</p>
                 <p>{props.body}</p>
                </div>
};

export default Post;