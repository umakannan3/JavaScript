function calc()
{
    var name1=(document.getElementById("name").value);
    var eid = (document.getElementById("eid").value);
    var des = (document.getElementById("des").value);
    var pno = (document.getElementById("pno").value);
    var bp = parseInt(document.getElementById("bpay").value);
    var hr = bp*(.15);
    document.getElementById("hra").value=hr;
    var da = bp*(.15);
    document.getElementById("da").value=da;
    var pf = bp*(.03);
    document.getElementById("pf").value=pf;
    var gp = bp+hr+da;
    document.getElementById("gp").value=gp;
    var np = gp-pf;
    document.getElementById("npay").value=np;

}