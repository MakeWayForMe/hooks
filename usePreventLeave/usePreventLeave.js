// const usePreventLeave = () => {
//     const listener = (event) => {
//         event.preventDefault();
//         event.returnValue = '';
//     }
//     const enablePrevent = () => window.addEventListener('beforeunload', listener);
//     const disablePrevent = () => window.removeEventListener('beforeunload', listener);
//     return {enablePrevent, disablePrevent};
// };

// function App() {
//     const { enablePrevent, disablePrevent} = usePreventLeave();
//     return (
//         <div>
//             <button onClick={enablePrevent}>보호</button>
//             <button onClick={disablePrevent}>비보호</button>
//         </div>
//     );
// }

export const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = '';
    }
    const enablePrevent = () => window.addEventListener('beforeunload', listener);
    const disablePrevent = () => window.removeEventListener('beforeunload', listener);
    return {enablePrevent, disablePrevent};
};