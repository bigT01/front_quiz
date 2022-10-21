
interface props {
    tabNumber : number,
    setTabNumber : any
}

const TabButton = ({tabNumber, setTabNumber}:props) => {

    return(
     <>
         <button className={`tab_btn first ${tabNumber === 1 ? 'active' : null} checked`} onClick={() => {setTabNumber(1)}}>1</button>
         <button className={`tab_btn ${tabNumber === 2 ? 'active' : null}`} onClick={() => {setTabNumber(2)}}>2</button>
         <button className={`tab_btn ${tabNumber === 3 ? 'active' : null}`} onClick={() => {setTabNumber(3)}}>3</button>
         <button className={`tab_btn ${tabNumber === 4 ? 'active' : null}`} onClick={() => {setTabNumber(4)}}>4</button>
         <button className={`tab_btn ${tabNumber === 5 ? 'active' : null}`} onClick={() => {setTabNumber(5)}}>5</button>
         <button className={`tab_btn ${tabNumber === 6 ? 'active' : null}`} onClick={() => {setTabNumber(6)}}>6</button>
         <button className={`tab_btn ${tabNumber === 7 ? 'active' : null}`} onClick={() => {setTabNumber(7)}}>7</button>
         <button className={`tab_btn ${tabNumber === 8 ? 'active' : null}`} onClick={() => {setTabNumber(8)}}>8</button>
         <button className={`tab_btn ${tabNumber === 9 ? 'active' : null}`} onClick={() => {setTabNumber(9)}}>9</button>
         <button className={`tab_btn ${tabNumber === 10 ? 'active' : null}`} onClick={() => {setTabNumber(10)}}>10</button>
         <button className={`tab_btn ${tabNumber === 11 ? 'active' : null}`} onClick={() => {setTabNumber(11)}}>11</button>
         <button className={`tab_btn ${tabNumber === 12 ? 'active' : null}`} onClick={() => {setTabNumber(12)}}>12</button>
         <button className={`tab_btn ${tabNumber === 13 ? 'active' : null}`} onClick={() => {setTabNumber(13)}}>13</button>
         <button className={`tab_btn ${tabNumber === 14 ? 'active' : null}`} onClick={() => {setTabNumber(14)}}>14</button>
         <button className={`tab_btn last ${tabNumber === 15 ? 'active' : null}`} onClick={() => {setTabNumber(15)}}>15</button>
     </>
    )
}

export default TabButton;