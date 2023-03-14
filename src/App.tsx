import { useState } from 'react'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostProps } from './components/Post'
import './global.css';
import styles from './App.module.css';

interface Posts extends PostProps {
  id:number
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasharosa.png',
      name: 'Lucas Henrique',
      role: 'Aluno @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'OII recrutador 👋' },
      { type: 'paragraph', content: 'Esse é mais um projeto em React que eu fiz, tenha plena certeza que que sou capaz de realiza-los, sei essa tecnologia e tantas outras, abraço 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-09 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-08 20:00:00'),
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* Para usar um iterador ele deve ter algum retorno, por isso se usa map ao inves de foreach   */}
          {/* para cada componente usado em map deve existir uma key*/}
          {posts.map(post =>{
            return (
              <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
