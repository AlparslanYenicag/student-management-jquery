$(document).ready(function() {

    let studentData = [
        { name: "Alice", class: "10A" },
        { name: "Bob", class: "11B" },
        { name: "Charlie", class: "12C" }
    ];

 
    function renderTable() {
        let tbody = $("#studentTable tbody");
        tbody.empty(); 

        studentData.forEach((student, index) => {
            let row = `
                <tr data-index="${index}">
                    <td>${student.name}</td>
                    <td>${student.class}</td>
                    <td>
                        <button class="delete-btn">Delete</button>
                    </td>
                </tr>
            `;
            tbody.append(row);
        });
    }

    renderTable(); 


    $("#studentForm").on("submit", function(event) {
        event.preventDefault(); 

        let name = $("#studentName").val().trim();
        let studentClass = $("#studentClass").val().trim();

        if (!name || !studentClass) {
            alert("Please enter valid student details!");
            return;
        }

        studentData.push({ name, class: studentClass }); 
        renderTable(); 
        $("#studentForm")[0].reset(); 
    });


    $("#studentTable").on("click", ".delete-btn", function() {
        let rowIndex = $(this).closest("tr").data("index");
        studentData.splice(rowIndex, 1);
        renderTable();
    });


    $("#studentTable").on("click", "tr", function() {
        $(this).toggleClass("highlight");
    });
});
