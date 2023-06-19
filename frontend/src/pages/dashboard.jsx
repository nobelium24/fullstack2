import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const uri = "http://localhost:6660/users/verify"
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    setInterval(useEffect(() => {
        console.log(token)
        axios.get(uri, {
            headers: {
                Authorization: `bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            alert(err.response.data.message)
            console.log(err)
            navigate("/signin")
        })
    }, []), 1000)

    const [files, setFiles] = useState("")
    const [imageURL, setImageURL] = useState("")
    const pickFile = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const result = reader.result
            setFiles(result)
        }
    }


    const postImage = () => {
        console.log(files)
        let url = "http://localhost:6660/users/upload"
        axios.post(url, {files:files}).then((result)=>{
            console.log(result)
            setImageURL(result.data.secure_url)
        }).catch((error)=>{
            console.log(error)
        })
    }


    return (
        <>
            <div>Dashboard works</div>
            <input type="file" onChange={(e) => pickFile(e)} />
            <button onClick={postImage}>Post Image</button>
            <br />
            <img src={imageURL} alt="" />
        </>
    )
}

export default Dashboard