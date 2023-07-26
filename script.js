let arr=Array.from(document.getElementsByTagName("a"))
//for(let i=0;i<arr.length;i++) { console.log(arr[i]+"\n");}

const{host, hostname, href, origin, pathname, port, protocol, search}=window.location

//console.log(hostname)

let cmp=(s)=>{
	return s.includes(hname)||s.includes(new 	String("youtube"))||s.includes(new 	String("t.me"))||s.includes(new 	String("chat.whatsapp"))||s.includes(new 	String("useblackbox"))||s.includes(new 	String("wordpress"))||s.includes(new 	String("linktr"));
}

let hname=new String(hostname)

for(let i=0;i<arr.length;i++) { 
	let s=new String(arr[i]);
	if(!(cmp(s))){
	 console.log(arr[i]+"\n");
	}
}	
