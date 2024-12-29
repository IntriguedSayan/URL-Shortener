const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const BASE =   ALPHABET.length;

export function generateShortUrl(length = 6):string{
    let shortUrl = "";
    for (let i = 0; i < length; i++) {

        const index = Math.floor(Math.random() * BASE);
        shortUrl += ALPHABET[index];
    }
    
    return shortUrl;

}