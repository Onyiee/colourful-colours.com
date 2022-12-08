import React, {useState} from 'react';

const colorArray = [
    ["#780206", "#061161"],
    ["#FBD3E9", "#BB377D"],
    ["#00d2ff", "#3a7bd5"],
    ["#f2709c", "#ff9472"],
    ["#a73737", "#7a2828"],
    ["#4b6cb7", "#182848"],
    ["#C04848", "#480048"],
    ["#5f2c82", "#49a09d"],
    ["#232526", "#414345"],
    ["#5C258D", "#4389A2"],
    ["#4776E6", "#8E54E9"]
]


const ColourSwitcher = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

     const handlePreviousClick = () => {
         selectedIndex - 1 < 0 ? setSelectedIndex(colorArray.length -1) : setSelectedIndex(selectedIndex - 1);
    }

    const handleNextClick = () => {
        selectedIndex + 1 >= colorArray.length ? setSelectedIndex(0) : setSelectedIndex(selectedIndex + 1);
    }

    console.log(selectedIndex);
    return (
        <div className="container" style={{height:"100vh", background:`linear-gradient(${colorArray[selectedIndex]})`}}>
            <i onClick={handlePreviousClick} className="fa-sharp fa-solid fa-chevron-left fa-3x" />
            <i onClick={handleNextClick} className="fa-sharp fa-solid fa-chevron-right fa-3x" />
        </div>
    );
};

export default ColourSwitcher;