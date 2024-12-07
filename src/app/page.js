import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Menus from "@/components/Menus/Menus";
import Muffins from "@/components/Muffins/Muffins";
import Flotante from "@/components/Flotante/Flotante";
import Footer from "@/components/Footer/Footer";
import ContenedorProductos from "@/components/ContenedorProductos/ContenedorProductos";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tricolor}>
        <Header/>
        <Main/>
        <Menus/>
        <Muffins/>
        <Flotante/>
        <ContenedorProductos/>
        <Footer/>
      </div>
    </main>
  );
}
