const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温は40度で外はとても暑かった。:insertx:は外を散歩していた。彼は:inserty:に遊びに行った。そして、:insertz:。体重100kgの梅は驚いたが、:insertx:は驚かなかった。’;
let insertX = ['ミッキー','スヌーピー','ハローキティ'];
let insertY = ['ユニバーサルスタジオジャパン','ディズニーランド','サンリオピューロランド'];
let insertZ = ['宇宙人が現れた。','スーパーマンが空を飛んでいた。','小人が走っていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅',name);
  }

  if(document.getElementById("ja").checked) {
    const weight = Math.round((94-32)*5/9)+'kg';
    const temperature =  '摂氏'+Math.round(300*0.0714286);
    newStory = newStory.replace('華氏1',temperature);
    newStory = newStory.replace('50ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
