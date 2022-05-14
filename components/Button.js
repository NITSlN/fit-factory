import {MdKeyboardArrowRight} from 'react-icons/md'
function Button({text}) {
  return (
    <div className="bg-[#081158] cursor-pointer py-3 hover:bg-blue-900 inline-block text-white pl-2 px-8  rounded flex items-center">
       <MdKeyboardArrowRight className='mr-2 scale-150'/> {text}
    </div>
  )
}

export default Button