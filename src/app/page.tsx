import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Navigation } from '@/components/navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
