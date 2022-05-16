import { useEffect, useRef } from "react";

// const useFadeIn = (duration = 1, delay = 0) => {
//     const element = useRef();
//     useEffect(() => {
//         if(element.current) {
//             const {current} = element;
//             current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
//             current.style.opacity = 1;
//         }
//     },[]);
//     if(typeof duration !== 'number') {
//         return;
//     }
//     return {ref: element, style: {opacity: 0}};
// };

// function App() {
//     const el = useFadeIn(3);
//     const ppap = useFadeIn(2, 2);
//     return (
//         <div>
//             <h1 {...el}>ㅋㅋ루</h1>
//             <p {...ppap}>아 ㅋㅋ</p>
//         </div>
//     );
// }

export const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
      if(element.current) {
        const {current} = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    },[]);
    if(typeof duration !== 'number') {
      return;
    }
    return {ref: element, style: {opacity: 0}};
};