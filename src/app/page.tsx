import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
