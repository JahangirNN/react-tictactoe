import React from "react";
import {FaTimes, FaPen, FaRegCircle, FaAlignCenter} from "react-icons/fa";

const Icon = ({name}) =>(
    <h1>
        <FaTimes className="icon"/>
        <br/>
        <FaPen className="icon"/>
        <br/>
        <FaRegCircle className="icon"/>
    </h1>
);

export default Icon;