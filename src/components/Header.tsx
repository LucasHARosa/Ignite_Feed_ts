//Importando o estilo css em módulo, os estilos serão carregados para a variável style
import styles from './Header.module.css';
//importando uma imagem
import igniteLogo from '../assets/ignitelogo.svg';

export function Header() {
  return (
    //Forma de chamar o estilo css em módulo
    <header className={styles.header}>
        <img src={igniteLogo} alt="Símbolo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}