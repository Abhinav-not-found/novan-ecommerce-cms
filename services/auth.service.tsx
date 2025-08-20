import axios from "axios"
import { toast } from "sonner"

export const handleRegister = async(name:String,email:String, password:String)=>{
  try {
    const res = await axios.post('/api/auth/register',{
      name, email, password
    })
    if(res.status === 201){
      toast.success(res.data.message)
      window.location.href = '/login'
    }
  } catch (error) {
    console.log(error)
  }
}
export const handleLogin = async(email:String, password:String)=>{
  try {
    const res = await axios.post('/api/auth/login',{
      email, password
    })
    if(res.status === 200){
      console.log(res.data)
      const token = res.data.data
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      toast.success('Login successful')
      window.location.href = '/'
    }
  } catch (error) {
    console.log(error)
  }
}
export const handleLogout = async()=>{
  localStorage.removeItem('token')
    delete axios.defaults.headers.common["Authorization"];
      window.location.href = "/";
}
