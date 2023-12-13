import { useState } from "react"
import { HiMiniViewfinderCircle, HiPencil, HiTrash } from "react-icons/hi2"
import { useForm } from "react-hook-form";

import Modal from "../../ui/Modal";
import FormCourse from "../../ui/FormCourse";
import DeleteModal from "../../ui/DeleteModal";

import { useCreateEditCourse } from "./useCreateEditCourse";
import { useNavigate } from "react-router-dom";
import Menus from "../../ui/Menus";



export default function MyCoursesItem({course}){
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [delModal, setIsdelModal] = useState(false);
    
    
    const navigate = useNavigate();
   

    const { editCourse, isEditing } = useCreateEditCourse();

    const {id:courseId, ...ourValues} = course
    // console.log(course)

    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: ourValues
    });

    const { errors } = formState

    function onSubmit(data){
        const video = typeof data.video === "string" ? data.video : data.video[0];
        
        editCourse({newCourse: {...data, video}, id: courseId},{
            onSuccess:() => {
                setIsOpenModal(false)
                reset
            }
        });
        // console.log(data)
    }
    
    return(
        <div>
            <div className=" bg-white  py-2  flex px-2 space-x-2 md:space-x-3 w-full mt-1 font-bold ">
                <p className="w-[30%] md:w-[20%] ">{course?.title}</p>
                <p className="w-[30%] md:w-[30%] flex justify-center">
                    <video className="h-28 w-48 rounded-xl" controls>
                        <source src={course?.video} type="video/mp4"/>
                    </video>
                </p>
                <p className="text-center hidden sm:flex px-3 sm:w-[15%] md:w-[10%] ">${course.price}</p>
                <p className="lg:w-[20%] hidden lg:flex">{`${(course?.description).slice(0, 50)}...`}</p>
                <p className="w-[30%] md:w-[10%] text-center">{new Date(course?.created_at).toLocaleString()}</p>
                <div className="flex justify-end w-[10%] sm:w-[15%] md:w-[20%] lg:w-[10%]">
                    <Menus>
                        <Menus.Menu>
                            <Menus.Toggle id={courseId}/>

                            <Menus.List id={courseId}>
                                <Menus.Button icon ={<HiPencil/>} onClick={()=>setIsOpenModal(true)}>Edit</Menus.Button>
                                <Menus.Button icon={<HiTrash/>} onClick={()=>setIsdelModal(true)}>Delete</Menus.Button>
                                <Menus.Button icon = {<HiMiniViewfinderCircle/>} onClick={()=> navigate(`/app/manage/${courseId}`)}>Preview</Menus.Button>
                            </Menus.List>
                        </Menus.Menu>

                    </Menus>
                </div>
                
                {isOpenModal && 
                    <Modal setIsOpenModal={setIsOpenModal}>
                        <FormCourse
                        course={course} 
                        title="Edit Course"
                        butName="Save"
                        isPending={isEditing}
                        register={register}
                        errors={errors}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        />
                    </Modal>
                }

                {delModal && 
                    <Modal setIsOpenModal={setIsdelModal}>
                        <DeleteModal course={course}/>
                    </Modal>
                }

                
            </div>

        </div>
    )
}