export const getCookie = (cookieName, stringCookie) => {
    const cookies = `${stringCookie}`.split(";").reduce((acc, cookie) => {
        const [key, value] = `${cookie}`.split("=");
        acc[key] = value;
        return acc;
    }, {});
    
    return cookies[cookieName] || "";
}