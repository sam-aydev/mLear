import supabase, { supabaseUrl } from "../supabase/supabase";

export async function SignUp({fullName, email, password, image}){
    const imageName = `IMG-${Math.random()}`
    .replace("/", "");


    const imagePath = `${supabaseUrl}/storage/v1/object/public/profile_img/${imageName}`
    
    
    // https://kpjfmmolconsrcrmjdav.supabase.co/storage/v1/object/public/profile_img/af.PNG
    const { data, error } = await supabase.auth.signUp(
        {
            email,
            password,
            options:{
                data:{
                    full_name : fullName,
                    image:imagePath
                }
            }
        }
    );


  
    const { error: storageErr} = await supabase.storage.
    from("profile_img") 
    .upload(imageName, image);
    
       
    if(storageErr) throw new Error("Unable to regsiter due to upload")
    
    if(error) throw new Error("Unable To Register");

    console.log(data)
    return data;
}

export async function LoginApi({email, password}){

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if(error) throw new Error("Unable To Login");

    return data;
}


export async function getUser(){
    const { data: session } = await supabase.auth.getSession();
    if(!session.session) return null;

    // console.log(session)
    const { data, error } = await supabase.auth.getUser()

    if(error) throw new Error("Unable To Login");

    return data?.user;
}

export async function getSession(){
    const { data: session } = await supabase.auth.getSession();
    if(!session.session) return null;

    console.log(session)
    
    return session?.session
}


// export async function deleteUser(id){

//     const { error } = await supaRole.auth.admin.deleteUser(id)

//     if(error) throw new Error("Error Deleting User")
    
// }

export async function logout(){

    const {  error } = await supabase.auth.signOut()

    if(error) throw new Error("Error Signing Out")
    
}

export async function updateAuthenticatedUser({email, password}){

    const { data, error } = await supabase.auth.updateUser({
        email,
        password
    })

    if(error) throw new Error("Error Updating User")

    return data;
}

export async function updatePassword({password}){

    const { data, error } = await supabase.auth.updateUser({password})

    if(error) throw new Error("Error Updating User")

    return data;
}

export async function resetPassword({email}){

    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if(error) throw new Error("Error sending reset email")

    return data;
}

