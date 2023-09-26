import '@/components/NavBar/NavBar.css'

export const NavBar = () => {

    return (
        <nav className='navbar'>
            <a href="/" className='home-button'>
                {/* eslint-disable-next-line react/no-unescaped-entities*/}
                Vico's Pokédex
            </a>
            <ul>
                <li>
                    <a href='/gen1page'>Gen 1</a>
                </li>
                <li>
                    <a href=''>Gen 2</a>
                </li>
                <li>
                    <a href=''>Gen 3</a>
                </li>
                <li>
                    <a href=''>Gen 4</a>
                </li>
                <li>
                    <a href=''>Gen 5</a>
                </li>
                <li>
                    <a href=''>Gen 6</a>
                </li>
                <li>
                    <a href=''>Gen 7</a>
                </li>
                <li>
                    <a href=''>Gen 8</a>
                </li>
            </ul>
        </nav>
    )
}