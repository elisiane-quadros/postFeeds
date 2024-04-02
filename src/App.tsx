import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "src/assets/img/post_1.jpg",
      name: "Gaby Q.",
      role: "Desenvolvedor Web",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet.Est ducimus unde sit enim veniamhic sint quo consectetur consequatur! ",
      },
      { type: "link", content: "jane.design/doctorcare " },
    ],
    publishedAt: new Date("2022-11-13 21:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "src/assets/img/avatar.png",
      name: "Elis Camargo",
      role: "Desenvolvedor Web",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Aut quisquam dolor id quisquam quam et reiciendis eius aut doloremque quas ea dolorem autem eum ducimus maiores! ",
      },
      { type: "link", content: "jane.design/doctorcare " },
    ],
    publishedAt: new Date("2022-11-15 21:30:00"),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
