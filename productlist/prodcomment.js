//控制點擊數量
function updateQuantity(change) {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    var newQuantity = currentQuantity + change;
        if (newQuantity < 1) {
            newQuantity = 1;
        }

    quantityInput.value = newQuantity;
}

// 添加到購物車
function addToCart() {
    var quantity = document.getElementById('quantity').value;
    alert('已把 ' + quantity + ' 個商品加入購物車');
}

function processFormData() {
    const name = nameElement.value;
    let ratingValue = 0;
    for (let i = 0; i < ratingElements.length; i++) {
        if (ratingElements[i].checked) {
            ratingValue = ratingElements[i].value;
            break;
        }
    }
    alert("謝謝" + name + "的回饋，您的評價是 " + ratingValue + " 星!");
}

function addMsg() {
    // 獲取table標籤元素
    let table = document.getElementById("Feedback_table");
    // 建立新行
    let newRow = table.insertRow();
    // 建立新單元格 向表格中插入元素
    newRow.insertCell().innerHTML = new Date().toLocaleString();
    newRow.insertCell().innerHTML = nameElement.value;
    let ratingValue = 0;
    for (let i = 0; i < ratingElements.length; i++) {
        if (ratingElements[i].checked) {
            ratingValue = ratingElements[i].value;
            break;
        }
    }
    newRow.insertCell().innerHTML = "&#9733;".repeat(ratingValue);
    newRow.insertCell().innerHTML = feedbackElement.value;
    newRow.insertCell().innerHTML = '<button onclick="delRow(this)">刪除</button>';
    // 清空表單欄位
    nameElement.value = '';
    feedbackElement.value = '';
    for (let i = 0; i < ratingElements.length; i++) {
        ratingElements[i].checked = false;
    }
}



    <script>

    //控制點擊數量
    function updateQuantity(change) {
        var quantityInput = document.getElementById('quantity');
        var currentQuantity = parseInt(quantityInput.value);
        var newQuantity = currentQuantity + change;
            if (newQuantity < 1) {
                newQuantity = 1;
            }

        quantityInput.value = newQuantity;
    }

    // 添加到購物車
    function addToCart() {
        var quantity = document.getElementById('quantity').value;
        alert('已把 ' + quantity + ' 個商品加入購物車');
    }
        </script>
