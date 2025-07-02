import { Plus } from "lucide-react";
import { Link } from "react-router";

export function Heading() {
  return (
    <div className="flex items-center mb-10">
        <h5 className="text-gray-100 font-bold text-2xl">
            <Link to='/'>
                Task App
            </Link>
        </h5>
        <div className="flex-grow text-right px-4 py-2 m-2">
                <Link to="/add">        
                    <button className="bg-green-400 hover:bg-green-500 text-while font-semibold py-2 px-4 rounded inline-flex items-center hover:cursor-pointer">
                        <Plus />
                        Add Employee
                    </button>
                </Link>
        </div>
    </div>
  )
}
