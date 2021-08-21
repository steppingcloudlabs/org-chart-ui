export const legendTable={
    methods:{
        drawlegend(heading,data)
        {
            var table = document.createElement('table');
            table.setAttribute("id", "legendd");
                table.style.position = "absolute";
                table.style.top = "20px";
                table.style.left = "50px";
                table.style.color = "#2B81D6";
                table.style.width = "150px";
                table.style.border = "1px solid black";
                for (var i =0; i <heading.length; i++){
                    var tr = document.createElement('tr');   

                    var th= document.createElement('th');
                    var td = document.createElement('td');

                    var text1 = document.createTextNode(heading[i]);
                    var text2 = document.createTextNode(data[i]);

                    th.appendChild(text1);
                    td.appendChild(text2);
                    tr.appendChild(th);
                    tr.appendChild(td);

                    table.appendChild(tr);
                }
                return table
        }
    }
}