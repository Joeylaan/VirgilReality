import { PageLayout } from './components/layout';
import { Hero, Projects, Services, About, CTA } from './components/sections';

function App() {
  return (
    <PageLayout>
      <Hero />
      <Projects />
      <Services />
      <About />
      <CTA />
    </PageLayout>
  );
}

export default App;
