import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  isEditProfile?: boolean;
}

export function Avatar({
  hasBorder = true,
  isEditProfile,
  ...props
}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      id={isEditProfile ? "imageEditProfile" : "imageProfile"}
      {...props}
    />
  );
}
