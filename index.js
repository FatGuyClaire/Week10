document.getElementById("songSubmit").addEventListener('click', (event) => {
    event.preventDefault();
    const Artist = document.getElementById("artistInput").value;
    const Song = document.getElementById("songInput").value
    const artistElem = document.createElement('td');
    artistElem.innerText = Artist;
    const songElem = document.createElement('td');
    songElem.innerText = Song;
    const rowElem = document.createElement('tr');
    rowElem.appendChild(artistElem);
    rowElem.appendChild(songElem);
    document.getElementById("songList").appendChild(rowElem);
    document.getElementById("artistInput").value = "";
    document.getElementById("songInput").value = ""
})