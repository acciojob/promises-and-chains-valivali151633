//your JS code here. If required.
const form = document.getElementById("form").addEventListener("submit" , (event) =>{
	 
	event.preventDefault();
	const name = document.getElementById("name").value;
	const age = parseInt(document.getElementById("age").value);

	if(!name || !age){
		alert("please fill all the required fields")
		return
	}

	const agepromise = new Promise((resolve , reject) =>{
		setTimeout(() => {
			if(age > 18){
				resolve()
			}
			else{
				reject()
			}
		},4000)
	});
	agepromise.then(()=>{
		alert(`Welcome, ${name}. You can vote.`)
	}).catch((error) => {
		alert(`Oh sorry ${name}. You aren't old enough.`)
  })
  });
	