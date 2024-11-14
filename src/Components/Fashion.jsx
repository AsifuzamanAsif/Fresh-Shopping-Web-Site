function Fashion() {
  return (
    <section>
        <div className="container">
            <div className="flex gap-32">
                <div className="w-1/2">
                <img className="w-full" src="fashion.png" alt="" />
                </div>
                <div className="">
                    <h3 className=" text-6xl font-bold w-[437px]">Best Fashion Since 2010</h3>
                    <p className="text-2xl font-semiBold pt-[63px] w-[443px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.</p>
                </div>
            </div>
            <div className="flex   text-center justify-end pt-20">
              <div className="bg-[#FEECC8] flex w-[780px] h-[280px] gap-12  justify-center rounded-3xl ">
                <div className="text-center pt-20">
                  <h2 className="text-6xl font-bold">2010</h2>
                  <p className="text-2xl font-medium pt-7">Founded</p>
                </div>
                <div className="text-center pt-20">
                 <h2 className="text-6xl font-bold">5000+</h2>
                 <p className="text-2xl font-medium pt-7">Product Sold</p>
                </div>
                <div className="text-center pt-20">
                 <h2 className="text-6xl font-bold">4500+</h2>
                 <p className="text-2xl font-medium pt-7">Best Reviews</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Fashion