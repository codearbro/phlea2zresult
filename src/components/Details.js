// import { useState, useEffect } from "react";
// import axios from "axios";
import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
import Logo from "./comp/logo";
// import Footer from "./comp/footer";
import "./details.css"

export default function Details() {
    return (
        <div className="details">
        <Logo/>
        
            <table className="table1">
                <tr>
                    <td><h2>Name of post:</h2></td>
                    <td><spam>NTA CUET UG 2023 Admission</spam></td>
                </tr>
                <tr>
                    <td><h2>Post Date / Update:</h2></td>
                    <td><spam>15 July 2023 | 07:22 PM</spam></td>
                </tr>
                <tr>
                    <td><h2>Short Information :</h2></td>
                    <td><spam><a href ="https://codearbro.com">National teting agency</a></spam></td>
                    
                </tr>
                <tr>
                <td colSpan={2}>has released the notification for the admission of Common University Admission 
                        Test CUET UG 2023 Entrance Exam. Those Candidate Are Enrolled with Admission 
                        Test Can Check the Result and Score Card. See the advertisement for information 
                        related to age limit, syllabus, Pattern, admission procedure in CUET UG 2023.
                        </td></tr>
            </table>
            <table className="table2">
                <tr > 
                    <td colSpan={2}>
                <span style={{color:"#0DCF3E",fontWeighn:"bold"}}>National Testing Agency (NTA)</span><br></br>
                National Testing Agency (NTA)<br></br>
                <span style={{color:"#0DCF3E",fontWeighn:"bold"}}>National Testing Agency (NTA)</span><br></br>
                </td>

                </tr>
                <tr>
                    <th>Important Dates</th>
                    <th>Application Fee</th>
                </tr>
                <tr>
                    <td><li>Important Dates</li></td>
                    <td><li>Application Fee</li></td>
                </tr>
                <tr> 
                <th colSpan={2}>
                National Testing Agency (NTA)
                </th>
                </tr>
                <tr> 
                <td colSpan={2}>
                National Testing Agency (NTA)
                </td>
                </tr>
                <tr> 
                <th colSpan={2} style={{color:"#0DCF3E",fontWeighn:"bold"}}>
                CUET UG 2023 Admission Details
                </th>
                </tr>
                <tr> 
                <th>
                Exam Name
                </th>
                <th>
                CUET Under Graduate UG Eligibility 2023
                </th>
                </tr>
                <tr> 
                <th colSpan={2} style={{color:"#0DCF3E",fontWeighn:"bold"}}>
                National Testing Agency (NTA)
                </th>
                </tr>
                <tr> 
                <td colSpan={2}>
                National Testing Agency (NTA)
                </td>
                </tr>
                <tr> 
                <th colSpan={2} style={{color:"#FF05C8",fontWeighn:"bold"}}>
                Interested Candidates Can Read the CUET UG 2023 Full Notification Before Apply Online
                </th>
                </tr>
                <tr> 
                <th colSpan={2}  style={{color:"#0DCF3E",fontWeighn:"bold"}}>
                Some Useful Important Links
                </th>
                </tr>
                <tr>
                    <td style={{color:"#FF05C8",fontWeighn:"bold"}}>Download Result/<br/>Scorecard</td>
                    <td style={{color:"#0562FF",fontWeighn:"bold"}}>Application Fee</td>
                </tr>
                <tr>
                    <td style={{color:"#FF05C8",fontWeighn:"bold"}}>Download Result/<br/>Scorecard</td>
                    <td style={{color:"#0562FF",fontWeighn:"bold"}}>Application Fee</td>
                </tr>
                <tr>
                    <td style={{color:"#FF05C8",fontWeighn:"bold"}}>Download Result/<br/>Scorecard</td>
                    <td style={{color:"#0562FF",fontWeighn:"bold"}}>Application Fee</td>
                </tr>
            </table>
        
        </div>
    )
}
