function Collection() {
  return (
    <section className="bg-[#FFFFFF] pt-24 pb-44">
        <div className="container">
        <h2 className="text-center text-6xl font-bold pt-56">New Collection</h2>
        <div className="flex gap-24 mt-24">
            <div className="w-1/3 relative">
            <img className="w-full" src="c-1 (1).png" alt="" />
            <div className="w-10/12 h-14 bg-white text-center absolute bottom-6 left-1/2 -translate-x-1/2 rounded-3xl ">
                <p className="leading-[56px] text-2xl font-normal">Sweater</p>
            </div>
            </div>
            <div className="w-1/3 relative">
            <img className="w-full" src="c-2 (3).png" alt="" />
            <div className="w-10/12 h-14 bg-white text-center absolute bottom-6 left-1/2 -translate-x-1/2 rounded-3xl ">
                <p className="leading-[56px] text-2xl font-normal">Sweater</p>
            </div>
            </div>
            <div className="w-1/3 relative">
            <img className="w-full " src="c-3.png" alt="" />
            <div className="w-10/12 h-14 bg-white text-center absolute bottom-6 left-1/2 -translate-x-1/2 rounded-3xl ">
                <p className="leading-[56px] text-2xl font-normal">Sweater</p>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Collection