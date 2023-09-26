import { GetPoke } from "@/GetPoke/GetPoke";

export default function Gen9Page() {

    return (
        <>
        <GetPoke offset={905} limit={112}/>
        </>
    )
}