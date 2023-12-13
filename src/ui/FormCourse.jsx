import Error from "./Error";

export default function FormCourse({title, butName, handleSubmit, onSubmit, isPending, register, errors}){
   

    
    return(
        <div className=" bg-slate-50  px-10  ">
            <form onSubmit={handleSubmit(onSubmit)} className="md:px-12 ">
                <h2 className="text-xl md:text-3xl font-bold text-center">{title}</h2>
                <div className="mt-4 md:w-full">
                    <label className="block text-lg font-semibold">Course Title:</label>
                    <input disabled={isPending} {...register("title", {required:"This field is required!"})} type="text"   className="w-full border-2 border-slate-600 rounded-md px-3 py-1"/>
                    {errors?.title?.message &&  <Error>{errors.title.message}</Error>}
                </div>

                <div className="mt-2">
                    <label className=" block text-lg font-semibold">Requirements:</label>
                    <textarea disabled={isPending} {...register("requirements", {required:"This field is required!"})} name="requirements" id="" cols="22" rows="2"  className="border-2 w-full border-slate-600 rounded-md px-3 py-1"></textarea>
                    {errors?.requirements?.message &&  <Error>{errors.requirements.message}</Error>}
                </div>

                <div className="mt-2">
                    <label className=" block text-lg font-semibold">Description:</label>
                    <textarea disabled={isPending} {...register("description", {required:"This field is required!"})} name="description" id="" cols="22" rows="3"  className="border-2 w-full border-slate-600 rounded-md px-3 py-1"></textarea>
                    {errors?.description?.message &&  <Error>{errors.description.message}</Error>}
                </div>

                <div className="mt-2">
                    <label className="block text-lg font-semibold">Course Video:</label>
                    <input disabled={isPending} type="file" accept="video/mp4" {...register("video", {required:"This field is required (mp4)!"})} className="w-full   border-dashed border-2 border-slate-600 rounded-xl px-3 py-1"/>
                    {errors?.video?.message &&  <Error>{errors.video.message}</Error>}
                </div>

                <div className="mt-2 md:w-full">
                    <label className="block text-lg font-semibold">Course Price($):</label>
                    <input disabled={isPending} type="number"  {...register("price", {required:"This field is required!", validate:(value)=> value > 10 || "Course Price must be Greater than $10!"} )}  className="w-full border-2 border-slate-600 rounded-md px-3 py-1"/>
                    {errors?.price?.message &&  <Error>{errors.price.message}</Error>}
                </div>

                <div className="mt-4 flex justify-center">
                    <button disabled={isPending} className="bg-slate-600 w-full  text-white py-2  rounded-xl border-white border-2 hover:bg-white hover:border-2 font-semibold hover:border-slate-600 hover:text-black">{butName}</button>
                </div>
            </form>
        </div>
    )
}