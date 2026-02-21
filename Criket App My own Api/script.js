const inputField = document.getElementById("input");
    const nameDisplay = document.getElementById("NamePly");
    const searchBtn = document.getElementById("search");

    // T20
    let t20_debut = document.getElementsByClassName("t20-debut");
    let t20_matches = document.getElementsByClassName("t20-matches");
    let t20_runs = document.getElementsByClassName("t20-runs");
    let t20_average = document.getElementsByClassName("t20-average");
    let t20_highest = document.getElementsByClassName("t20-highest");
    let t20_sr = document.getElementsByClassName("t20-sr");
    let t20_last = document.getElementsByClassName("t20-last");

    // ODI
    let odi_debut = document.getElementsByClassName("odi-debut");
    let odi_matches = document.getElementsByClassName("odi-matches");
    let odi_runs = document.getElementsByClassName("odi-runs");
    let odi_average = document.getElementsByClassName("odi-average");
    let odi_highest = document.getElementsByClassName("odi-highest");
    let odi_sr = document.getElementsByClassName("odi-sr");
    let odi_last = document.getElementsByClassName("odi-last");

    // Test
    let test_debut = document.getElementsByClassName("test-debut");
    let test_matches = document.getElementsByClassName("test-matches");
    let test_runs = document.getElementsByClassName("test-runs");
    let test_average = document.getElementsByClassName("test-average");
    let test_highest = document.getElementsByClassName("test-highest");
    let test_sr = document.getElementsByClassName("test-sr");
    let test_last = document.getElementsByClassName("test-last");

    // Function to populate stats
    function Data(result) {
      // T20
      t20_debut[0].innerHTML = result.career[0].debut;
      t20_matches[0].innerHTML = result.career[0].matches;
      t20_runs[0].innerHTML = result.career[0].runs;
      t20_average[0].innerHTML = result.career[0].average;
      t20_highest[0].innerHTML = result.career[0].highestScore;
      t20_sr[0].innerHTML = result.career[0].strikeRate;
      t20_last[0].innerHTML = result.career[0].lastPlayed;

      // ODI
      odi_debut[0].innerHTML = result.career[1].debut;
      odi_matches[0].innerHTML = result.career[1].matches;
      odi_runs[0].innerHTML = result.career[1].runs;
      odi_average[0].innerHTML = result.career[1].average;
      odi_highest[0].innerHTML = result.career[1].highestScore;
      odi_sr[0].innerHTML = result.career[1].strikeRate;
      odi_last[0].innerHTML = result.career[1].lastPlayed;

      // Test
      test_debut[0].innerHTML = result.career[2].debut;
      test_matches[0].innerHTML = result.career[2].matches;
      test_runs[0].innerHTML = result.career[2].runs;
      test_average[0].innerHTML = result.career[2].average;
      test_highest[0].innerHTML = result.career[2].highestScore;
      test_sr[0].innerHTML = result.career[2].strikeRate;
      test_last[0].innerHTML = result.career[2].lastPlayed;
    }

    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const playerName = inputField.value;
      if (!playerName) {
        alert("Please enter a player name!");
        return;
      }
      nameDisplay.textContent = `Name: ${inputField.value}`;

      fetch("players.text")
        .then(res => res.json())
        .then(data => {
          const player = data.players.find(p => p.name === playerName);
          if (!player) {
            alert("No data found for this player!");
            return;
          }
          Data(player);
        })
        .catch(err => console.log("Error fetching players", err));
    });

window.onload = function() {
    // Set the Time
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString();

    const timeDisplay = document.getElementById('alert-time');
    if(timeDisplay) {
        timeDisplay.innerHTML = `🕒 Session Started: ${dateString} | ${timeString}`;
    }

    // Trigger Modal
    const modal = document.getElementById('welcome-modal');
    if(modal) {
        modal.classList.add('modal-active');
    }
};

function closeModal() {
    const modal = document.getElementById('welcome-modal');
    modal.classList.remove('modal-active');
}