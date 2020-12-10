var a,b;

for(a = 2; a < 10; a++) {

    document.write("<p>")

    for(b = 1; b < 10; b++) {
        document.write( a + "x" + b + "=" + (a * b) + "<BR>");
    }

    document.write("</p>")
}