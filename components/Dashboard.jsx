import NetWorth from './Networth';
import OverallSummary from './OverallSummary';
import spendSummary from './SpendSummary';

const Dashboard = () => {
  return (
    <div className='pt-5 flex-row flex-between w-full'>
      <NetWorth/>
      <div className='flex flex-col items-start'>
        <OverallSummary/>
        <OverallSummary/>
      </div>
    </div>
  )
}

export default Dashboard;