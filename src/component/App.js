import "../index.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useEffect, useState } from "react";
import Data from "../Data.json";
function App() {
  const [id, setid] = useState(1);

  const [chat, setChat] = useState(Data);

  const clickState = (id) => {
    setid(id);
  };

  useEffect(() => {
    setChat(Data);
  }, [chat]);

  const updateChat = (data) => {
    const newdata = {
      id: id,
      name: chat[id - 1].name,
      lastmessage: data[0].messages,
      messages: data,
    };

    chat.map((val) => {
      if (val.id === id) {
        val.messages = data;
        const lastmes = data[data.length - 1].message;
        val.lastmessage = lastmes;

        setChat((prev) => {
          return [...prev];
        });
      }
    });
  };

  const addNewChat = (val) => {
    let flag = false;
    console.log("val", val);
    chat.map((c) => {
      if (c.name === val.name) {
        flag = true;
      }
    });
    if (flag === true) return;
    else {
      const len = chat.length + 1;
      setChat((prev) => {
        const newValObj = {
          id: len,
          name: val.name,
          lastmessage: val.lastmessage,
          messages: [],
        };
git
        prev.push(newValObj);

        return [...prev];
      });
    }
  };
  return (
    <div className="App">
      <div className="container">
        <Sidebar
          chat={chat}
          handleState={clickState}
          handleAddNewChat={addNewChat}
        />
        <Chat id={id} chat={chat} handleChat={updateChat} />
      </div>
    </div>
  );
}

export default App;
