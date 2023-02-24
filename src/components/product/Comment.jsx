import React from 'react'
import "./Comment.scss"

const Comment = () => {
  return (
    <div className='comment-container'>
      <div className="com-infor">
        <div className="img-user"><ion-icon name="person-outline"></ion-icon></div>
        <div className="img-infor">
            <div className="img-infor-name">John Doe</div>
            <div className="img-infor-date">30.08.2018, 17:53</div>
        </div>
      </div>
      <div className="com-item">
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly believable. If you are going to use 
        a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden 
        in the middle of text.
      </div>
      <div className="under-comment">
        <div className="like-dislike">
            <ion-icon name="thumbs-up-outline"></ion-icon>
            <span className='like'>12</span>
            <span className='displike'>7</span>
            <ion-icon name="thumbs-down-outline"></ion-icon>
        </div>
        <div className="reply-quote">
            <ion-icon name="arrow-redo-outline"></ion-icon>
            <span className='reply'>Reply</span>
            <ion-icon name="share-social-outline"></ion-icon>
            <span className='quote'>Quote</span>
        </div>
      </div>
    </div>
  )
}

export default Comment
