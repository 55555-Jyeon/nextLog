import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <nav className={styles.container}>
      <Image width={90} height={90} src={"/next.svg"} alt="next logo" />
      <ul>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </ul>
    </nav>
  );
}
