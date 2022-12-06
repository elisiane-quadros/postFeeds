import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import profileImage from '../assets/img/avatar.png';

import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) =>void;
}

export function Comment({ content, onDeleteComment }: CommentProps){
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
   
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)

  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={profileImage} alt=''/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabrielle Q.</strong>
              <time title='6 de outubro de 2022 às 20:07hs' dateTime='2022-10-06 23:30:30'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>

    </div>
  )
}
