 
import BuyToken from '../Components/PresalePageSection/BuyTokenSection'
import HowToBuy from '../Components/PresalePageSection/HowToBuySection'
import Referral from '../Components/PresalePageSection/ReferralSection'

const Presale = () => {
  return (
    <>
      <div className='   bg-[url("/presalebg.png")] bg-cover ' >
          <BuyToken />
          <HowToBuy />
          {/* <Referral /> */}
      </div>
      </>
  )
}

export default Presale