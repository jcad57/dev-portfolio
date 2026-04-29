import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jon Deichmann - React Developer" },
    {
      name: "description",
      content: "React & React Native developer who ships production apps",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
