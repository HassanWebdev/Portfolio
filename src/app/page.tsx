import Navbar from '@/components/Custom/Navbar';
import Hero from '@/components/Custom/Hero';
import About from '@/components/Custom/About';
import Project from '@/components/Custom/Projects'
import Globle from '@/components/Custom/Globe'
import Playfull from '@/components/Custom/playful'
import About2 from '@/components/Custom/About2 ';
import Reviews from '@/components/Custom/Reviews'
import Experience from '@/components/Custom/Experience'


function Page() {
  return (
    <div className='overflow-hidden bg-[#989D9F] '>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
      <Reviews/>
      <About2/>
    </div>
  );
}

export default Page;
