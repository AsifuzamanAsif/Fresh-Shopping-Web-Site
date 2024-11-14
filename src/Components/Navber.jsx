
function Navber() {
  return (
    <nav className="py-9 bg-[#FAE3B6]">
        <div className="container flex justify-between items-center">
            <div>
                <img src="logo.png" alt="" />
            </div>
            <ul className="flex gap-14 font-sans text-2xl font-semibold text-[#000000]">
                <li>
                    <a>Men</a>
                </li>
                <li>
                    <a>Woman</a>
                </li>
                <li>
                    <a>Kids</a>
                </li>
                <li>
                    <a>Collection</a>
                </li>
                <li>
                    <a>Trends</a>
                </li>
            </ul>
            <div>
              <button className="bg-[#FDBB57] text-[#050505] rounded-xl text-2xl font-semibold p-3">Sing Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navber