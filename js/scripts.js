function blogTab(tab) {
    var gamesBtn = document.getElementById("blog-list-btn-games");
    var showsBtn = document.getElementById("blog-list-btn-shows");
    var musicBtn = document.getElementById("blog-list-btn-music");
    var blogListContent = document.getElementById("blog-list-content");

    if (tab == "games") {
        //STYLING
        gamesBtn.style.fontWeight = "bold";
        showsBtn.style.fontWeight = "normal";
        musicBtn.style.fontWeight = "normal";
        gamesBtn.style.textShadow = "2px 2px 2px #52a6ba";
        showsBtn.style.textShadow = "none";
        musicBtn.style.textShadow = "none";
        //CONTENT
        blogListContent.innerHTML = `
        <li><a href="https://en.wikipedia.org/wiki/LSD:_Dream_Emulator">LSD: Dream Emulator</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Baroque_(video_game)">Baroque (PS1)</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Breath_of_Fire_IV">Breath of Fire IV</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Boku_no_Natsuyasumi_2">Boku No Natsuyasumi 2 (PSP)</a></li>
        `;
        //LOGGING
        console.log("games");

    } else if (tab == "shows") {
        //STYLING
        gamesBtn.style.fontWeight = "normal";
        showsBtn.style.fontWeight = "bold";
        musicBtn.style.fontWeight = "normal";
        gamesBtn.style.textShadow = "none";
        showsBtn.style.textShadow = "2px 2px 2px #52a6ba";
        musicBtn.style.textShadow = "none";
        //CONTENT
        blogListContent.innerHTML = `
         <li><a href="https://en.wikipedia.org/wiki/Adventure_Time">Adventure Time (rewatch)</a></li>
         <li><a href="https://en.wikipedia.org/wiki/JoJo's_Bizarre_Adventure:_Stone_Ocean">JoJo's Bizarre Adventure: Stone Ocean</a></li>
         <li><a href="https://en.wikipedia.org/wiki/Scavengers_Reign">Scavengers Reign</a></li>
         <li><a href="https://en.wikipedia.org/wiki/Boku_no_Natsuyasumi_2">Boku No Natsuyasumi 2 (PSP)</a></li>
         `;
        //LOGGING
        console.log("shows");

    } else if (tab == "music") {
        //STYLING
        gamesBtn.style.fontWeight = "normal";
        showsBtn.style.fontWeight = "normal";
        musicBtn.style.fontWeight = "bold";
        gamesBtn.style.textShadow = "none";
        showsBtn.style.textShadow = "none";
        musicBtn.style.textShadow = "2px 2px 2px #52a6ba";
        //CONTENT
        blogListContent.innerHTML = `
      <li><a href="#">REDACTED </a></li>
      <li><a href="#">REDACTED</a></li>
      <li><a href="#">REDACTED</a></li>
      <li><a href="#">REDACTED</a></li>
      `;
        //LOGGING
        console.log("music");

    } else {
        console.log("something is very wrong :(");
    }
}