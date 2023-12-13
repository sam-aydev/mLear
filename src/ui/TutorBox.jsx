import { HiBanknotes, HiChartBar } from "react-icons/hi2";
import { ResponsiveContainer, Cell,Pie, Tooltip, PieChart, Legend, LabelList } from "recharts";
import Filter from "./Filter";
import Error from "./Error";


export default function TutorBox({course, asumedPrice, user, isPending}){
    const courseNo = course?.length
    console.log(course?.courseNo)
    

    
    return(
        <div className="px-5 sm:px-0">
            {courseNo === 1 && <Error pending>🎉🎉 Congratulations On Creating Your First Course. 🚀</Error>}
            <h2 className="mt-6 px-2 pb-8 text-black font-bold text-xl md:text-2xl">Hi {user?.user_metadata?.full_name ? user?.user_metadata?.full_name : "Loading..."}, Welcome To Your Dashboard!</h2>
            {courseNo === 0 && <Error>Go And Create Your First Course</Error>}
            <Filter field="days" initialValue="7" options={[
                {label: "7 days Ago", value:"7"},
                {label: "30 days Ago", value:"30"},
                {label: "90 days Ago", value:"90"},
            ]}
            />
            <div className="grid grid-cols-2 mt-8 mx-auto  space-x-4 xl:space-x-10 w-[100%] ">                        
                <div className=" bg-white rounded-xl  px-3 ">
                    <div className="flex items-center justify-between  sm:px-4 sm:space-x-5  py-4    rounded-xl">
                        <HiChartBar className="w-10 h-10  hidden sm:flex "/>
                        <p className=" sm:w-[45%] text-sm md:text-md lg:text-xl lg:w-[55%] font-bold xl:w-[50%]">Number Of <br/>Courses</p>
                        <p className="text-sm  md:text-md lg:text-lg font-bold ">{courseNo}</p>
                    </div>
                </div>

                <div className=" bg-white rounded-xl px-2 lg:px-8 ">
                    <div className="flex justify-between items-center sm:px-4 sm:space-x-5 py-4    rounded-xl">
                        <HiBanknotes className="w-10 h-10 hidden sm:flex"/>
                        <p className="sm:w-[50%] text-sm md:text-md lg:text-xl lg:w-[66%]  font-bold xl:w-[55%]">Assumed <br/><span className="sm:flex hidden">Amount</span>  Earnings</p>
                        <p className="text-sm md:text-md lg:text-lg font-bold ">${asumedPrice}</p>
                    </div>
                </div>  
            </div>

            <div className="px-2 sm:px-8 bg-white mt-8  rounded-xl">
                <h2 className="text-3xl text-center font-bold py-8">Your Courses And Their Price</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie 
                        data={course}
                        nameKey="title"
                        dataKey="price" 
                        innerRadius={40}
                        outerRadius={68}
                        cx="50%"
                        cy="50%"
                        paddingAngle={3}
                        >
                        <LabelList 
                        dataKey= {course.price}
                        position="right"
                        style={{fontSize : "13px"}}/>
                        {course.map((cors)=> 
                        <Cell key={cors.id} fill={cors.Label} stroke="white"/>)
                        }
                        </Pie>
                        
                        <Tooltip className="hidden sm:flex"/>
                        <Legend 
                        verticalAlign="middle" 
                        layout="vertical" 
                        iconType="circle" 
                        align="right" 
                        width="30%"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}