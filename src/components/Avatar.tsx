import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'


 interface AvartarPorps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
  src: string;
 }


// Valor default de hasBorder é true, caso seja enviado um valor o default será trocado
export function Avatar({ hasBorder = true, ...props }:AvartarPorps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}