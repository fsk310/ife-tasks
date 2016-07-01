(function(){
    function render(type, value) {
        var arrDom = document.getElementById('arr');
        if(type === 1) {
            if(value===null || value===''){
                return;
            }
            var newItem = document.createElement('li');
            newItem.innerText = value;
            arrDom.insertBefore(newItem,arrDom.firstChild);
        } else if (type === 2) {
            if(value===null || value===''){
                return;
            }
            var newItem = document.createElement('li');
            newItem.innerText = value;
            arrDom.appendChild(newItem);
        } else if (type === 3) {
            if (!arrDom.firstChild) {
                return;
            }
            removeFirstChild(arrDom);
        } else if (type === 4) {
            if (!arrDom.lastChild) {
                return;
            }
            removeLastChild(arrDom);
        }
    }
    function removeFirstChild(arrDom) {
        var flag = false;
        if (arrDom.firstChild.nodeType === 3) {
            flag = true;
        }
        arrDom.removeChild(arrDom.firstChild);
        if (flag) {
            removeFirstChild(arrDom);
        }
    }
    function removeLastChild(arrDom) {
        var flag = false;
        if (arrDom.lastChild.nodeType === 3) {
            flag = true;
        }
        arrDom.removeChild(arrDom.lastChild);
        if (flag) {
            removeLastChild(arrDom);
        }
    }

    document.getElementById('leftIn').onclick = function(){
        render(1, document.getElementById('text').value);
    };
    document.getElementById('rightIn').onclick = function(){
        render(2, document.getElementById('text').value);
    };
    document.getElementById('leftOut').onclick = function(){
        render(3);
    };
    document.getElementById('rightOut').onclick = function(){
        render(4);
    };
}());