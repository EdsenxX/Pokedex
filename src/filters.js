const capitalize = (string) => {
    if(!string){
        return ''
    }
    return string.trim().replace(/^\w/, (c) => c.toUpperCase());
}

export {capitalize}