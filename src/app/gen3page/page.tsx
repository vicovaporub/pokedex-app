import { GetPoke } from "@/GetPoke/GetPoke";

export default function Gen3Page() {

    return (
        <>
        <GetPoke offset={251} limit={135}/>
        </>
    )
}