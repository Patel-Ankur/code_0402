console.log("I am in js_examples");
// Callback Demo

// Pretend that this response is coming from the server
// const students = [
//     {name: "harry", subject: "JavaScript"},
//     {name: "Rohan", subject: "Machine Learning"}
// ]

// function enrollStudent(student, callback){
//     setTimeout(function() {
//         students.push(student);
//         console.log("Student has been enrolled");
//         callback();
//     }, 1000);
// }

// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 5000);
// }

// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent, getStudents);
// getStudents();

// Promise Demo

// function func1(){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(() => {
// 		const error = true;
// 		if(!error){
// 			console.log('Function : Your promise has been resolved');
// 			resolve();
// 		}
// 		else{
// 			console.log('Function : Your promise has not been resolved');
// 			reject('Sorry not fulfilled');
// 		}
// 		},2000);
// 	})
// }

// func1().then(function(){
//     console.log('Ankur: Thanks for resolving');
// }).catch(function(){
//     console.log('Ankur: Very bad');
// })

// Function inside .then is - resolve()
// Function inside .catch is - reject()

// Fetch API demo

// fetch("https://api.github.com/users")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((myData) => {
//     // console.log(data);
//     let content = "";
//     myData.map((value) => {
//       content += `<table class="table table-hover">
// 		<tbody>
// 		  <tr>
// 			<th scope="row">${value.id}	</th>
// 			<td>${value.login}</td>
// 			<td>${value.type}</td>
// 			<td>${value.site_admin}</td>
// 		  </tr>
// 		</tbody>
// 	  </table>`
//     });
// 	document.getElementById("myContainer").innerHTML = content;
//   });

// jQuery Selector

$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
