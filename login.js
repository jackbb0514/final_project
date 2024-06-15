
function showFloatingWindow() {
    var floatingWindow = document.getElementById("floatingWindowLogin");
    floatingWindow.style.display = "block";
}

function closeFloatingWindow() {
    var floatingWindow = document.getElementById("floatingWindowLogin");
    floatingWindow.style.display = "none";
}

function showRegisterWindow() {
    var floatingWindow = document.getElementById("floatingWindowRegister");
    floatingWindow.style.display = "block";
}

function registerUser() {
    // Hide the login window
    var loginWindow = document.getElementById("floatingWindowLogin");
    loginWindow.style.display = "none";

    // Show the registration window
    var registerWindow = document.getElementById("floatingWindowRegister");
    registerWindow.style.display = "block";
}
function clearText(input) {
if (input.value === '搜尋') {
    input.value = '';
}
}

function restoreText(input) {
if (input.value === '') {
    input.value = '搜尋';
}
}
function search() {
    var input = document.getElementById("searchInput").value;
    alert("You searched for: " + input);
}




document.getElementById('loginLink').addEventListener('click', function() {
    // alert('Logging in...');
    this.classList.add('hidden');
    document.getElementById('logoutLink').classList.remove('hidden');
    
});

document.getElementById('logoutLink').addEventListener('click', function() {
    alert('已登出');
    this.classList.add('hidden');
    document.getElementById('loginLink').classList.remove('hidden');
    
});
