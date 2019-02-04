const btnIndex = document.getElementById('free_lesson');
const popUp = [...document.getElementsByClassName('btn__item')];
if(btnIndex){
    btnIndex.addEventListener('click' , toggleOpen);
}


function toggleOpen() {
    popUp[0].classList.add("open");
}

const cardItem = [...document.getElementsByClassName('card-item')];
const targBtn = [...document.getElementsByClassName('red__bottom-sm')];
targBtn.forEach(btn => btn.addEventListener('click', toggleSwitch));

function toggleSwitch() {
    targBtn.forEach(btn => {
        btn.classList.remove('redActive');
    });
    this.classList.add('redActive');
    for (var i = 0; i < cardItem.length; i++) {

        if (cardItem[i].getAttribute('id') == this.getAttribute("for")) {
            cardItem[i].classList.add("switch");


        } else {
            cardItem[i].classList.remove("switch");

        }

    }

}
const quest = [...document.getElementsByClassName('quest-block__item')];
quest.forEach(item => item.addEventListener('click', toggleSwitchQest));

function toggleSwitchQest(){
   this.children[1].classList.toggle('text-hide');
}