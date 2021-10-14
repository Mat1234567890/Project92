function addUser() {
    player_1name = document.getElementById("player1name").value;
    player_2name = document.getElementById("player2name").value;
    localStorage.setItem("player1name", player_1name);
    localStorage.setItem("player2name", player_2name);
    window.location = "quiz_game_page.html";
}