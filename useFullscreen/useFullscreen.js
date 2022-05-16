import { useRef } from "react";


// const useFullscreen = (callback) => {
//     const element = useRef();
//     const activeFull = () => {
//         if(element.current) {
//             element.current.requestFullscreen();
//             if(typeof callback === "function") {
//                 callback(true);
//             }
//         }
//     };
//     const exitFull = () => {
//         document.exitFullscreen();
//         if(typeof callback === "function") {
//             callback(false);
//         }
//     };
//     return {element, activeFull, exitFull};
// };

// function App() {
//     const onFull = isFull => {
//         console.log(isFull ? "전체화면" : "기본화면");
//     };
//     const {element, activeFull, exitFull} = useFullscreen(onFull);
//     return (
//        <div>
//            <div ref={element}>
//                <img src="https://t1.daumcdn.net/cfile/tistory/262F163C596A0DEF2D" alt="" />
//                <button onClick={activeFull}>풀스크린</button>
//                <button onClick={exitFull}>돌아가기</button>
//            </div>
//        </div>
//     );
// }

export const useFullscreen = (callback) => {
    const element = useRef();
    const activeFull = () => {
        if(element.current) {
            element.current.requestFullscreen();
            if(typeof callback === "function") {
                callback(true);
            }
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if(typeof callback === "function") {
            callback(false);
        }
    };
    return {element, activeFull, exitFull};
};