// transform 2D array into table (row-indexed)
function makeTable(matrix) {
    const table = document.createElement("table");
    matrix.forEach((row) => {
        const tr = document.createElement("tr");
        row.forEach((e) => {
            const td = Object.assign(document.createElement("td"), { innerHTML: `<kbd>${e}</kbd>` });
            td.dataset.key = e.charCodeAt(0);
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    return table;
}

function makeSplitLayout(left, right, name) {
    let div = Object.assign(document.createElement("div"), { className: "layout"});
    [
        Object.assign(document.createElement("h2"), { innerHTML: `${name} layout` }),
        makeTable(left),
        makeTable(right)
    ].forEach((c) => { div.appendChild(c) });
    return div;
}

let engram = [
    [["B", "Y", "O", "U"], ["C", "I", "E", "A"], ["G", "X", "J", "K"]],
    [["L", "D", "W", "V", "Z"], ["H", "T", "S", "N", "Q"], ["R", "M", "F", "P"]]
]
let qwerty = [
    [["Q", "W", "E", "R", "T"], ["A", "S", "D", "F", "G"], ["Z", "X", "C", "V", "B"]],
    [["Y", "U", "I", "O", "P"], ["H", "J", "K", "L"], ["N", "M"]]
]

document.body.appendChild(makeSplitLayout(...engram, "Engram"));
document.body.appendChild(makeSplitLayout(...qwerty, "QWERTY"));
