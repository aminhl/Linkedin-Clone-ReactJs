import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Amine Hlel</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post__body">
        <p>Post Body Here</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" />
        <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" />
        <InputOption Icon={ShareIcon} title="Share" />
        <InputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
}

export default Post;
