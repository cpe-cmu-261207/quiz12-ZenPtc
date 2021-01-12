//your code here!
document.addEventListener('DOMContentLoaded',function(){
    let sum=620610794
    document.querySelector('#button-compute').onclick = function(){
        const par = document.querySelector('#stdNum');
        const number = document.querySelector("#input-number").value;

        sum += +number;
        par.innerHTML = sum;
    }

    document.querySelector('#button-create-table').onclick = function(){
        const row = document.querySelector("#input-row").value;
        const col = document.querySelector("#input-col").value;
        const table = document.querySelector('table')

        let num=0;

        for(let i=0;i<row;i++){
            const tr = document.createElement('tr');
            for(let j=0;j<col;j++){
                const td = document.createElement('td');
                td.innerHTML = ++num;
                tr.append(td)
            }
            table.append(tr)
        }

    }
})