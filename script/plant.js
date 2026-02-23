let thrivingList = [];
let strugglingList = []

let total = document.getElementById('total');
let thriving = document.getElementById('thriving-count');
let struggling = document.getElementById('struggling-count');

const allCardSection = document.getElementById('allCards')

const mainContainer = document.querySelector('main');
console.log(mainContainer);

function calculate(){
    total.innerText = allCardSection.children.length
    thriving.innerText = thrivingList.length
    struggling.innerText = strugglingList.length

}
calculate()

// addEventListener er alternative
function toggleStyle (id){
    console.log('click',id);
}
