import { useState } from 'react'
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    const menuAnimation = useSpring({
        transform: toggleMenu ? 'translateX(0%)' : 'translateX(100%)',
    })

    return (
        <>
            <nav className='container mx-auto mb-12 flex justify-between items-center p-8 relative md:mb-8'>
                <Link to="/" className='font-main text-4xl font-extrabold'>KevTheDev<span className='text-red-600 '>.</span></Link>
                <div className='hidden md:block'>
                    <ul className='flex font-main gap-10 md:text-base lg:text-2xl'>
                        <Link onClick={handleMenuToggle} to="/">Home</Link>
                        <Link onClick={handleMenuToggle} to="/about">About</Link>
                        <Link onClick={handleMenuToggle} to="/projects">Projects</Link>
                        <Link onClick={handleMenuToggle} to="/contact">Contact</Link>
                    </ul>
                </div>
                <button className='hidden md:block md:font-main md:text-base md:border-2 md:border-red-600 md:py-3 md:px-6 hover:bg-red-500 md:hover:text-white md:transition-all lg:text-2xl'>Let's Chat</button>
                <RiMenu3Fill onClick={handleMenuToggle} size={36} className='md:hidden hover:cursor-pointer' />
            </nav>
            {/* Mobile Menu */}
            {toggleMenu && (
                <animated.div
                    className='p-3 bg-red-400 absolute right-0 bottom-0 h-full w-64 md:hidden'
                    style={menuAnimation}
                >
                    <div className='flex justify-end'>
                        <RiCloseFill onClick={handleMenuToggle} size={36} className="hover:cursor-pointer" />
                    </div>
                    <div className='flex flex-col gap-2 font-main text-2xl p-6'>
                        <Link className='text-white font-bold tracking-wider' onClick={handleMenuToggle} to="/">Home</Link>
                        <Link className='text-white font-bold tracking-wider' onClick={handleMenuToggle} to="/about">About</Link>
                        <Link className='text-white font-bold tracking-wider' onClick={handleMenuToggle} to="/projects">Projects</Link>
                        <Link className='text-white font-bold tracking-wider' onClick={handleMenuToggle} to="/contact">Contact</Link>
                    </div>
                </animated.div>
            )}
        </>
    )
}

