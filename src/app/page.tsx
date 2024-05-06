import Image from "next/image";
import Hero from "./components/Hero";
import StudyProgram from "./components/StudyProgram";
import Specialized from "./components/Specialized";
import Outcome from "./components/Outcome";

export default function Home() {
  return (
    <main >
      <Hero/>
      <StudyProgram/>
      <Specialized/>
      <Outcome/>
    </main>
  );
}
