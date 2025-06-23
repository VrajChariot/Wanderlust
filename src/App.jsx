import Navbar from './components/Navbar'
import Hero from './components/hero'
import Card from './components/Card'
import Cardimg from "./assets/card-img.jpg";
import Footer from './components/Footer'
import HotelCard from './components/HotelCard'
import Hotel1 from "./assets/Hotelimg.jpg";

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
            <Card city="Santorini" country="Greece" description="Discover the magical sunsets and white-washed buildings of this Greek paradise." />
            <Card city="Santorini" country="Greece" description="Discover the magical sunsets and white-washed buildings of this Greek paradise." />
            <Card city="Santorini" country="Greece" description="Discover the magical sunsets and white-washed buildings of this Greek paradise." />
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
            <HotelCard MainImg={Hotel1} hotelName = {"Alpine Grand Resort"} country={"Switzerland"} raiting = {4.5} price = {"£200"}/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
