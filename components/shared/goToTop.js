import React from 'react'

const GoToTop = () => {
    const goToBtn = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})

    }
  return (
    <>  
    <div className="top-btn" onClick={goToBtn}>
        kk
    <button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  class="!fixed bottom-5 right-5 hidden rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
  id="btn-back-to-top">
 </button>
    </div>
    </>
  
  )
}

export default GoToTop