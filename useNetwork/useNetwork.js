import { useEffect, useState } from "react";


// const useNetwork = (onChange) => {
//     const [status, setStatus] = useState(navigator.onLine);
//     const handleChange = () => {
//         if(typeof onChange === "function") {
//             onChange(navigator.onLine);
//         }
//         setStatus(navigator.onLine);
//     }
//     useEffect(() => {
//         window.addEventListener("online", handleChange);
//         window.addEventListener("offline", handleChange);
//         return () => {
//             window.removeEventListener("online", handleChange);
//             window.removeEventListener("offline", handleChange);
//         }
//     },[])
//     return status;
// };

// function App() {
//     const statusChange = (online) => {
//         console.log(online ? "온라인됨" : "오프라인됨");
//     };
//     const status = useNetwork(statusChange);
//     return (
//        <div>
//            <h1>{status ? "온라인" : "오프라인"}</h1>
//        </div>
//     );
// }

export const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    },[])
    return status;
};