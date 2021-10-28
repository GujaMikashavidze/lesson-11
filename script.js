 //1
    let user = {
       firstname: 'giorgi',
        lastname: 'smith',
        age: '25',
        studentstatus: 'active',
    }

    console.log(user.studentstatus);

 //2

   let premierleague = ['mu','liverpool','chelsea','arsenal','mancity','tottenham'];
    for (let x = 0; x < 5; x++){
        console.log(premierleague[x]);
   }
   let y = 0;
   while (premierleague < Array.length){
       console.log(premierleague[y]);
       y++;
  }

  //3
  let user1 = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];{
           for (let x = 0; x < user1.length; x++){
         if (user1[x] > 5)
          console.log(user[x]);      }
  }

 //4
 let array = ['html','css','bootsrap','javascript','python'];{
    for (let x = 0; x < array.length; x++){
         if (array[x].length > 5 && array[x].includes('ava'))
         console.log(array[x]);
     }
 }
 //5
let user2 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}
if (user2.age > 18 && user.studentstatus == ('active') )
console.log('hello');

if (user2.name == 'giorgi');

console.log('hello giorgi');

if (user2.studentstatus == 'active' || user.age < 25);

console.log('hello world');

