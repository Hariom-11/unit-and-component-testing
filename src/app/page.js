import styles from "./page.module.css";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.icon}>🧪</div>

          <h1 className={styles.title}>Component Testing Demo</h1>

          <p className={styles.subtitle}>
            This project demonstrates Unit Testing using Jest and React Testing
            Library.
          </p>
        </div>

        <div className={styles.components}>

          <Input placeholder="Enter your name" />
          <Card title="React Testing" />
          <Button text="Login" />
        </div>

        <div className={styles.footer}>
          <h3>Testing Summary</h3>

          <p>✔ Button Component</p>
          <p>✔ Card Component</p>
          <p>✔ Input Component</p>
        </div>
      </div>
    </main>
  );
}