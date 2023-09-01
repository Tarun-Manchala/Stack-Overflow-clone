import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  const location=useLocation();
  const user=12;
  const navigate=useNavigate();
  var questionsList=[
      {
        id:1,
        votes: 10,
        noOfAnswers: 4,
        questionTitle : "whatody: It meant to be",
        questionTags: ["javasript","R","python"],
        userPosted: "mango",
        askedOn :"jan 1"
      },
      {
        id:2,
        votes:1,
        noOfAnswers: 3,
        questionTitle : "whatody: It meant to be",
        questionTags: ["javasript","R","python"],
        userPosted: "mango",
        askedOn :"jan 1"
      },
      {
        id:3,
        votes: 15,
        noOfAnswers: 1,
        questionTitle : "whatody: It meant to be",
        questionTags: ["javasript","R","python"],
        userPosted: "mango",
        askedOn :"jan 1"
      },
      {
        id:4,
        votes: 20,
        noOfAnswers: 2,
        questionTitle : "whatody: It meant to be",
        questionTags: ["javasript","R","python"],
        userPosted: "mango",
        askedOn :"jan 1"
      }
    ];
    const checkAuth = () =>{
       if (user === null){
        alert("login or signup to ask a question")
        navigate("/Auth")
       }
       else{
        navigate("/AskQuestion")
       }
    }
  return (
    <div className="main-bar">
    <div className="home-mainbar-header">
      {
         location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
      }
     <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
    </div>
      <div>
        {
          questionsList==null ?
          <h1>Loading...</h1> :
          <>
          <p>{questionsList.length} Questions</p>
          <QuestionList questionsList={questionsList}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar