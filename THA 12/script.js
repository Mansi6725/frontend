// const bg=["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/bg5.jpg"];
const questions=[
    {question:"Q.1. What was the old name of Varanasi?",
    a:"Patliputra",
    b:"Banaras",
    c:"Indraprastha",
    d:"Kashi",
    ans:"ans4",
    // background:bg[0]
    },
    {question:"Varanasi is famous for?",
    a:"Brass Handicrafts",
    b:"glass Bangles",
    c:"Silk Sari",
    d:"locks",
    ans:"ans3",
    // background:bg[1]
    },
    {question:"Who built Jantar Mantar, an observatory in Varanasi in year 1737?",
    a:"Maharaja Jai Singh",
    b:"Maharaja Chet Singh",
    c:"Raja Balwant Singh",
    d:"None of the above",
    ans:"ans1",
    // background:bg[2]
    },
    {question:"Which religion was founded in Varanasi?",
    a:"Buddhism",
    b:"Islam",
    c:"Hinduism",
    d:"Jainism",
    ans:"ans1",
    // background:bg[3]
    },
    {question:"Who founded BHU?",
    a:"Pandit Jawaharlal Nehru",
    b:"Pandit Madan Mohan Malviya",
    c:"J.R. Ballentien",
    d:"Dr. Ganganath Jha",
    ans:"ans2",
    // background:bg[4]
    }];

    const question=document.querySelector(".question");
    const option1=document.querySelector("#option1");
    const option2=document.querySelector("#option2");
    const option3=document.querySelector("#option3");
    const option4=document.querySelector("#option4");
    const submit=document.querySelector("#submit");
    const answer=document.querySelectorAll(".ans");
    const showScore=document.querySelector("#show");
    const container=document.querySelector(".container");
    

    let queNo=0;
    let score=0;

    function loadQuestion(){
        question.innerHTML=questions[queNo].question;
        option1.innerHTML=questions[queNo].a;
        option2.innerHTML=questions[queNo].b;
        option3.innerHTML=questions[queNo].c;
        option4.innerHTML=questions[queNo].d;
    }
 loadQuestion();
 function deleteCheckRadio(){
    answer.forEach((currentans)=>{
       currentans.checked=false;
      });
 }
 function getCheckAnswer(){
    let ans;
 answer.forEach((currentans)=>{
    if(currentans.checked)
    ans= currentans.id;
 });
 return ans;
 }
 function nextQue(){
    const checkedAnswer=getCheckAnswer();
    if(checkedAnswer==questions[queNo].ans){
     score++;
   }
    queNo++;
    deleteCheckRadio();
    if(queNo<5){
     if(queNo==1)
     container.classList.add("bg2");
     else if(queNo==2)
     container.classList.add("bg3");
     else if(queNo==3)
     container.classList.add("bg4");
     else
     container.classList.add("bg5");
     loadQuestion();
   }
    else{
        container.classList.add("bg6");
        showScore.innerHTML=
        `<h3>You Scored ${score}/5🤟</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove("showresult");
        submit.removeEventListener('click',nextQue);
    }
 }
 submit.addEventListener('click',nextQue);
 