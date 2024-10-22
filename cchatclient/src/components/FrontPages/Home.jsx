import "./Home.css";
import logo from "../../images/logo.jpg";
import Dropped from "./Dropped";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ReactScrollToBottom from "react-scroll-to-bottom";
import ScrollToBottom from "react-scroll-to-bottom";
import socketIo from "socket.io-client";
import user from "../LoginPages/Page3";
import Chat from "./Chat";
import axios from "axios";

const ENDPOINT = "http://localhost:4500";
let socket;

const Home = () => {
  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [requestname, setRequestName] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:4500/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages", error);
      }
    };

    fetchMessages();
  }, []);

  const send = async () => {
    const message = taskInput;
    socket.emit("message", { message, id });
    setTaskInput("");

    try {
      const res = await axios.post("http://localhost:4500/message", {
        user_message: message,
      });
      console.log(res);
    } catch (error) {
      console.error("Error Storing Number", error);
    }
  };

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      alert("connected");
      console.log(user);
      setId(socket.id);
    });
    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  const handleRequest = () => {
    console.log(requestname);
  };

  return (
    <div className="main">
      <div className="navigation">
        <div className="nav1">
          <img src={logo} alt="" />
          <Dropped />
        </div>
        <div className="nav2">
          <input
            value={requestname}
            type="text"
            placeholder="Send Friend Request"
            onChange={(e) => setRequestName(e.target.value)}
          />
          <div className="btn">
            <button className="req-btn" onClick={handleRequest}>
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="main_chat">
        <div className="contact">
          <div className="search">
            <div className="inputs">
              <input type="search" id="bar" placeholder="Search" />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ fontSize: "50px", marginRight: "5px", color: "white" }}
              />
            </div>
            <ScrollToBottom className="numbers" style={{ color: "#00e5e3" }}>
              {" "}
            </ScrollToBottom>
          </div>
        </div>
        <div className="chat">
          <ReactScrollToBottom className="chatbox" id="chat">
            {messages.map((item, i) => (
              <Chat
                key={i}
                user={item.id === id ? "" : item.user}
                message={item.message}
                classs={item.id === id ? "right" : "left"}
              />
            ))}
          </ReactScrollToBottom>
          <div className="send">
            <textarea
              name=""
              id="chatInput"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Enter Message Here"
            ></textarea>
            <button onClick={send}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
