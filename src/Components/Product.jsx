function Product() {
  return (
    <section className=" mt-32 mb-32 bg-[#CFA485]">
       <div className="container">
       <div className="flex">
            <div className="w-2/4">
                <h2 className="pt-9 text-6xl font-bold text-white w-[437px]">Best Seller Product</h2>
                <p className="pt-11 w-[437px] text-white pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</p>
                <button className="bg-[#000000] py-6 text-white inline-block px-20 rounded-xl">Learn MORE</button>
            </div>
            <div  className="flex gap-8 pt-16">
            <div>
                <img className="w-full" src="p.png" alt="" />
            </div>
            <div>
                <img className="w-full" src="p-2.png" alt="" />
            </div>
            </div>
        </div>
       </div>
    </section>
  )
}
export default Product