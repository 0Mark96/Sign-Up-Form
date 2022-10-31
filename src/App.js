import './app.scss';
import Intro from './Component/Intro/Intro';
import SignUpSection from './Component/SignUpSection/SignUpSection';

function App() {
  return (
    <main className="app_cont">
      <Intro />
      <SignUpSection />
    </main>
  );
}

export default App;
