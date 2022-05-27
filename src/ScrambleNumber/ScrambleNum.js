import React from 'react'
import { useState } from "react";
export default ScrambleNum;


function ScrambleNum() {
    const [insertNum, setInsertNum] = useState(5);
    const [RandomNum1, setRandomNum1] = useState();
    const [RandomNum2, setRandomNum2] = useState();
    const [RandomNum3, setRandomNum3] = useState();
    const [RandomNum4, setRandomNum4] = useState();
    const [RandomNum5, setRandomNum5] = useState();
    const [RandomNum6, setRandomNum6] = useState();
    const [RandomNum7, setRandomNum7] = useState();
    const [RandomNum8, setRandomNum8] = useState(); 
    const [RandomNum9, setRandomNum9] = useState();
    const [chance, setChance] = useState(5);
    const [playAgain, setplayAgain] = useState(false);
    const [count, setCount] = useState(0);


    const getRandomNumber = () => {

        setChance(chance - 1);
        setCount(count + 1);
        setplayAgain(false);
        return (Math.floor(Math.random() * (5 - 1) + 1));
    };
    const handlePlayagain = () => {
        setplayAgain(true);
        setRandomNum1("");
        setRandomNum2("");
        setRandomNum3("");
        setRandomNum4("");
        setRandomNum5("");
        setRandomNum6("");
        setRandomNum7("");
        setRandomNum8("");
        setRandomNum9("");
        setChance(5);
        setInsertNum(5)
        setCount(0)
    }

    const handleWinLoss = () => {

        if (insertNum === RandomNum1) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation you attempt in {count} try
                </h4>
            );
        }
        else if (insertNum === RandomNum2) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation you attempt in {count} try
                </h4>
            );

        }
        else if (insertNum === RandomNum3) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation you attempt {count} try
                </h4>
            );

        }
        else if (insertNum === RandomNum4) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation you attempt {count} try
                </h4>
            );

        }
        else if (insertNum === RandomNum5) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation you attempt {count} try
                </h4>
            );

        }
        else if (insertNum === RandomNum6) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation your attempt {count} try
                </h4>
            );

        }
        else if (insertNum === RandomNum7) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation your attempt {count} try
                </h4>
            );

        }
        else if (insertNum === RandomNum8) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation your attempt {count} try
                </h4>
            );

        }
        else if (insertNum === RandomNum9) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation your attempt {count} try
                </h4>
            );

        }
        else if (chance === 0) {
            return (
                <h4 style={{ color: "red" }}>
                    you lose Please try again
                </h4>
            );

        }

    }

    return (
        <div className="container" >
            <h1>Scramble Number Game</h1>
           <h4 style={{ color: "blue" }}>chance left {chance}</h4> 
            {playAgain === true ? "" : handleWinLoss()}
            <div className="insert-Num">
                <input type="number" placeholder="insertanyNum" value={insertNum} onChange={(e) => setInsertNum(parseInt(e.target.value))} />
            </div>

            <div>
                <div className="btn-group btn-matrix">
                    <button type="button" className="btn btn-default " style={{ height: "40px", width: "40px" }} onClick={() => setRandomNum1(getRandomNumber())}>{RandomNum1}</button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px" }} onClick={() => setRandomNum2(getRandomNumber())}>{RandomNum2}</button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px" }} onClick={() => setRandomNum3(getRandomNumber())}>{RandomNum3}</button><br></br>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px" }} onClick={() => setRandomNum4(getRandomNumber())}>{RandomNum4}</button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px" }} onClick={() => setRandomNum5(getRandomNumber())}>{RandomNum5}</button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px" }} onClick={() => setRandomNum6(getRandomNumber())}>{RandomNum6}</button><br></br>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px" }} onClick={() => setRandomNum7(getRandomNumber())}>{RandomNum7}</button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px" }} onClick={() => setRandomNum8(getRandomNumber())}>{RandomNum8}</button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px" }} onClick={() => setRandomNum9(getRandomNumber())}>{RandomNum9}</button><br></br>

                    <button onClick={handlePlayagain}> play again </button>
                </div>
            </div>


        </div>
    )
}