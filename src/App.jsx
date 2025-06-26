import Navbar from './components/navbar.jsx'
import Hero from './components/hero'
import Card from './components/Card'
import Cardimg from "./assets/card-img.jpg";
import Footer from './components/Footer'
import HotelCard from './components/HotelCard'
import Hotel1 from "./assets/Hotelimg.jpg";
import MoreInfo from './components/MoreInfo';
import AboutImg from "./assets/About_img.jpg";
import Newsletter from './components/newsletter.jsx'
import KyotoImg from "./assets/kyoto.jpg";
import MachaPeru from "./assets/machu_peru.jpg";
import amalfiCoast from "./assets/amalfi_coast.jpg";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <div className='p-8' id='popular-destinations'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Popular Destinations</h1>
            <button className="bg-[#6366F1] border-0 rounded-[50px] p-2.5 w-24 text-white cursor-pointer hover:bg-[#4F46E5] hover:translate-y-[-2px] hover:shadow-[0_4px_8px_rgba(99,102,241,0.2)] active:translate-y-0 transition-all duration-300">
              View All
            </button>
          </div>
          <div className='py-8 grid grid-cols-4 gap-6 w-full m-0'>
            {/* Add card component here with props. */}
            <Card MainImg={Cardimg} city="Santorini" country="Greece" description="Discover the magical sunsets and white-washed buildings of this Greek paradise." />
            <Card MainImg={KyotoImg} city="Kyoto" country="Japan" description="Experience the perfect blend of traditional culture and modern Japan." />
            <Card MainImg={MachaPeru} city="Machu Peru" country="Peru" description="Explore the ancient Incan citadel set high in the Andes Mountains." />
            <Card MainImg={amalfiCoast} city="Amalfi Coast" country="Italy" description="Drive along the stunning Mediterranean coastline of southern Italy." />
          </div>
        </div>
        <div id='Hotels' className='p-8 bg-[#F9FAFB]'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Hotels and Restaurants</h1>
            <button className="bg-[#6366F1] border-0 rounded-[50px] p-2.5 w-24 text-white cursor-pointer hover:bg-[#4F46E5] hover:translate-y-[-2px] hover:shadow-[0_4px_8px_rgba(99,102,241,0.2)] active:translate-y-0 transition-all duration-300">
              View All
            </button>
          </div>
          <div className='py-8 grid grid-cols-4 gap-6 w-full m-0'>
            {/* Hotel Card component appears here. */}
            <HotelCard MainImg={Hotel1} hotelName={"Alpine Grand Resort"} country={"Switzerland"} raiting={4.5} price={"£200"} />
          </div>
        </div>
        {/* Create a about us component with general name add it here with proper props */}
        <MoreInfo
          title="About Us"
          desc="At Wanderlust, we believe the true magic of travel lies not just in the places you visit, but in the moments you collect along the way. Our passion is rooted in the spirit of discovery, seeking out hidden corners of the world where stories unfold beyond the edges of the guidebooks. From forgotten coastal towns to winding trails through ancient forests, Wanderlust invites you to experience travel that is personal, soulful, and endlessly inspiring. We are more than a guide; we are your companions in curiosity, crafting journeys that awaken the senses and stir the heart. Wherever your path leads, to distant shores, mountain peaks, or vibrant city streets, Wanderlust is here to help you find beauty in the unexpected and adventure in the everyday. Your next story begins here, and we can't wait to wander it with you."
          img={AboutImg}
          btnTxt="Learn More"
          bgColor="bg-white"
        />
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
