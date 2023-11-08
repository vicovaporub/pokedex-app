import { SearchComponent } from "@/components/SearchComponent/SearchComponent";

export default function Home() {
  return (
   <>
   <div className="home-disclaimer">
    <h1>Welcome to my simple Pokedex <br />
    Here you can search for details of a specific Pokemon <br />
    with it's name or number. Or you can get a list of cards for each generation <br />
    for just the base stats values by clicking one of the generation buttons above</h1>
   </div>
   <div className="search-container">
   <SearchComponent/>
   </div>
   </>
  )
}
