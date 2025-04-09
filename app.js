document.addEventListener("DOMContentLoaded", function() {
    let road = [];
    const roadMap = document.getElementById("roadMap");
    const playerWinBtn = document.getElementById("playerWinBtn");
    const bankerWinBtn = document.getElementById("bankerWinBtn");
    const resetBtn = document.getElementById("resetBtn");

    function drawRoad() {
        roadMap.innerHTML = "";
        for (let i = 0; i < road.length; i++) {
            const div = document.createElement("div");
            div.classList.add("roadCell");
            if (road[i] === "B") {
                div.style.backgroundColor = "red";
            } else if (road[i] === "P") {
                div.style.backgroundColor = "blue";
            }
            roadMap.appendChild(div);
        }
    }

    playerWinBtn.addEventListener("click", () => {
        road.push("P");
        drawRoad();
    });

    bankerWinBtn.addEventListener("click", () => {
        road.push("B");
        drawRoad();
    });

    resetBtn.addEventListener("click", () => {
        road = [];
        drawRoad();
    });
});