import React from "react";
import clases from "./Post.module.css";

let Post = (props) => {
    return (
        <div className={clases.item}>
            <img src="https://avatars.mds.yandex.net/get-mpic/1862701/img_id3748183763233470447/6hq"/>
            {props.message}
            <div>
                <span> Likes : {props.likeCount}</span>
            </div>
            <span>Dislike</span>

        </div>
    );
};
export default Post;
