type GetResultMessage = (name: string, score: number) => string;

const getResultMessage: GetResultMessage = (name, score) => {

 if (score >= 60) {
   return `${name}さんは合格です。`;
 } else {
   return `${name}さんは不合格です。`;
 }
};

type  student = {
 name: string;
 score: number;
};

const studentA: student = {
 name: '侍太郎',
 score: 70,
};

let resultMessage = getResultMessage(studentA.name, studentA.score);

console.log(resultMessage);