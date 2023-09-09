const HideShowDiv = () => {
    // console.log(id);
    let x = document.getElementById("mainLeft");
    if (x.style.display === "none") {
        x.style.display = "block"; 
    } else {
        x.style.display = "none";
    }
}

export default HideShowDiv;