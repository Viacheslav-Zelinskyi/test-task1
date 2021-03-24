const apiUrl = 'https://api.jsonbin.io/b/605b54a0266e9a21b1aa1017/1';

export default function api(setRows) {
	fetch(apiUrl)
		.then((res) => res.json())
		.then((result) => {
			setRows(result.data.Results.ResultRow);
		})
		.catch((err) => console.log(err));
}
