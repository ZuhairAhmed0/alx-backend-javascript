interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const studentslist: Student[] = [
    {
        firstName: "string",
        lastName: "string",
        age: 21,
        location: "string"
    },
    {
        firstName: "string",
        lastName: "string",
        age: 21,
        location: "string"
    }
]

const renderTable = (studentslist: Array<Student>): void => {
    const table = document.createElement("table");
    const row = document.createElement("tr");
    table.insertAdjacentElement("beforeend", row);

    row.insertAdjacentHTML("beforeend", "<ht>FirstName</ht>")
    row.insertAdjacentHTML("beforeend", "<ht>Location</ht>")

    for (const student of studentslist) {
        const stdRow = document.createElement("tr");
        stdRow.insertAdjacentHTML("beforeend", `<ht>${student.firstName}</ht>`)
        stdRow.insertAdjacentHTML("beforeend", `<ht>${student.location}</ht>`)

        table.insertAdjacentElement("beforeend", stdRow);
    }

    document.body.insertAdjacentElement("beforeend", table)
}

renderTable(studentslist)