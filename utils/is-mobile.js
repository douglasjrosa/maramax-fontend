export const isMobileCheck = (navigatorUserAgent) => {	
	const agents = [
		/Android/i,
		/webOs/i,
		/iPhone/i,
		/iPad/i,
		/iPod/i,
		/BlackBerry/i,
		/Windows Phone/i
	];
	let resp = false;

	agents.map((agent) => {
		if (navigatorUserAgent.match(agent)) resp = true;
	});
	return resp;
};
