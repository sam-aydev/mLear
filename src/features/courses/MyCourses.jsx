import { useSearchParams } from "react-router-dom";
import { useCourses } from "./useCourses";

import MyCoursesItem from "./MyCoursesItem"
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import Menus from "../../ui/Menus";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Filter from "../../ui/Filter";


const PAGE_SIZE = 3
// const count = 20
export default function MyCourses(){
    const { isLoading, isLoadingError, courses, count } = useCourses();
    const [searchParams, setSearchParams] = useSearchParams();

    const value = searchParams.get("price") || "all";
    // console.log(value)
    
    let filterCourses;

    if(value === "all") filterCourses = courses;
    if(value === "<35") filterCourses = Array.isArray(courses) ? courses.filter((filter)=>filter.price < 35) : null;
    if(value === ">35") filterCourses = Array.isArray(courses) ? courses.filter((filter)=>filter.price > 35) : null;
    

    const sortVal = searchParams.get("sort") || "price-desc";
    // console.log(sortVal)
    const [field, direction] = sortVal.split("-");
    // console.log(field, direction)
    const modifier = direction === "asc" ? 1 : -1;
    const sortedCourses = Array.isArray(filterCourses) ? filterCourses?.sort((a, b) =>(a[field] - b[field]) * modifier) : null;
   
    // console.log(sortedCourses, modifier)
    // console.log(filterCourses)
   

    
    // function handleClick(value){
    //     searchParams.set("price", value)
    //     setSearchParams(searchParams);
    //     // console.log(searchParams)
    // }

    function handleChange(e){
        searchParams.set("sort", e.target.value)
        setSearchParams(searchParams)
        // console.log(searchParams)
    }

    const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))
    const pageCount = Math.ceil(count/ PAGE_SIZE);
    
    function nextPage(){
       const next = currentPage === pageCount ? currentPage : currentPage + 1
        searchParams.set("page", next)
        setSearchParams(searchParams)
    }

    function prevPage(){
        const prev = currentPage === 1 ? currentPage : currentPage - 1
        searchParams.set("page", prev)
        setSearchParams(searchParams)
    }


    return(
        <div>
            <div className="md:w-[64%] lg:w-[73%] xl:w-[78%] md:absolute md:right-0 min-h-screen  w-full flex justify-center px-1 bg-slate-300">
                <div className="w-full">
                    <div className="text-center mt-4">
                        <h2 className="text-3xl  font-bold">My Courses</h2>
                    </div>

                <Menus>
                    <div className="flex flex-col px-4">

                        <div className="mt-10 hidden sm:flex sm:justify-between px-2 ">
                            <div className="space-y-2">
                                <div>
                                    <p className="font-bold ">Filter By Price:</p>
                                </div>

                               
                                
                                <div className="space-x-3 md:text-sm  lg:text-[16px] space-y-1">
                                    <Filter field="price" initialValue="all" options={[
                                        {value: "all", label: "All" },                                     
                                        {value: "<35", label: "Less Than $35" },                                     
                                        {value: ">35", label: "Greater Than $35" }                                     
                                    ]}/>
                                    
                                    {/* <button onClick={()=> handleClick("all")} className={value === "all" ? "bg-slate-600 text-white  px-2 py-1 rounded": "hover:bg-slate-600 hover:text-white bg-white px-2 py-1 rounded text-black"}>All</button>
                                    <button onClick={()=> handleClick("<35")}  className={value === "<35" ? "bg-slate-600 text-white  px-2 py-1 rounded": "hover:bg-slate-600 hover:text-white bg-white px-2 py-1 rounded text-black"}>Less Than $35</button>
                                    <button onClick={()=> handleClick(">35")}  className={value === ">35" ? "bg-slate-600 text-white  px-2 py-1 rounded": "hover:bg-slate-600 hover:text-white bg-white px-2 py-1 rounded text-black"}>Greater than $35</button> */}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="mt-1">
                                    <p className="font-bold">Sort:</p>
                                </div>
                                <div>
                                    <select value={sortVal} onChange={(e) =>handleChange(e)} name="" id="" className="md:text-sm lg:text-[16px] px-2 py-1 rounded">
                                        <option value="price-desc">Sort By Price(High To Low)</option>
                                        <option value="price-asc">Sort By Price(Low To High)</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="text-center bg-slate-200 text-slate-600  py-2  flex  md:space-x-4  w-full mt-4 font-bold ">
                            <p className="w-[30%] md:w-[20%] ">Title</p>
                            <p className="w-[30%] md:w-[30%]">Video</p>
                            <p className="sm:w-[15%] text-center md:w-[10%] hidden sm:flex  ">Course Price</p>
                            <p className="lg:w-[20%] hidden lg:flex ">Course Description</p>
                            <p className="w-[30%] md:w-[10%]">Created At</p>
                            <p className="w-[10%] md:w-[20%] lg:w-[10%]"></p>
                        </div>
                    
                        {!sortedCourses  && !isLoadingError && <Error pending>Data Loading...</Error> }
                        {isLoading && <Spinner/>}
                        {isLoadingError && <Error>There was error loading courses! 😢</Error>}
                        {sortedCourses?.length === 0 && <p className="mt-8 text-center px-3 text-white bg-red-400 py-2 font-semibold">There is no course, go and create a course!</p>}

                        {Array.isArray(sortedCourses) ? sortedCourses?.map((course)=> 
                        <MyCoursesItem course={course} key ={course.id}/>): null}                        

                        { sortedCourses  && pageCount > 1 &&
                        <div>
                            
                                <div>
                                    <p>Showing <span className="font-bold">{(currentPage - 1) * PAGE_SIZE + 1}</span> to <span className="font-bold">{currentPage === pageCount ? count : currentPage * PAGE_SIZE }</span> of <span className="font-bold">{count}</span> results</p>
                                </div>
                                <div className="flex justify-between px-4 mt-4 pb-8">
                                    <div>
                                        <button disabled={currentPage === 1} onClick={prevPage} className="px-3 py-2 flex space-x-3 hover:font-semibold font-semibold rounded-md bg-black text-white hover:text-black hover:bg-white">
                                            <HiChevronLeft className="w-6 h-6 font-semibold"/><span>Previous</span>
                                        </button>
                                    </div>

                                    <div>
                                        <button disabled={currentPage === pageCount} onClick={nextPage} className="px-3 py-2 flex space-x-3 hover:font-semibold font-semibold rounded-md bg-black text-white hover:text-black hover:bg-white">
                                            <span>Next</span><HiChevronRight className="w-6 h-6 font-semibold"/>
                                        </button>
                                    </div>
                                </div>
                           
                        </div>}
                    </div>
                </Menus>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}