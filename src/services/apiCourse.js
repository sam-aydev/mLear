import supabase, { supabaseUrl } from "../supabase/supabase";
import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helper";


export async function createCourse(newCourse, id){
    const isVideoPath = newCourse.video?.startsWith?.(supabaseUrl);

    const videoName = `VID-${Math.random()}-${newCourse.video.name}`
    .replace("/", "")

    const videoPath = isVideoPath ? newCourse.video : `${supabaseUrl}/storage/v1/object/public/teacher-course/${videoName}`;
    
    let query =  supabase.from("courses");

    //CREATE

    if(!id)
    query = query.insert([{...newCourse, video: videoPath}])

    // EDIT 

    if(id)
    query = query.update({...newCourse, video: videoPath}).eq("id", id)

    const {data, error} = await query.select().single()


    if(error) {
        throw new Error('Course Could Not Be Created');
    }
    
    const { error: storageErr} = await supabase.storage
    .from("teacher-course") 
    .upload(videoName, newCourse.video);
    
    if(storageErr) {
        await supabase.from("courses").delete().eq("id", data.id)

        throw new Error("Course video could not be uploaded, so course got deleted")
    }

    return data;
}

export async function deleteCourse(id){
    const { data, error } = await supabase
    .from("courses")
    .delete()
    .eq("id", id)

    if(error) throw new Error("Course could not be deleted!");

    return data;
}

export async function getCourses(page, profileId){
    let query = supabase
    .from("courses")   
    .select("*", {count: "exact"})
    .eq("profile_id", profileId);
    
    
    
    if(page) {
        const from = (page -1) * PAGE_SIZE ;
        const to = from + (PAGE_SIZE - 1)
        query = query.range(from, to)
    }
    
    const {data, error, count} = await query ;
    if(error){
        throw new Error('Course Could Not Be Created');
    }
    


    return {data, count};
}





export async function getCourseById(id){
    const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .single();
    
    if(error) {
        throw new Error("Could not get this course")
    };

    return data;
    
}

export async function getMyCourses(profileId){
    const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("profile_id", profileId)
    
    
    if(error) {
        throw new Error("Could not get this course")
    };

    return data;
    
}



export async function getCoursesAfterDays(date, profileId){
    const { data, error}  = await supabase
    .from("courses")
    .select("*")
    .eq("profile_id", profileId)
    .gte("created_at", date)
    .lte("created_at", getToday({end : true}))

    if(error) throw new Error('Courses could not be loded');

    return data;
}
