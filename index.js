const superbowlWin = array => {
    const win = array.find(element => element.result === "W")
    return win === undefined ? win : win.year
}
