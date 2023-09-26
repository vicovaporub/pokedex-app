import { GetPoke } from "@/GetPoke/GetPoke";

export default function Gen6Page() {

    return (
        <>
        <GetPoke offset={649} limit={72}/>
        </>
    )
}