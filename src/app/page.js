import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main>
      <Button text="Login" />

      <Card title="React Testing" />

      <Input placeholder="Enter your name" />
    </main>
  );
}