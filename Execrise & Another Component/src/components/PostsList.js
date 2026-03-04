import Post from "./Post";
import classes from "./PostsList.module.css";
function PostsList(){
        return <ul className={classes.posts}>
            <Post author="John" body="This is John's post." />
            <Post author="Jane" body="This is Jane's post." />
        </ul>;
}
export default PostsList;