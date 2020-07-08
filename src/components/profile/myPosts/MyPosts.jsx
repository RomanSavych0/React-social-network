import React, {PureComponent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLenght, maxLenghtCreator, requiredField} from "../../../utils/validators/validator";
import Textarea from "../../common/forms_controll/FormsControll";

const maxLenght10 = maxLenghtCreator(10);

let  MyPosts = (React.memo(props=>{


    console.log("RENDER");
        let newPostElementReference = React.createRef();
        let postElements = props.postsData.map(post => <Post
            message={post.message} likeCount={post.likeCount}/>);
        let add = (values) => {
            console.log(values.myPostBody);
            props.addNewPost(values.myPostBody);

        };

        let onPostTextChange = () => {
            let newPostUpdateText = newPostElementReference.current.value;

            props.onPostUpdate(newPostUpdateText);

        };

        return (
            <div className={classes.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <MyPostReduxForm onSubmit={add}/>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postElements}

                </div>
            </div>
        );


}));


const myPostsForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"add post"} name={"myPostBody"} component={Textarea}
                       validate={[requiredField, maxLenght10]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    </div>

};
const MyPostReduxForm = reduxForm(
    {form: 'myPostFrom'}
)(myPostsForm);


export default MyPosts;
