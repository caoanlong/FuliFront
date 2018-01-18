function isWeixin () {
	const u = navigator.userAgent.toLowerCase() 
	if(u.match(/MicroMessenger/i) == "micromessenger") {  
		return true
	} else {  
		return false
	}
}

export {
	isWeixin
}