const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日は華氏１度で外はとても寒かった。:insertx:は外を歩いていた。彼は突然:inserty:に行きたくなり、遊びに行った。:insertz:体重50ポンドの:insertx:は驚いたが、梅子は驚かなかった。:inserty:ではよくあることだった。';
let insertX = ['プーさん','エルモ','ハローキティ'];
let insertY = ['ディズニーランド','ユニバーサルスタジオジャパン','サンリオピューロランド'];
let insertZ = ['宇宙人が現れた。','猫が日本語を話した。','小人が走っていた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子',name);
  }

  if(document.getElementById("ja").checked) {
    const weight = Math.round((94-32) * 5 / 9) + 'kg';
    const temperature =  '摂氏'+Math.round(300*0.0714286);
    newStory = newStory.replace('華氏１',temperature);
    newStory = newStory.replace('50ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
