const names = ["John", "Jane"];
function Post(){
        const choosenName = Math.random() > 0.5 ? names[0] : names[1];
        return <div>
                 <p>{choosenName}</p>
                 <p>React js is owesome!</p>
                </div>
};

export default Post;