import { useLocation } from "react-router-dom"
import S1Hero from "../Components/HomePageSections/S1Hero"
import S2About from "../Components/HomePageSections/S2About"
import S3Usecase from "../Components/HomePageSections/S3Usecase"
import S4Rewards from "../Components/HomePageSections/S4Rewards"
import S5Hinduism from "../Components/HomePageSections/S5Hinduism"
import S6Tokenomics from "../Components/HomePageSections/S6Tokenomics"
import S7Roadmapmain from "../Components/HomePageSections/S7Roadmap"
import { useEffect } from "react"
// import S7Roadmap from "../Components/HomePageSections/S7Roadmap"



const HomePage = () => {

  // Function to scroll to the Card element
  const location1 = useLocation();
  useEffect(() => {
    const scrollToElement = () => {
      const { search } = location1;
      const params = new URLSearchParams(search);
      const scrollToId = params.get('');

      if (scrollToId) {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToElement();
  }, [location1]);

  return (
    <>
      <S1Hero />
      <S2About />
      <S3Usecase />
      <S4Rewards />
      <S5Hinduism />
      <S6Tokenomics />
      {/* <S7Roadmap roadmap={roadmapData} /> */}
      {/* <S7Roadmap roadmap="roadmapData1" />  
      <S7Roadmap roadmap="roadmapData2" />
      <S7Roadmap roadmap="roadmapData3" /> */}
      <S7Roadmapmain/>
    </>
  )
}

export default HomePage