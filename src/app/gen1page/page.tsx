import PokeList from "@/components/PokeList/PokeList"

export default function gen1Page() {

    return (
        <>
        <PokeList offset={0} limit={151}/>
        </>
    )
}