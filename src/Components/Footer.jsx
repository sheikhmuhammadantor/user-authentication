import React from 'react'

function Footer() {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved to User Authentication By <span className='underline font-semibold text-base cursor-pointer btn btn-sm bg-transparent hover:bg-transparent border-transparent hover:border-transparent'>Tolha</span></p>
            </aside>
        </footer>
    )
}

export default Footer
