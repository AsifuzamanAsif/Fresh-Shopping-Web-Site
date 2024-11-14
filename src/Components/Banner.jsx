function Banner() {
  return (
    <section className="pt-24 bg-[#FAE3B6]">
        <div className="container flex">
            <div className="w-1/2">
              <h1 className="w-[556px] text-6xl font-semibold">
                  Find The Best Fashion Style For You
              </h1>
              <p className="w-[480px] h-64 font-normal text-2xl pt-9 pb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. 
              </p>
              <div className="pt-10">
               <button className="BUTTON bg-[#000000] text-white font-semibold text-2xl p-8 px-28 rounded-xl">
                <span>
                SHOP NOW
                </span>
                </button>
              </div>
            </div>
            <div className="w-1/2 pl-32 pb-28">
                <img src="/banner.png" alt="banner"/>
            </div>
        </div>
    </section>
  )
}

export default Banner