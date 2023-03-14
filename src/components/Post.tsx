import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';



export interface PostProps{
  author:{
    name:string;
    role:string;
    avatarUrl:string;
  },
  publishedAt: Date;
  content:{
    type: 'paragraph' | 'link';
    content: string;
  } [];
}

export function Post(props: PostProps) {

  // criação do useState para a lista de comentários
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  // criação do useState para os comentários
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  // Parte que atualiza o uso do state
  // event.preventDefault(); é usado para não mudar de página quando o evento é acionado
  function handleCrateNewComment(event:FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }
  
  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement> ) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }
  
  function deleteComment(commentToDelete:string) {
    // A função filter irá retornar os elementos seguindo o critério do return
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        {props.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  )
}