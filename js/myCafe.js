window.onload = function(){
    document.getElementById("c1").onblur = update;
    document.getElementById("c2").onblur = update;
    document.getElementById("c3").onblur = update;


    function update(){
        console.log("update진입");

        var v1 = document.getElementById("c1").value;
        var v2 = document.getElementById("c2").value;
        var v3 = document.getElementById("c3").value;
        var p1 = 2500 * v1;
        var p2 = 3000 * v2;
        var p3 = 4500 * v3;

        document.getElementById("c1Price").value = p1;
        document.getElementById("c2Price").value = p2;
        document.getElementById("c3Price").value = p3;

        v1 = isNaN(v1)? 0 : v1*1;
        v2 = isNaN(v2)? 0 : v2*1;
        v3 = isNaN(v3)? 0 : v3*1;
        document.getElementById("cTotalCnt").value = v1+v2+v3;
        p1 = isNaN(p1) ? 0 : p1;
        p2 = isNaN(p2) ? 0 : p2;
        p3 = isNaN(p3) ? 0 : p3;
        document.getElementById("cTotalPrice").value = p1+p2+p3;
    }
};