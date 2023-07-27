let arr=Array.from(document.getElementsByTagName("a"))
//for(let i=0;i<arr.length;i++) { console.log(arr[i]+"\n");}

const{host, hostname, href, origin, pathname, port, protocol, search}=window.location

//console.log(hostname)
let strobj=(val)=>{
	return new String(val);
}
let cmp=(s)=>{
	return s.includes(hname)||s.includes(strobj("youtube"))
		||s.includes(strobj("t.me"))||s.includes(strobj("whatsapp"))
		||s.includes(strobj("useblackbox"))||s.includes(strobj("wordpress"))
		||s.includes(strobj("linktr"))||s.includes(strobj("facebook"))
		||s.includes(strobj("youtube"))||s.includes(strobj("instagram"))
	        ||s.includes(strobj("twitter"))||s.includes(strobj("pinterest"));
}

let hname=new String(hostname)

for(let i=0;i<arr.length;i++) { 
	let s=new String(arr[i]);
	if(!(cmp(s))){
	 console.log(arr[i]+"\n");
	}
}	
