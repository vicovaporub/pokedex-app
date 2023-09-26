import { GetPoke } from "@/GetPoke/GetPoke";

export default function Gen7Page() {

    return (
        <>
        <GetPoke offset={721} limit={88}/>
        </>
    )
}