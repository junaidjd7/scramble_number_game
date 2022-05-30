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
    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(10);
    const [win,setWin] = useState(null);
    let x;


    const getRandomNumber = () => {

        setChance(chance - 1);
        setCount(count + 1);
        setplayAgain(false);
        x = (Math.floor(Math.random() * (maxRange - minRange) + minRange));
        if (x > insertNum) {
            setMaxRange(x)
            return x;
        }
        else if (x < insertNum) {
            setMinRange(x)
            return x;
        }
        else if (x === insertNum) {

            setWin(x);
            return x;
        }


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
        setInsertNum(5);
        setCount(0);
        setMinRange(0);
        setMaxRange(10);
    }

    const handleWinLoss = () => {

        if (win === insertNum) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation you attempt in {count} try
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
                <p>Min</p>
                <input type="number" value={minRange} onChange={(e) => setMinRange(parseInt(e.target.value))} />
                <br />
            </div>

            <div>
                <p>Max</p>
                <input type="number" value={maxRange} onChange={(e) => setMaxRange(parseInt(e.target.value))} />
                <br />

            </div>

            <div>
                <div className="btn-group btn-matrix">
                    <div >
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px", margin: '10px', backgroundColor: "#33ccff", color: "white" }} disabled={chance === 0} onClick={() => setRandomNum1(getRandomNumber())}><p>{RandomNum1}</p></button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px", margin: '10px', backgroundColor: "#33ccff", color: "white" }} disabled={chance === 0} onClick={() => setRandomNum2(getRandomNumber())}><p>{RandomNum2}</p></button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px", margin: '10px', backgroundColor: "#33ccff", color: "white" }} disabled={chance === 0} onClick={() => setRandomNum3(getRandomNumber())}><p>{RandomNum3}</p></button>
                   <div>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px", margin: '10px', backgroundColor: "#33ccff", color: "white" }} disabled={chance === 0} onClick={() => setRandomNum4(getRandomNumber())}><p>{RandomNum4}</p></button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px", margin: '10px', backgroundColor: "#33ccff", color: "white" }} disabled={chance === 0} onClick={() => setRandomNum5(getRandomNumber())}><p>{RandomNum5}</p></button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px" , margin: '10px',backgroundColor: "#33ccff", color: "white" }} disabled={chance === 0} onClick={() => setRandomNum6(getRandomNumber())}><p>{RandomNum6}</p></button>
                   </div>

                   <div>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px", margin: '10px', backgroundColor: "#33ccff", color: "white"  }} disabled={chance === 0} onClick={() => setRandomNum7(getRandomNumber())}><p>{RandomNum7}</p></button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px", margin: '10px', backgroundColor: "#33ccff", color: "white" }} disabled={chance === 0} onClick={() => setRandomNum8(getRandomNumber())}><p>{RandomNum8}</p></button>
                    <button type="button" className="btn btn-default" style={{ height: "40px", width: "40px", margin: '10px', backgroundColor: "#33ccff", color: "white"  }} disabled={chance === 0} onClick={() => setRandomNum9(getRandomNumber())}><p>{RandomNum9}</p></button>
                   </div>
                    <button onClick={handlePlayagain}> play again </button>
                </div>
            </div>
         </div>
         </div>
    )
}