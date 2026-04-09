let currenttab="all";
let tabactive= ["bg-primary","border-navy","text-white"];
let tabinactive = ["bg-transparent","text-slate-700","border-state-200","text-slate"];

const allcontainer = document.getElementById('all-container');
const interviewcontainer = document.getElementById('interview-container');
const rejectedcontainer = document.getElementById('rejected-container');
const emptystate = document.getElementById('empty-state');

console.log(allcontainer,interviewcontainer,rejectedcontainer);

function switchtab(tab)
{
   console.log(tab);
   const tabs =["all","interview","rejected"];
   currenttab = tab;

   for(const t of tabs){
    const tabname = document.getElementById('tab-'+ t);
    if(t === tab){
      currenttab = t;
        tabname.classList.remove(...tabinactive);
        
        tabname.classList.add(...tabactive);
        
    }
    else{
      tabname.classList.remove(...tabactive);
      tabname.classList.add(...tabinactive);
    }
  
   }

   const pages = [allcontainer,interviewcontainer,rejectedcontainer];
   for(const section of pages){
    section.classList.add('hidden');
   }

emptystate.classList.add('hidden');

   if(tab === "all"){
    allcontainer.classList.remove("hidden");
    if(allcontainer.children.length<1){
      emptystate.classList.remove('hidden');
    }

   }
   else if(tab === "interview"){
    interviewcontainer.classList.remove("hidden");
    if(interviewcontainer.children.length<1){
      emptystate.classList.remove('hidden');
    }
   }
   else
   {
    rejectedcontainer.classList.remove('hidden');
    if(rejectedcontainer.children.length<1){
      emptystate.classList.remove('hidden');
    }
   }
   updatestat();
}

// stat update
const  totalstate = document.getElementById('stat-total');
const interviewstate = document.getElementById('stat-interview');
const rejectedstate = document.getElementById('stat-rejected');
const avaiablestat = document.getElementById('available');






switchtab(currenttab);


document.addEventListener('click',function(event){
  const clickedelement=event.target;
  const card = clickedelement.closest(".job-card");
 
  const parent = card.parentNode;
  const status = card.querySelector('.statuss');
 
  if(clickedelement.classList.contains('interview')){
    console.log('interview clicked')
    status.innerText = "Interviewed";
    interviewcontainer.appendChild(card);
  

  }
  else if(clickedelement.classList.contains('rejected')){
    console.log('rejected')
    status.innerText = "Rejected";
    rejectedcontainer.appendChild(card);
   

  }
  else if(clickedelement.classList.contains('delete')){
    console.log('delete');
    parent.removeChild(card);
    

  }
  updatestat();
    switchtab(currenttab);


});
function updatestat(){
  const counts = {
 all : allcontainer.children.length,
  interview : interviewcontainer.children.length,
  rejected : rejectedcontainer.children.length}
  totalstate.innerText = counts.all;
  interviewstate.innerText = counts.interview;
  rejectedstate.innerText = counts.rejected;
  avaiablestat.innerText = counts[currenttab];


}


