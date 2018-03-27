const padLines = (props) => {
    let singleSpace = ' ';
    let spaceMultiplier = props.linePadding;
    if (spaceMultiplier && spaceMultiplier != 0) {
        singleSpace = '';
        /* Adds spaces to start and end of already populated lines for visual padding  */
        for (i = 0; i < spaceMultiplier; i++) {
            singleSpace += ' ';
        }
    } else if (spaceMultiplier === 0) {
        singleSpace = '';
    }
    rightBorderWidth = 0;
    if (props.textAlign === 'right') {
        rightBorderWidth = Math.ceil(props.fontSize * 0.25);
        if (spaceMultiplier && spaceMultiplier !== 0) {
            rightBorderWidth *= spaceMultiplier;
        } else if (spaceMultiplier === 0) {
            rightBorderWidth = 0;
        }
    }
    return singleSpace;
}

const loopLines = (array, props) => {
    let lineStart = 0;
    singleSpace = padLines(props);
    let textString = props.children;
    const numOfLines = Math.ceil(textString.length / props.splitOn);
    // Adds space to end of string, preventing cutoff of last word.
    textString = textString.concat(' ');
    let lineEnd = textString.slice(0, props.splitOn).lastIndexOf(' ');
    /* multiplying x2 to handle for awkward splits before very long words
    that can push content beyond the above calculated numOfLines */
    for (i = 0; i < numOfLines * 2; i++) {
        let line = textString.slice(lineStart, lineEnd);
        /* only pushes to Array if length of line is > 0 */
        if (line.length > 0) {
            line = singleSpace + line + singleSpace;
            array.push(line);
        }
        lineStart = lineEnd + 1;
        fakeLineEnd = lineStart + props.splitOn;
        lineEnd = textString.slice(0, fakeLineEnd).lastIndexOf(' ');
    }
}

export default { loopLines };
