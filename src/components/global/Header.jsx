





// 'use client'

import { useState, useEffect, useRef  } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { Link } from 'react-router-dom'
// import logo from '../../assets/logo.gif'

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'Players', href: '/players' },
  { name: 'Paltan World', href: '/paltanworld' },
  { name: 'Tickets', href: 'https://www.district.in/events/pkl-2025-chennai-team' }, 
]

export default function Header() {

// const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [showHeader, setShowHeader] = useState(true);
//   const lastScrollY = useRef(0)
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY

//       if (currentY > lastScrollY.current && currentY > 20) {
//         setShowHeader(false)
//       } else {
//         setShowHeader(true)
//       }

//       lastScrollY.current = currentY
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])
//   return (
//     <div className='container'>
//       <header className={`fixed max-w-[90%] z-50 h-16 flex items-center top-10 parent-skew px-0 py-0 lg:h-10 transition-all duration-500 ease-in-out
//         ${showHeader ? "translate-y-0" : "-translate-y-full opacity-0"} `}> 
        
//         <div className='child-skew w-full flex items-center'>
//           <nav aria-label="Global" className="w-full flex items-center justify-between lg:justify-center p-4 lg:px-8 child-skew">
//             <div className="flex items-center">
//               <Link to="/hero" className="-m-1.5 p-1.5">
//                 {/* <span className="sr-only">Your Company</span> */}
//                 <img
//                   alt=""
//                   src={logo}
//                   className="z-50 skew-x-0 lg:skew-x-15 logo"
//                 />
//               </Link>
//             </div>
//             <div className="hidden lg:flex flex-1 justify-center items-center gap-x-12">
//               {navigation.map((item) => (
//                 <Link key={item.name} to={item.href} target={item.target} rel={item.rel} 
//                 className="text-sm/6 font-semibold text-white hover:text-[#ff7500] transition-all duration-500">
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//             <div className="flex lg:hidden flex-1 justify-end">
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
//               >
//                 {mobileMenuOpen ? (
//                   <XMarkIcon aria-hidden="true" className="size-6 skew-x-15" />
//                 ) : (
//                   <Bars3Icon aria-hidden="true" className="size-6 skew-x-15" />
//                 )}
//               </button>
//             </div>
//           </nav>
//         {mobileMenuOpen && (
//           <div className="fixed w-full top-16 z-40 inset-x-0 p-6 bg-black/60 backdrop-blur-lg border-t border-gray-600 child-skew transition-all duration-500 navbar">
//             <nav className="flex flex-col text-center gap-4">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   target={item.target} 
//                   rel={item.rel}
//                   onClick={()=>setMobileMenuOpen(false)}
//                   className="text-white text-lg font-semibold hover:bg-white/10 px-3 py-2 rounded"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//         </div>
//       </header>
//     </div>
//   )



  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50 mt-5 mx-10 h-20 bg-[#0000004e] ">
        <nav aria-label="Global" className="flex items-center justify-between p-6 h-20 lg:px-8 bg-[#0000004e] border border-[#e7e7e7] absolute left-[50%] w-full -translate-x-1/2 'skew-x-[18deg]'">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-2 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="logopp.gif"
                className="h-40 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src=""
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                 
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      
    </div>
  )
}

