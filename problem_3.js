function paperRequirements(book1,book2,book3){
   pageOfBook1= book1 * 100;
   pageOfBook2= book2 * 200;
   pageOfBook3= book3 * 300;
   const sum= pageOfBook1 + pageOfBook2 + pageOfBook3;
   return sum;
}
const totalPaper = paperRequirements(25,15,5);
console.log(totalPaper);