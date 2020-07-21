console.log("Lets get started ");
// Q1


// let n =prompt("enter a number");
//         console.log(Math.abs(n));

// let arr=[n];
//         arr.forEach((el)=>{
//             console.log(arr)
//         })

//         let odd=arr.filter(el=>el%2!=0);
//         console.log(odd);

// Q2

// class User{
//             constructor(name,age,email){
//                 this.name=name;
//                 this.age=age;
//                 this.email=email;
//                 this.coins=0;
//                 this.courses=['java'];

//             }
//             login(){
//                 console.log(`${this.name} has logged in.`)
//             }
//             logout(){
//                 console.log(`${this.name} has logged out.`)
//             }
//         }
//         let user1=new User('Chandu ',20,'hrchandu@gmail.com');
//         console.log("user....",user1);


//         class Moderator extends User {
//         addcoins(){
//             this.coins++;
//         }
//         removecoins(){
//             this.coins--;  
//         }
//         }
//         let mod = new Moderator('Gani',24,'gani262@gmail.com')
//         mod.addcoins();
//         mod.addcoins();
//         mod.addcoins();
//         mod.removecoins();
//         console.log("moderator...",mod)
        
//          class Admin extends Moderator{
//              addcourse(user,coursename){
//                  console.log("add course to user",user)
//              user.courses.push(coursename);
//              }

//          }
//          let ad = new Admin('Harsha ',19,'acharh578@gmail.com')
//          console.log("admin....",ad)
//          ad.addcourse(user1,'javascript');

// Q3

let data1 =[];
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        .then(data=>
        {
            console.log("Total todos....",data)
            console.log("length....",data.length)
            for(let i=0;i<data.length;i++){
                if( data[i].completed == true){
                   data1.push(data[i]);
                }
                

            }
            console.log("completed todos....",data1);
        }
       
        )
