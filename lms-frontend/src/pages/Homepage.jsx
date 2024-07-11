import Homelayout from "../Layout/Homelayout";

function HomePage(){

return (
    <Homelayout>
    <div className="pt-10 text-white flex item-centre justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
<h1 className="text-5xl font-semibold">
    Find out best
    <span className="text-yellow-500 font-bold"> 
        online courses 
    </span>
</h1>
<p className="text-xl text-gray-200"> 
    we have a large library of course taught by skilled and qualified faculties at very low cost 
</p>
        </div>
         </div>
    </Homelayout>
)
}

export default HomePage;


