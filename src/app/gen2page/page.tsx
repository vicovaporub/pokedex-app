import { GetPoke } from "@/GetPoke/GetPoke";

export default function Gen2Page() {

    return (
        <>
        <GetPoke offset={151} limit={100}/>
        </>
    )
}