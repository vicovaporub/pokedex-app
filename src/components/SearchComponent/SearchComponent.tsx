import '@/components/SearchComponent/SearchComponent.css'

export const SearchComponent = () => {


    return (
        <div className='search-container'>
            <input type='text' placeholder='Pokemon name'></input>
            <button type='button'>ok</button>
        </div>
    )
}