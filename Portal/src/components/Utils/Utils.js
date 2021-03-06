import Trianglify from 'trianglify';

export default function (wid = 200, hei = 200, minimalSize = 60) {
    const url = Trianglify({
        width: wid,
        height: hei,
        cell_size: (Math.random() * 30) + minimalSize,
        x_colors: 'random',
        y_colors: 'random'
    }).png();
    return url;
}

export function _reconstructorTree(message= []) {
    const pattern = /^[0-9]{4}[-]{1}[0-9]{1,2}[-]{1}[0-9]{1,2}/;
    let blogdatas = [];
    if(message && message.length > 0) {
        const items = message;
        blogdatas = items.filter(item => {
            const name = item.name;
            const match = pattern.exec(name);
            if(match){
                return true;
            }else{
                return false;
            }
        }).map(item => {
            const name = item.name;
            const match = pattern.exec(name);
            const blogname = name.substring(match[0].length+1, name.length).replace('.md','');
            return {
                name: blogname,
                date: Date.parse(match[0].replace(/-/g, "/")),
                path: item.path,
                git_url: item.git_url,
                sha: item.sha
            }
        });
        blogdatas.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    }
    return blogdatas;
}

export const REACTJS='frontend/ReactJS';
export const GRAPHQL='frontend/GraphQL';
export const SPRING_BOOT='backend/SpringBoot';
export const SPRING_CLOUD='backend/SpringCloud';
export const DOCKER='backend/Docker';

// export const CLIENT_ID = "MjJmMzNiN2Y0M2VjOWFlNmQwYzk="; // for local
// export const CLIENT_SECRET = "Mjg4OTc5OTI1NjE4MDZjMTFkYmYxNGYyMzFkYzZjMzFhZmE5ODVlNQ=="; // for local
export const CLIENT_ID = "OWMwNDUzNzBhMGZlZTBiZWI3Njg=";
export const CLIENT_SECRET = "OTI2NDcwOWY0MzY5NzBiYThjNDBjMjFjNTg4NDIzZTgyZDMzNjQzYg==";
const redirect_uri = `${window.location.protocol}//${window.location.hostname}${window.location.port? ':'+window.location.port: ''}/auth`;
export const AUTHURL=` https://github.com/login/oauth/authorize?client_id=${Base64.decode(CLIENT_ID)}&scope=public_repo&redirect_uri=${redirect_uri}`;
const t = 'MGQ0MmI3ODNlZTRiMjgzZjBkMzc5Y2JjNjQ5ZjBmNjVmYjc2ZjQ4Mg==';
export const TEMP_TOKEN = `access_token=`+Base64.decode(t);
export const TEMP_TOKEN_AUTH = Base64.decode(t);
