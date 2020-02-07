var data= '{"gegevens":[' +
    '{"Naam":"Zara","Score":"36" },' +
    '{"Begin datum":"21 Januari 2016,"Vrienden":"Mika, Josef, Maria Sumail, Lotte" },' +
    '{"Gekwalificeerd":"waar","of":"niet waar" }]}';

json = JSON.parse(data);
window.alert(JSON.stringify(json));