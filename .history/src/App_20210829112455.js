import React, {useState} from 'react';
import './App.css';
import "bootrap/dist/css/boottrap.min.css"



const quiz = [
  {
    question: "Môn gì càng thắng lại càng thua?",
    choices: ["Cờ vua", "Cờ tướng", "Đạp xe", "Đu dây"],
    ans: "Đạp xe",
  },

  {
    question: "What is the sweet food made by bees?",
    choices: ["Chocolate", "Pollen", "Honey", "Flower"],
    ans: "Honey",
  },

  {
    question: "Có ba quả táo trên bàn và bạn lấy đi hai quả. Hỏi bạn còn bao nhiêu quả táo?",
    choices: ["2", "0", "1", "3"],
    ans: "2",
  },

  {
    question: "On a common ladybug, what color are its spots?",
    choices: ["Red", "Black", "Yellow", "White"],
    ans: "Black",
  },

  {
    question: "Bạn đang ở trong một cuộc đua và bạn vừa vượt qua người thứ nhì. Vậy bây giờ bạn đang ở vị trí nào trong đoàn đua ấy?",
    choices: ["Ba", "Nhất", "Tư", "Nhì"],
    ans: "Nhì",
  },

  {
    question: "Cầu gì biết chạy?",
    choices: ["Cầu lông", "Cầu vồng", "Cầu thủ", "Cầu mong"],
    ans: "Cầu thủ",
  },

  {
    question: "Do you know an animal that cannot jump?",
    choices: ["Grasshopper", "Frog", "Kangaroo", "Elephant"],
    ans: "Elephant",
  },

  {
    question: "Con mèo nào cực kỳ sợ chuột?",
    choices: ["Mèo Doraemon", "Mèo Tom", "Mèo Kitty", "Mèo mướp"],
    ans: "Mèo Doraemon",
  },

  {
    question: "How many dots on a dice?",
    choices: [19, 20, 21, 22],
    ans: 21,
  },

  {
    question: "Which month of the year has the least number of days?",
    choices: ['December', 'August', 'February', 'May'],
    ans: 'February',
  }
]

function App() {
const [state, setState] = useState(quiz[])


  return (
    <div className="App p-5">

    </div>
  );
}

export default App;
