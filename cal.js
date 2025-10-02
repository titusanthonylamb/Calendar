"use strict";

const table = document.getElementById("calendar");
let type_button = document.getElementById("type_button")
let compact_mode = false;

// hide or show rows based on mode
function switch_mode() {
    if (compact_mode == false) {
        compact_mode = true;
        let has_content = false;
        for (let i = 1; i < 25; i++) {
            for (let v = 1; v < 8; v++) {
                if (table.rows[i].cells[v].textContent.trim() == "") {
                    has_content = true;
                }
            }
            if (has_content == true) {
                table.rows[i].style.display = "none";
            }
        }
        type_button.textContent = "Compact Mode";
    } else {
        compact_mode = false;
        for (let i = 1; i < 25; i++) {
            table.rows[i].style.display = "";
        }
        type_button.textContent = "Full Mode";
    }
    type_button.style.fontWeight = "bold";
}

// loop through table to create rows and sections,
// and naming row headers by time
for (let i = 0; i < 24; i++) {
    let newRow = table.insertRow(i + 1);
    let rowHead = document.createElement("th");

    for (let v = 0; v < 8; v++) {
        let newCell = newRow.insertCell(v);
        if (v == 0) {
            newCell.appendChild(rowHead);

            let displayHour = i % 12 == 0 ? 12 : i % 12;
            let period = i < 12 ? "AM" : "PM";

            newCell.textContent = `${displayHour}:00 ${period}`
            newCell.style.fontWeight = "bold";
            newCell.style.textAlign = "right";
        } else {
            newCell.textContent = ""
        }
    }
}