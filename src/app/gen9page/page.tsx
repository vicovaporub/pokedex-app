import PokeList from "@/components/PokeList/PokeList"

export default function gen1Page() {

    return (
        <>
        <PokeList initialToGen={905} limitToGen={112} />
        </>
    )
}