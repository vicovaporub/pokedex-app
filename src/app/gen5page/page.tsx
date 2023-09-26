import { GetPoke } from "@/GetPoke/GetPoke";

export default function Gen5Page() {

    return (
        <>
        <GetPoke offset={493} limit={156}/>
        </>
    )
}