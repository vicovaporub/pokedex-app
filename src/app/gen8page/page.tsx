import { GetPoke } from "@/GetPoke/GetPoke";

export default function Gen8Page() {

    return (
        <>
        <GetPoke offset={809} limit={96}/>
        </>
    )
}