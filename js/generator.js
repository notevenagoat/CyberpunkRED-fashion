
const clothingStyles = ['Bag Lady Chic', 'Gang Colors', 'Generic Chic', 'Bohemian', 'Leisurewear', 'Nomad Leathers', 'Asia Pop', 'Urban Flash', 'Businesswear'];

let getrandomStyle = () => {
  let randomStyle = clothingStyles[Math.floor(Math.random() * 8)]
  return randomStyle;
  
  }

  const fashionTable = document.getElementById("fashionTable");
  
  let getSeason = () => {
    let currentSeason=[];
    for (i=0;i<7;i++) {
      let currentStyle = getrandomStyle();
      currentSeason.push(currentStyle);
    }
    return (currentSeason);
  }
  let htmlFashionTable = [];

  let putSeason = (week) => {
     let htmlSeason = getSeason();
       tableContent = `
    <tr>
        <th scope="row">${week}</th>
        <td>${htmlSeason[0]}</td>
        <td>${htmlSeason[1]}</td>
        <td>${htmlSeason[2]}</td>
        <td>${htmlSeason[3]}</td>
        <td>${htmlSeason[4]}</td>
        <td>${htmlSeason[5]}</td>
        <td>${htmlSeason[6]}</td>
      </tr>`
      htmlFashionTable.push(tableContent);
      return htmlFashionTable;
  }

let btn = document.querySelector("#add-season");
let week = 1;
btn.addEventListener('click', function (event) {
  finalHtml=putSeason(week);
  fashionTable.innerHTML = finalHtml.join("\n");
  week++;
  });
