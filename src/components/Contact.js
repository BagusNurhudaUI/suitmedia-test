import React, {useState, useEffect} from "react"
import {useNavigate, Route, Link} from 'react-router-dom'

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [messname, setMessname] = useState("")
    const [messemail, setMessemail] = useState("")
    const [mess, setMess] = useState("")
    const [isChecked, setIsChecked] = useState(0)
    const navigate = useNavigate();

    const submit = (e) => {
        try {
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false) {
            console.log("email salah");
            setMessemail('Invalid email address')
        } else if (!email || regex.test(email) === true){
            setMessemail('')
            setIsChecked(isChecked +1)
        }

        if (name === ''){
            setMessname("This field is required")
            console.log(messname);
        }else {
            setIsChecked(isChecked +1)
            setMessname('')
        }

        if (message === ''){
            console.log("masukkan mess");
            setMess("This field is required")
        }else {
            setIsChecked(isChecked +1)
            setMess('')
        }

        console.log(isChecked);
        } catch (error) {
            
        }
        
    }
    
    useEffect((e) => {
        if(isChecked=== 3){
            // navigate('/')
            window.location.reload('/')
        }
     }, [isChecked])
     
    return (
<div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 pb-20 pt-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={submit}>
            <div className="flex flex-wrap m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600 justify-start flex justify-start">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={messname==="" ? "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" : "w-full bg-gray-100 rounded border border-red-700 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}
                    
                    value={name} onChange={(e) => setName(e.target.value)}
                  />
                  <p className="flex justify-start text-red-500 text-sm">{messname}</p>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600 flex justify-start"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={messemail==="" ? "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" : "w-full bg-gray-100 rounded border border-red-700 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="flex justify-start text-red-500 text-sm">{messemail}</p>
                </div>
              </div>
              <div className="p-2 w-full ">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600 flex justify-start"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={mess === ""? "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" : "w-full bg-gray-100 rounded border border-red-700 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"}
                    value={message} onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <p className="flex justify-start text-red-500 text-sm">{mess}</p>
                </div>
              </div>
              <a className="p-2 w-full"  >
                
                <button className="flex mx-auto text-white bg-cyan-700 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-500 rounded text-lg w-full justify-center"
                onClick={() => {submit()}}>
                  Button
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}