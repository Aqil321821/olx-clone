
const Menubar = (props) => {
  return (
    <div className="flex shadow-sm h-10 p-2 " >
        <h1 onClick={()=>props?.setmenu("Shirt")} className="ml-96 cursor-pointer">Shirt</h1>
        <h1  onClick={()=>props?.setmenu("Jackets")} className="ml-5 cursor-pointer">Jackets</h1>
        <h1  onClick={()=>props?.setmenu("Phones")} className="ml-5 cursor-pointer">Mobile Phones</h1>
        <h1  onClick={()=>props?.setmenu("Scooters")} className="ml-5 cursor-pointer">Scooters</h1>
        <h1  onClick={()=>props?.setmenu("Bike")} className="ml-5 cursor-pointer">Bike</h1>
        <h1  onClick={()=>props?.setmenu("Apartments")} className="ml-5 cursor-pointer">Apartments</h1>
    </div>
  )
}

export default Menubar