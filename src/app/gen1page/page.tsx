import { GetPoke } from "@/GetPoke/GetPoke";

export default function Gen1Page() {

    return (
        <>
        <GetPoke offset={0} limit={151}/>
        </>
    )
}