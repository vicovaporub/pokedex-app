import { GetPoke } from "@/GetPoke/GetPoke";

export default function Gen4Page() {

    return (
        <>
        <GetPoke offset={386} limit={107}/>
        </>
    )
}