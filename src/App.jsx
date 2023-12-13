import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Toaster} from "react-hot-toast"

import TeacherLayout from "./ui/TeacherLayout"
import Dashboard from "./pages/Dashboard"
import Intro from "./pages/Intro"
import CreateCourse from "./pages/CreateCourse"
import ManageCourse from "./pages/ManageCourse"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Account from "./pages/Account"
import Course from "./pages/Course"
import RouteProtect from "./ui/RouteProtect"
import PageNotFound from "./pages/PageNotFound"
import Reset from "./pages/Reset"
import UpdatePassword from "./features/accounts/updateandreset/updatePassword"


const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: 0
      }
    }
})
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="resetPassword" element={<Reset/>}/>
          <Route path="reset" element={<UpdatePassword/>}/>
          
          <Route element={
            <RouteProtect>
              <TeacherLayout/>
            </RouteProtect>
          } path="/app">
            <Route element={<Dashboard/>} index/>
            <Route element={<CreateCourse/>} path="create"/>
            <Route element={<ManageCourse/>} path="manage"/>
            <Route element={<Course/>} path="manage/:id"/>
            <Route element={<Account/>} path="account" />
          </Route>
          <Route element={<PageNotFound/>} path="*" />
        </Routes> 
      </BrowserRouter>
      <Toaster
      position="top-right"
      gutter={14}
      containerStyle={{margin:"8px"}}
      toastOptions={{
        success:{
          duration: 2000,
        },
        error:{
          duration: 5000,
        },
        style:{
          fontSize: "16px",
          maxWidth: "500px",
          backgroundColor: "slategrey",
          color: "white"
        }
      }}
      />
    </QueryClientProvider>
    
  )
}

export default App
