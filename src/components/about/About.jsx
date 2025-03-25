import React from 'react'
import aboutImage from "../../assets/about.jpg"
import { ABOUT_ME } from '../../constant/constant'
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center  text-4xl">About me</h1>
        <span className="text-neutral-500"></span>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImage} alt="about" />
                </div>
               
            </div>
            <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 mx-2-xl py-6">
                            {ABOUT_ME}
                        </p>

                    </div>

                </div>
        </div>
    </div>
  )
}

export default About
