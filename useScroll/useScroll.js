import { useEffect, useState } from "react";

// const useScroll = () => {
//     const [status, setStatus] = useState({x: 0, y:0});
//     const onScroll = () => {
//         setStatus({x: window.scrollX, y:window.scrollY});
//     };
//     useEffect(() => {
//         window.addEventListener("scroll", onScroll);
//         return () => {
//             window.removeEventListener("scroll", onScroll);
//         }
//     })
//     return status;
// };

// function App() {
//     const {x, y} = useScroll();
//     return (
//        <div style={{width: '3000px', height: '3000px'}}>
//            <h1 style={{position: 'fixed'}}>x좌표 {x}, y좌표 {y}</h1>
//        </div>
//     );
// }

export const useScroll = () => {
    const [status, setStatus] = useState({x: 0, y:0});
    const onScroll = () => {
        setStatus({x: window.scrollX, y:window.scrollY});
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    })
    return status;
};