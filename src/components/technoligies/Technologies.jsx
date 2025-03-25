import React from 'react'
import { BsDatabase } from 'react-icons/bs';
import {FaCss3, FaHtml5, FaJava, FaLaravel, FaNodeJs, FaPhp, FaReact, FaShopify, FaWordpress} from "react-icons/fa"
import { SiMysql } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-7xl text-cyan-400" /> 
                
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel className="text-7xl text-red-800" />                     
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className="text-7xl text-sky-800" />                               
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-yellow-700" />                               
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaShopify className="text-7xl text-green-800" />                               
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaWordpress className="text-7xl text-white" />                               
            </div>
           

        </div>
    </div>
  )
}

export default Technologies;            
