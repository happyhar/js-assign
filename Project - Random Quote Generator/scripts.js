var arr= new Array();
        arr.push("“Talk is cheap. Show me the code.”")
        arr.push("“Programs must be written for people to read, and only incidentally for machines to execute.” ");
        arr.push("“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live” ");
        arr.push("“Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.”");
        arr.push("“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”")
        arr.push("“I'm not a great programmer; I'm just a good programmer with great habits.”");
        arr.push("“Truth can only be found in one place: the code.” ");
        arr.push("“That's the thing about people who think they hate computers. What they really hate is lousy programmers.”");
        arr.push("“You've baked a really lovely cake, but then you've used dog shit for frosting.” ");
        arr.push("“A language that doesn't affect the way you think about programming is not worth knowing.”");
        arr.push("“Walking on water and developing software from a specification are easy if both are frozen.”");
        function rotate()
        {
        var num= Math.round(Math.random()*10);
        add(num);
        }
        function add(i)
        {
        var chi = document.createTextNode(arr[i]);
        var tab1 = document.getElementById("add1");
        while(tab1.hasChildNodes())
        {
        tab1.removeChild(tab1.firstChild);
        }
        tab1.appendChild(chi);
        }