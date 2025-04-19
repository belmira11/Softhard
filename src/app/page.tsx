import Header from "@/Components/Haeder"
import Banner from "@/Components/Banner"
import Select from "@/Components/Select"
import CursosMaisProcurados from "@/Components/CursosMaisProcurados"
import Testemunha from "@/Components/Testemunha"
import Video from "@/Components/Video"
import Quadroh from "@/Components/Quadroh"
import Questoes from "@/Components/Questoes"
import Footer from "@/Components/Footer"
import Parceiros from "@/Components/Parceiros"
import ChatPopup from "@/Components/ChatPopup"
import Curso from "@/Components/Curso"
export default function Home(){
  return(
    <div className="bg-white ">
      <Header/>
      <Banner/>
      <Select/>
      <Curso/>
      <CursosMaisProcurados/><br/>
      <Video/>
      <Parceiros/>
      <Testemunha/>
      <Quadroh/>
      <Questoes/>
      <Footer/>
      <ChatPopup/>
    </div>
  )
}