import Button from "./Button"
import { BsFillCartFill } from "react-icons/bs";
function Navbar() {
  return (
    <div className="flex justify-center items-center h-[80px] z-10 fixed w-full top-0">
        <div className="flex justify-between w-[95%]">
            <div className="text-blue-900 font-bold text-2xl">
                FitFactory
            </div>
            <div className="gap-1 flex text-blue-900">
                <a className="px-6 py-2" href="">About</a>
                <a className="px-6 py-2" href="">Free Workouts</a>
                <a className="px-6 py-2" href="">Shop</a>
                {/* <a className="px-6 py-2" href="">BOOK A CALL</a> */}
                <Button text={'BOOK A CALL'}/>
                <a className="px-6 py-2 scale-125 self-center" href=""><BsFillCartFill/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar