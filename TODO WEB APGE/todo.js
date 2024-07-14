let inputBx = document.querySelector('#inputBx');
        let list = document.querySelector('#list');

        inputBx.addEventListener("keyup",function(event){
            if(event.key == "Enter") {
                additem(this.value)
                this.value = ""
            }
        })
        let additem=(inputBx) => {
            let listitem = document.createElement("li");
            listitem.innerHTML = `${inputBx}<i></i>`;
            listitem.addEventListener("click",function(){
                this.classList.toggle('done');
            })
            listitem.querySelector('i').addEventListener("click",function(){
                listitem.remove();
            })
                list.appendChild(listitem);
        }
