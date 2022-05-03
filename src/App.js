import { Download, Features, SectionWrapper, Button } from "./components";
import assets from "./assets";
import styles from './styles/Global'
const App = () => {
  return (
    <>
      {/* sometimes we want to show the button somtimes we dont with showBNtn */}
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growning."
        description=" Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNFT MarketPlace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description=" Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNeft is built using Expo which runs natively on all users devices. You can easlit get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description=" The app contains 2 screens. The first screen list all NFT's while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download  />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04" >
        <p className={`${styles.pText} ${styles.whiteText} `} >Made with love by {" "}
        <span className="bold" >Channee Math {new Date().getFullYear()}</span>
        </p>
      </div>
    </>
  );
};

export default App;
