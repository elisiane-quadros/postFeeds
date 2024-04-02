import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./EditProfileModal.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { Avatar } from "./Avatar";
import { CheckSquareOffset } from "phosphor-react";

interface UserProfile {
  name: string;
  occupation: string;
  src: string;
}

interface EditProfileProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
}

export default function EditProfileModal({
  open,
  setOpen,
  profile,
  setProfile,
}: EditProfileProps) {
  const [name, setName] = useState(profile.name);
  const [occupation, setOccupation] = useState(profile.occupation);
  const [src, setSrc] = useState(profile.src);
  const [saved, setSaved] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setSaved(false);
    setName(profile.name);
    setOccupation(profile.occupation);
    setSrc(profile.src);
  };

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOccupation = (event: ChangeEvent<HTMLInputElement>) => {
    setOccupation(event.target.value);
  };

  const handleProfileImage = (event: ChangeEvent<HTMLInputElement>) => {
    
    let output = document.getElementById("imageEditProfile") as HTMLImageElement;

    if (output && event.target.files?.length) {
      output.src = URL.createObjectURL(event.target.files[0]);
    }

    if (event.target.files?.length) {
      setSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleConfirm = (event: FormEvent) => {
    event.preventDefault();
    setProfile({
      name: name,
      occupation: occupation,
      src: src,
    });
    setSaved(true);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modalBox}>
          <Box className={styles.headerModal}>
            <h2>Perfil</h2>
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </Box>

          {!saved ? (
            <form onSubmit={handleConfirm} className={styles.editProfile}>
              <Box className={styles.container}>
                <Box className={styles.imageProfile}>
                  <Avatar src={src} isEditProfile />
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    id="actual-btn"
                    onChange={handleProfileImage}
                  />
                  <label htmlFor="actual-btn" className={styles.editImage}>
                    Alterar Imagem
                  </label>
                </Box>

                <Box className={styles.item}>
                  <label htmlFor="nome" className={styles.itemLabel}>
                    Nome
                  </label>
                  <input
                    type="text"
                    value={name}
                    required
                    id="nome"
                    onChange={handleName}
                  />
                </Box>
                <Box className={styles.item}>
                  <label htmlFor="occupation" className={styles.itemLabel}>
                    Profissão
                  </label>
                  <input
                    type="text"
                    value={occupation}
                    required
                    id="occupation"
                    onChange={handleOccupation}
                  />
                </Box>
                <Box>
                  <button type="submit">Salvar</button>
                </Box>
              </Box>
            </form>
          ) : (
            <div className={styles.savedSuccess}>
              <strong>
                <CheckSquareOffset size={30} /> Salvo com sucesso!
              </strong>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
