import PokeList from "@/components/PokeList/PokeList"

export default function gen1Page() {

    return (
        <>
        <PokeList initialToGen={809} limitToGen={96} />
        </>
    )
}