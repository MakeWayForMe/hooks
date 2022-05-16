// const useNotification = (title, options) => {
//     if(!("Notification" in window)) {
//         return;
//     }
//     const notification = () => {
//         if(Notification.permission !== "granted") {
//             Notification.requestPermission().then(permission => {
//                 if(permission === "granted") {
//                     new Notification(title, options);
//                 } else {
//                     return;
//                 }
//             });
//         } else {
//             new Notification(title, options);
//         }
//     };
//     return notification;
// };

// function App() {
//     const triggerNoti = useNotification('응 아니야');
//     return (
//        <div>
//            <button onClick={triggerNoti}>ㅋㅋ루</button>
//        </div>
//     );
// }

export const useNotification = (title, options) => {
    if(!("Notification" in window)) {
        return;
    }
    const notification = () => {
        if(Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return notification;
};