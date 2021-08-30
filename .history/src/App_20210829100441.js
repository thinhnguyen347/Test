import ReactAudioPlayer from 'react-audio-player';
import './App.css';

<ReactAudioPlayer
  src="my_audio_file.ogg"
  autoPlay
  controls
/>


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
  return (
    <div className="App">

      <audio controls loop hidden="hidden" id="bg-audio">
        <source src="audio/kid-world.mp3" type="audio/mpeg">
    </audio>
        <audio controls hidden="hidden" id="correct">
          <source src="audio/correct.mp3" type="audio/mpeg">
    </audio>
          <audio controls hidden="hidden" id="wrong">
            <source src="audio/wrong.mp3" type="audio/mpeg">
    </audio>

            <div class="wrapper">
              <!-- Phần mở đầu -->
              <div class="container ">
                <br><br>
                  <div><img src="./textnote.gif" alt="Quiz" width=360px height=80px></div>
                  <br><br><br>
                    <button id="start">Bắt đầu</button>

                    <p id="author">A product by Thinh Nguyen</p>

        </div>

                    <!-- Phần câu hỏi-->

                    <div class="container1 hide">
                      <br>
                        <div class="num-subs">
                          <p class="number"></p>
                          <p class="subscore"></p>
                        </div>
                        <br>
                          <p id="question"></p>
                          <br>
                            <div id="answer">
                              <button class="btn choice1 red"></button>
                              <button class="btn choice2 blue"></button>
                              <button class="btn choice3 yellow"></button>
                              <button class="btn choice4 green"></button>
                            </div>
                            <br>
                              <div>
                                <button class="next">Tiếp</button>
                                <button class="finish">Kết thúc</button>
                              </div>

        </div>
    </div>
                          <!-- Phần end game -->
                          <div class="container2 hide">

                            <img src="./textnote.gif" alt="Quiz"><br><br>
                              <br>
                                <p class="end">Chúc mừng bạn đã hoàn thành!</p><br>
                                  <p class="total-score"></p>
                                  <br>
                                    <button class="restart">Chơi lại</button>

    </div>


    </div>
                                );
}

                                export default App;
