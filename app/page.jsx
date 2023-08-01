import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";

const Home = () => {
  return (
    <div className='w-full flex flex-col mb-0'>
      <span className='pageheader'>net worth summary</span>
      <span className='pagedescription'>all your holdings summarized into one page! hooray!</span>
      <Dashboard/>
    </div>
  )
}

export default Home;