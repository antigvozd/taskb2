export default function canonize(url) {
	const canon = new RegExp('@?(https?:)?(\/\/)?(www.)?(telegram.me|vk|twitter|github)?(.com)?(\/)?(\w+\.?)');
	const username1 = url.match(canon)[6];
	const username2 = url.match(canon)[8] !== undefined ? url.match(canon)[8] : '';
	const username = username1 ;
	return '@' + username;
}

//(\'|/\?/|\//)