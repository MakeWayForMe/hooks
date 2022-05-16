import { useEffect, useState } from "react";

// const useTitle = (initTitle) => {
//     const [title, setTitle] = useState(initTitle);
//     const updateTitle = () => {
//       const htmlTitle = document.querySelector("title");
//       htmlTitle.innerText = title;
//     };
//     useEffect(updateTitle, [title]);
//     return setTitle;
// };

// function App() {
//     const titleUpdater = useTitle("로딩중...");
//     setTimeout(() => titleUpdater("로딩스님"), 5000);
//     return;
// }

export const useTitle = (initTitle) => {
    const [title, setTitle] = useState(initTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};