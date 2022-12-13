import { PencilSimpleLine } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import EditProfileModal from "./EditProfileModal";

import styles from "./Sidebar.module.css";

interface UserProfile {
  name: string;
  occupation: string;
  src: string;
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: "Elisiane Quadros",
    occupation: "Web Developer",
    src: "https://github.com/LisiQuadros.png",
  });

  function handleOpenModal() {
    setOpen(true);
  }

  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar hasBorder src={profile.src} alt="" />

        <strong>{profile.name}</strong>
        <span>{profile.occupation}</span>
      </div>

      <footer>
        <button onClick={handleOpenModal}>
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </button>
      </footer>
      <EditProfileModal
        open={open}
        setOpen={setOpen}
        profile={profile}
        setProfile={setProfile}
      />
    </aside>
  );
}
