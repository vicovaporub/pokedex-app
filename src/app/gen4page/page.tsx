import PokeList from "@/components/PokeList/PokeList"

export default function gen1Page() {

    return (
        <>
        <PokeList initialToGen={386} limitToGen={107} />
        </>
    )
}