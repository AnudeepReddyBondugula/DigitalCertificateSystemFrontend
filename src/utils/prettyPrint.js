const dontOverflowText = (string, len) => {
    if (string.length < len) return string;
    else{
        return string.substring(0, len-3) + "...";
    }
}

export {dontOverflowText};