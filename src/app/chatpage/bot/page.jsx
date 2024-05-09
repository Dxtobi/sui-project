"use client"
import React from 'react';
import Suicon from "@/components/chat/icons/Suicon";
import ArrowRightIcon from "@/components/chat/icons/ArrowRightIcon";
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';
import SendLetterIcon from '@/components/chat/icons/SendLetterIcon';
import SpeakerIcon from '@/components/chat/icons/SpeakerIcon';
import PencilIcon from '@/components/chat/icons/PencilIcon';

const Bot = () => {

    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
      { role: "assistant", content: "Hi there! How can I help?" }
    ]);
  
    const messageListRef = useRef(null);
    const textAreaRef = useRef(null);
  
    // Auto scroll chat to bottom
    useEffect(() => {
      const messageList = messageListRef.current;
      messageList.scrollTop = messageList.scrollHeight;
    }, [messages]);
  
    // Focus on text field on load
    useEffect(() => {
      textAreaRef.current.focus();
    }, []);
  
    // Handle errors
    const handleError = () => {
      setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: "Oops! There seems to be an error. Please try again." }]);
      setLoading(false);
      setUserInput("");
    }
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (userInput.trim() === "") {
        return;
      }
  
      setLoading(true);
      const context = [...messages, { role: "user", content: userInput }];
      setMessages(context);
  
      // Send chat history to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: context }),
      });
  
      // Reset user input
      setUserInput("");
  
      const data = await response.json();
  
      if (!data) {
        handleError();
        return;
      }
  
      setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: data.result.content }]);
      setLoading(false);
  
    };
  
    // Prevent blank submissions and allow for multiline input
    const handleEnter = (e) => {
      if (e.key === "Enter" && userInput) {
        if (!e.shiftKey && userInput) {
          handleSubmit(e);
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
      }
    };

    return (



        <div className="chatAi">

            <div className="chatAiNote">
                <div className="chatNote chatAiNote1">
                    <div className="chatAiNotecomp chatAiNotecomp1">
                        <span>U</span>
                    </div>
                    <div className="chatAiNotetext">
                        <h1>How can I create a smart contract for a lottery project?</h1>
                    </div>
                    <div className="chatAiNotecompPencil">
                        <PencilIcon />
                    </div>
                </div>
                
                <div className="chatNote chatAiNote2">
                    <div className="chatAiNotecomp chatAiNotecomp2">
                        <Suicon/>
                    </div>
                    <div className="chatAiNotetext">
                        <h1>here is an example of a lottery smart contract.</h1>
                    </div>
                </div>
            </div>

            <div className="cloud">

            <div ref={messageListRef} className="messagelist">


                {messages.map((message, index) => {


                return (
                    // The latest message sent by the user will be animated while waiting for a response
                    <div key={index} className={`message.role === "user" && loading && index === messages.length - 1 ? styles.usermessagewaiting : message.role === "assistant" ? styles.apimessage : styles.usermessage`}>


                    {/* Display the correct icon depending on the message type */}
                    {/* {message.role === "assistant" ? <Image src="/openai.png" alt="AI" width="30" height="30" className="boticon" priority={true} /> : <Image src="/usericon.png" alt="Me" width="30" height="30" className="usericon" priority={true} />} */}


                    <div className="markdownanswer">
                        {/* Messages are being rendered in Markdown format */}
                        <ReactMarkdown >{message.content}</ReactMarkdown>
                    </div>


                    </div>
                            )
                            })}


                        </div>


            </div>

            <div className="center">

                <div className="cloudform">
                    <form onSubmit={handleSubmit}>


                    <textarea
                        disabled={loading}
                        onKeyDown={handleEnter}
                        ref={textAreaRef}
                        autoFocus={false}
                        rows={1}
                        maxLength={512}
                        type="text"
                        id="userInput"
                        name="userInput"
                        placeholder={loading ? "Generate Message..." : "Talk to SuiAI..."}
                        value={userInput}
                        onChange={e => setUserInput(e.target.value)}
                        className="textarea"
                    />


                    <button
                        type="submit"
                        disabled={loading}
                        className="generatebutton"
                    >
                        {loading ? <div className="loadingwheel">
                            
                            <CircularProgress color="inherit" size={20} /> 
                            </div> :
                            // Send icon SVG in input field
                            // <svg viewBox='0 0 20 20' className="svgicon">
                            //     <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
                            // </svg>

                            <div className="btn_con">

                            <div className="chat_sty chatspeaker_sty">
                                <button title="Speaker"><SpeakerIcon/></button>
                            </div>

                            <div className="chat_sty chatgenerate_sty">
                                <button title="Ask AI Assistant"><SendLetterIcon/></button>
                            </div>

                        </div>
                        }
                    </button>


                    </form>
                </div>

                
            </div>
        </div>
                


            

    );
};

export default Bot;