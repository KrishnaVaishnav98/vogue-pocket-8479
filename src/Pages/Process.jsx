import React from 'react'
import "../CSS/Process.css"
import {Link } from "react-router-dom";

export default function Process() {
  return (
    <div className='pro-container'>
     <div className='head'>
     <p className='child-h1'>Money Mentor (Long Term Loan)</p>
     <p className='child-p'>Money Mentor is a convenient, long term, easy EMI loan offering for our customers. This can be availed by customers who require it for personal purposes, for up to 36 months tenure.</p>
     <Link to='/verification'><button className='child-btn'>Apply Now</button></Link>
     <div className='child-boxs'>
        <div  className='child-box'>
            <img  className='img' src="https://www.paymeindia.in/_next/image?url=%2FNo_paper.png&w=64&q=75" alt="err" />
            <div>
                <p className='h2'>No Collaterals required</p>
                <p className='child-p'>We don't require you to submit your property papers or anything as a collateral.</p>
            </div>
        </div>
        <div  className='child-box'>
            <img className='img' src="https://www.paymeindia.in/_next/image?url=%2Fcheck_icon.png&w=64&q=75" alt="err" />
            <div>
                <p className='h2'>Instant Approval</p>
                <p className='child-p'>Approval for your sanctioned limit happens instantly.</p>
            </div>
        </div>
        <div  className='child-box'>
            <img className='img' src="https://www.paymeindia.in/_next/image?url=%2FEasy_emi.png&w=64&q=75" alt="err" />
            <div>
                <p className='h2'>Easy EMIs</p>
                <p className='child-p'>Easy EMI options.</p>
            </div>
        </div>
     </div>
     </div>
    </div>
  )
}
