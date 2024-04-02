import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  isEditProfile?: boolean;
  src: string;
}

export function Avatar({
  hasBorder = true,
  isEditProfile,
  src,
}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      id={isEditProfile ? "imageEditProfile" : "imageProfile"}
      src={src}
    />
  );
}
