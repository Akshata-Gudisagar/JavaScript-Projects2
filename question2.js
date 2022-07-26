//counts no of words in a string
//gi - finish regexp and set the flags "global" and "case-insensitive"
function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");//remove the start and end spaces of the given string.
    str = str.replace(/[ ]{2,}/gi," ");//Try to reduce multiple spaces to a single space.
    str = str.replace(/\n /,"\n");//Try to exclude a new line with a start spacing.
    return str.split(' ').length;
 }
 console.log(countWords("   HTC has a best training department"));
