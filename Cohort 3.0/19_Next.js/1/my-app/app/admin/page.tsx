import "../globals.css";
import Link from "next/link";
import styles from "./page.module.css"

export default function AdminHome() {
    return <div>
        Hi this is admin home page
        <br />
        <Link className={styles.Link} href="">THis text is to text page.module.css thing</Link>
    </div>
}