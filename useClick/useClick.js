import { useEffect, useRef } from "react"

// const useClick = (onClick) => {
//     const element = useRef();
//     useEffect(() => {
//         if(element.current){
//             element.current.addEventListener('click', onClick);
//         }
//     });
//     return element;
// };

// function App() {
//     const onClick = () => console.log('무야호');
//     const title = useClick(onClick);
//     return (
//         <div>
//             <h1 ref={title}>ㅎㅇ</h1>
//         </div>
//     );
// }

export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if(element.current){
            element.current.addEventListener('click', onClick);
        }
        return () => {
            if(element.current) {
                element.current.removeEventListener('click', onClick);
            }
        };
    }, []);
    return element;
};