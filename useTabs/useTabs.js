import { useState } from "react";

// const content = [
//     {
//       tab: "section1",
//       content : "섹션1"
//     },
//     {
//       tab: "section2",
//       content : "섹션2"
//     }
// ];

// const useTabs = (initTab, allTabs) => {
//     const [currentIndex, setCurrentIndex] = useState(initTab);
//     if(!allTabs || !Array.isArray(allTabs)) {
//       return;
//     }
//     return {
//       currentItem: allTabs[currentIndex],
//       changeItem: setCurrentIndex
//     };
// };

// function App() {
//     const { currentItem, changeItem } = useTabs(0, content);
//     return (
//       <>
//         {content.map((section, index) => (
//           <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
//         ))}
//         <div>{currentItem.content}</div>
//       </>
//     );
// }

export const useTabs = (initTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initTab);
    if(!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
};