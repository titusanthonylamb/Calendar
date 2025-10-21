"use strict";

// constants and variables
const table = document.getElementById("calendar");
let type_button = document.getElementById("type_button")
let edit_mode = true;

// hide or show rows based on mode
function switch_mode() {
    if (edit_mode == true) {
        edit_mode = false;
        table.contentEditable = "false";
        let has_content = false;
        for (let i = 1; i < 25; i++) {
            for (let v = 1; v < 8; v++) {
                //console.log(table.rows[i].cells[v].textContent.trim());
                if (table.rows[i].cells[v].textContent.trim() !== "") {
                    has_content = true;
                }
                table.rows[i].cells[v].contentEditable = "false";
            }
            if (has_content == false) {
                table.rows[i].style.display = "none";
            }
            has_content = false;
        }
        type_button.textContent = "View Mode";
    } else {
        edit_mode = true;
        for (let i = 1; i < 25; i++) {
            table.rows[i].style.display = "";
            for (let v = 1; v < 8; v++) {
                table.rows[i].cells[v].contentEditable = "true";
            }
        }
        type_button.textContent = "Edit Mode";
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
            newCell.textContent = "";

            // pointer leave & enter listeners
            newCell.addEventListener('pointerenter', () => {
                newCell.classList.add('cell-hover');
                newCell.classList.add('cell-active');
            });
            newCell.addEventListener('pointerleave', () => {
                newCell.classList.remove('cell-hover');
                newCell.classList.remove('cell-active');
            });
        }
    }
}

// set mode to view
switch_mode();