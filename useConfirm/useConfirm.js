// const useConfirm = (message = "", onConfirm, onCancle) => {
//     if (typeof onConfirm !== "function") {
//         return;
//     }
//     if (typeof onCancle !== "function") {
//         return;
//     }
//     const confirmAction = () => {
//         if(window.confirm(message)) {
//             onConfirm();
//         } else {
//             onCancle();
//         }
//     };
//     return confirmAction;
// };

// function App() {
//     const deleteWorld = () => console.log("ㅋㅋ루삥뽕");
//     const deleteCancle = () => console.log("ㅋㅋㅋ루삥뽕");
//     const confirmDelete = useConfirm("진짜 삭제함?", deleteWorld, deleteCancle);
//     return (
//         <div>
//           <button onClick={confirmDelete}>폭파</button>
//         </div>
//     );
// }

export const useConfirm = (message = "", onConfirm, onCancle) => {
    if (typeof callback !== "function") {
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)) {
            onConfirm();
        } else {
            onCancle();
        }
    };
    return confirmAction;
};