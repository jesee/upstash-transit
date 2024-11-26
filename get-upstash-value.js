const fetch = require('node-fetch');

export default async function handler(req, res) {
    const url = "https://holy-cobra-42267.upstash.io/get/1ebd1bfb-e319-41aa-b059-5947865b34a4?_token=AaUbAAIjcDFjMDllNjRjMDUwMDE0ZDBmYjkwNWRkY2ViNDJkMjgxZnAxMA";
    const response = await fetch(url);
    const data = await response.json();
    res.send(data.result); // 返回键值
}
