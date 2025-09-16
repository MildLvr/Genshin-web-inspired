import Header from "./componen/header";
import HeroSection from "./componen/herosection";
import ContentSection from "./componen/ContentSection";
import GameFeature from "./componen/GameFeature";
import Endsection from "./componen/Endsection";
import Loginmodal from "./componen/LoginModal";
import Signupmodal from "./componen/SignupModal";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ContentSection />
      <GameFeature />
      <Endsection />
      <Loginmodal />
      <Signupmodal />
    </div>
  );
}

export default App;
