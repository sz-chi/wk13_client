import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const Article = () => {
  const [posts, setPosts] = useState([])
  const { articleId } = useParams();

  useEffect(() => {
      axios
          .get('http://localhost:3500')
          .then(res => {
              console.log(res)
          setPosts(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  })

  return (
    <div class="container">
      <ul>
          {
            <div class="back_square">
              {/* --------article-------- */}
                <h1>Article{articleId}</h1>
                <h4 class="back_content">By {posts[articleId-1]?.name}</h4>
                <br/>
                <div class="back_content">{posts[articleId-1]?.body}</div>
                <br/><br/><br/>
                <p class="picture">
                  <img src = {posts[articleId-1]?.images}  alt="" />
                </p>
                <br/><br/>

                {/* --------comment-------- */}
                <h1 className="comment-title">Comment</h1>
                <div class="comment">
                  <div class="outborder">
                    <img src={"../people_icon.png"} className="image2" alt="" />
                    {posts[articleId-1]?.comment1}
                    <div class="commentName">By {posts[articleId-1]?.comment1name}</div>
                  </div>
                </div>
                <div class="comment">
                  <div class="outborder">
                    <img src={"../people_icon.png"} className="image2" alt="" />
                    {posts[articleId-1]?.comment2}
                    <div class="commentName">By {posts[articleId-1]?.comment2name}</div>
                  </div>
                </div>
                
                {/* --------btn-------- */}
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <a href="/Article/1">
                  <img src={"../like_icon.png"} className="image" alt="" />
                </a>
                <a href="/Article2/1">
                  <img src={"../message_icon.png"} className="image" alt="" />
                </a>
                <div class="likeCount">
                  {posts[articleId-1]?.likeCount}
                </div>
                <div class="commentCount">
                  {posts[articleId-1]?.commentCount}
                </div>
                <br/>
                <Link to={`/`} className="btn">BACK</Link>
                <br/><br/>
            </div>
          }
      </ul>
    </div>
  );
};

export default Article;
