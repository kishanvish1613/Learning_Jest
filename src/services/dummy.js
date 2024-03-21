export const helper = () => {
    const num = Math.floor(Math.random() * 10);
    return num % 2 == 0;
}


export const execute = () => {
    const result = module.exports.helper();
    if(result) {
        return "JS"
    }else {
        return "NodeJS"
    }
}

