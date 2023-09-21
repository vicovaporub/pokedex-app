import { ButtonComponent } from "@/components/PokeList/ButtonComponent/buttoncomponent";
import { PokeList } from "@/components/PokeList/pokelist";

export default function Home() {
  return (
   <>
   <div className='pokemon-container'>
   <PokeList />
   </div>
   <ButtonComponent />
   </>
  )
}
