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
                    <a href='/gen2page'>Gen 2</a>
                </li>
                <li>
                    <a href='/gen3page'>Gen 3</a>
                </li>
                <li>
                    <a href='/gen4page'>Gen 4</a>
                </li>
                <li>
                    <a href='/gen5page'>Gen 5</a>
                </li>
                <li>
                    <a href='/gen6page'>Gen 6</a>
                </li>
                <li>
                    <a href='/gen7page'>Gen 7</a>
                </li>
                <li>
                    <a href='/gen8page'>Gen 8</a>
                </li>
                <li>
                    <a href='/gen9page'>Gen 9</a>
                </li>
            </ul>
        </nav>
    )
}