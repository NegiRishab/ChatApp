import { Avatar } from "@mui/material";
import { useState } from "react";
import "../css/popup.css";
import User from "../Users.json";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const PopupList = (props) => {
    // create state `open` with default as false
    const [open, setOpen] = useState(false);
    return (
        <div>
         
            <div className="add-button">
                <h2>CONVERSATIONS</h2>
                <AddCircleIcon onClick={() => setOpen(!open)} />
            </div>

          
            {open && (
                <div className="hide">
                    <h2>Contact List</h2>
                    {User.map((val) => {
                        return (
                            <div
                                className="hide-list"
                                onClick={() => {
                                    props.handleAddChat(val);
                                    setOpen(false);
                                }}
                                key={val.id}
                            >
                                <Avatar />
                                <div>
                                    <h2>{val.name}</h2>
                                    <p>{val.lastmessage}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PopupList;