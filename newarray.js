    let array = []
    let selectedIndex;
    let selectedRow = []
    function addData() {
        let name = document.getElementById('elementInput').value
       array.push(name)
        createRow(array)
        document.getElementById("elementInput").value = ""
        
    }

    function createRow(data){
      let tableRow = document.getElementById("tableRow");
        let value = ""
        for (let i=0; i< data.length; i++){
         value +=
                `<tr>
                    <td>
                        <input type="checkbox" onclick="checkClick(this,${i})">
                    </td>
                    <td>${i + 1}</td>
                    <td>${data[i]}</td>
                    <td>
                        <button onclick='dltElement(${i})' class="btn">Delete</button>
                        <button onclick='editElement(${i})' class="btn">Edit</button>
                    </td>
                </tr>`
        } 
        tableRow.innerHTML = value
    }

    function dltElement(index) {
        array.splice(index, 1)
        createRow(array)
        alert("Delete");
        
    }

    function editElement(index) {
        selectedIndex = index
        document.getElementById("elementInput").value = array[index]
        
    }

    function updateValue() {
        let elementInput = document.getElementById('elementInput').value;
        array[selectedIndex] = elementInput
        createRow(array) 
        document.getElementById('elementInput').value=''
    }

    function searchValue(value) {
        findValue = []
        for(let a=0; a<array.length; a++){
            if(array[a] == value){
                findValue.push(array[a])
            }
        }
        createRow(findValue)
    }



    function checkClick(evet, index) {
        if (evet.checked) {
            selectedRow.push(index)
        }

        else {
            selectedRow.splice(index, 1)
        }

        let deleteallButton = document.getElementById('deleteallButton')

        if (selectedRow.length > 0) {
            deleteallButton.style.display = "block"
        }
        else {
            deleteallButton.style.display = "none"
        }
        // console.log(selectedRow)
    }
   



    function boxDelete() {
        let deleteallButton = document.getElementById('deleteallButton')
        let remainingItems = [];
        for (let i = 0; i < array.length; i++) {
            if (!selectedRow.includes(i)) {
                remainingItems.push(array[i])
            }
        }
        createRow(remainingItems)
        array = remainingItems
        selectedRow.length = 0

        if (selectedRow.length > 0) {
            deleteallButton.style.display = "block"
        }
        else {
            deleteallButton.style.display = "none"
        }
    }



