import { useDeleteCourse } from "../features/courses/useDeleteCourse";

export default function DeleteModal({course}){
    const { mutate, isPending } = useDeleteCourse();

    const {id:courseId} = course
    console.log(courseId)


    return(
        <div>
            <div className="px-6 bg-slate-200 py-2 ">
                <div>
                    <h2 className="text-center text-xl md:text-3xl">Do You Want To Course?</h2>
                </div>
                <div className="mt-4">
                    <p className="text-center">If you delete this course the action  cannot be undone. <br/>
                        Are you sure you want to delete this course, if so then <br/>press the delete button.
                    </p>
                </div>
                <div className="mt-8 flex justify-end">
                    <button disabled={isPending} onClick={() => mutate(courseId)} className="hover:text-white hover:bg-slate-600 px-4 bg-slate-400 py-2 rounded" >Delete This Course</button>
                </div>
            </div>

        </div>
    )
}