/*-----------
a = (v-u)/t
-----------*/


// Function for getting Elements by their id
const getElementById = (id) => {
    const item = document.getElementById(id);
    return item;
};

const displayFormulas = (formula,id) => {
    const showFormula = getElementById('show-formula');
    if(formula===1){
        showFormula.innerHTML = `
            <h1 style="text-align: center;">a = (v-u)/t</h1>
            <button id="a1">a = (v-u)/t</button>
            <button id="t1">t = (v-u)/a</button>
            <button id="u1">u = v-at</button>
            <button id="v1">v = u+at</button>
        `;
    }
    else if(formula===2){
        showFormula.innerHTML = `
            <h1 style="text-align: center;">s = {(u+v)/2}t</h1>
            <button id="s2">s = {(u+v)/2}t</button>
            <button id="t2">t = (u+v)/2s</button>
            <button id="u2">u = 2st-v</button>
            <button id="v2">v = 2st-u</button>
        `;
    }
    else if(formula===3){
        showFormula.innerHTML = `
            <h1 style="text-align: center;">s = ut+&#189at<sup>2</sup></h1>
            <button id="s3">s = ut+&#189at<sup>2</sup></button>
            <button id="u3">u = (s/t) - &#189at</button>
            <button id="a3">a = {2(s-ut)}/t<sup>2</sup></button>
            <button id="t3">UNDER CONSTRUCTION</button>
        `;
    }
    else if(formula===4){
        showFormula.innerHTML = `
            <h1 style="text-align: center;">v<sup>2</sup> = u<sup>2</sup> + 2as</h1>
            <button id="v4">v = &#8730(u<sup>2</sup> + 2as)</button>
            <button id="u4">u = &#8730(v<sup>2</sup>-2as)</button>
            <button id="a4">a = (v<sup>2</sup>-u<sup>2</sup>)/2s</button>
            <button id="s4">s = (v<sup>2</sup>-u<sup>2</sup>)/2a</button>
        `;
    };
    //Getting ID's of buttons from FROMULA 1
    if(formula===1 && id==='a1'){
        const a1 = document.getElementById('a1');
        return a1;
    }
    else if(formula===1 && id==='t1'){
        const t1 = document.getElementById('t1');
        return t1;
    }
    else if(formula===1 && id==='u1'){
        const u1 = document.getElementById('u1');
        return u1;
    }
    else if(formula===1 && id==='v1'){
        const v1 = document.getElementById('v1');
        return v1;
    }
    //Getting ID's of buttons from FROMULA 2
    if(formula===2 && id==='s2'){
        const s2 = document.getElementById('s2');
        return s2;
    }
    else if(formula===2 && id==='t2'){
        const t2 = document.getElementById('t2');
        return t2;
    }
    else if(formula===2 && id==='u2'){
        const u2 = document.getElementById('u2');
        return u2;
    }
    else if(formula===2 && id==='v2'){
        const v2 = document.getElementById('v2');
        return v2;
    }
    //Getting ID's of buttons from FROMULA 3
    if(formula===3 && id==='s3'){
        const s3 = document.getElementById('s3');
        return s3;
    }
    else if(formula===3 && id==='u3'){
        const u3 = document.getElementById('u3');
        return u3;
    }
    else if(formula===3 && id==='a3'){
        const a3 = document.getElementById('a3');
        return a3;
    }
    else if(formula===3 && id==='t3'){
        const t3 = document.getElementById('t3');
        return t3;
    }
    //Getting ID's of buttons from FROMULA 4
    if(formula===4 && id==='v4'){
        const v4 = document.getElementById('v4');
        return v4;
    }
    else if(formula===4 && id==='u4'){
        const u4 = document.getElementById('u4');
        return u4;
    }
    else if(formula===4 && id==='a4'){
        const a4 = document.getElementById('a4');
        return a4;
    }
    else if(formula===4 && id==='s4'){
        const s4 = document.getElementById('s4');
        return s4;
    }
};



/* const addFormula = (id,formula) => {
    getElementById(id).addEventListener('click',() => {
            document.getElementById('display').innerHTML = `
                <h1>${formula}</h1>
            `;
    });
}; */

/* addFormula('a1', 'a = (v-u)/t');
addFormula('t1', 't = (v-u)/a');
addFormula('u1', 'u = v-at');
addFormula('v1', 'v = u+at');
 */

// Function for solving the given equation
const calculate = (equation) => {
    const a = parseFloat(getElementById('a').value);
    const t = parseFloat(getElementById('t').value);
    const u = parseFloat(getElementById('u').value);
    const v = parseFloat(getElementById('v').value);
    
    //-------------------Formula 1---------------------//
    if(equation===1){  //'a = (v-u)/t'//
        let showAnswer = getElementById('answer');
        const answer = (v-u)/t;
        showAnswer.innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='t = (v-u)/a'){
        const answer = (v-u)/a;
        getElementById('answer').innerHTML=`${answer}`;
    }
    else if(equation==='u = v-at'){
        const answer = v-(a*t);
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='v = u+at'){
        const answer = u+(a*t);
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    
    //--------------------Formula-2----------------//
    else if(equation==='s = {(u+v)/2}t'){
        const answer = ((u+v)/2)*t;
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='t = (u+v)/2s'){
        const answer = (u+v)/2*s;
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='u = 2st-v'){
        const answer = (2*s*t)-v;
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='v = 2st-u'){
        const answer = (2*s*t)-u;
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    //--------------------Formula-3----------------//
    else if(equation==='s = {(u+v)/2}t'){
        const answer = ((u+v)/2)*t;
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='t = (u+v)/2s'){
        const answer = (u+v)/2*s;
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='a = {2(s-ut)}/tSquare'){
        const answer = (2(s-u*t))/(t*t);
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='v = 2st-u'){
        const answer = (2*s*t)-u;
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    //--------------------Formula-4----------------//
    else if(equation==='v = rootOver(uSquare+2as)'){
        const answer = Math.sqrt((u*u)+2*a*s);
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='u = rootOver(vSquare-2as)'){
        const answer = Math.sqrt((v*v)-2*a*s);
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='a = (vSquare-uSquare)/2s'){
        const answer = ((v*v)-(u*u))/2*s;
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    }
    else if(equation==='s = (vSquare-uSquare)/2a'){
        const answer = ((v*v)-(u*u))/2*a;
        getElementById('answer').innerHTML=`
            <h1>${answer}</h1>
        `;
    };
};

// Adding event listeners to every button
// answer = (id,equation) //
//formula1 = a1,t1,u1,v1
//formula2 = s2,t2,u2,v2
//formula3 = s3,u3,a3,t3
//formula4 = v4,u4,a4,s4

const eventListenerAdder = (id,equation) => {
    id.addEventListener('click', calculate(equation));
}

const a1 = displayFormulas(1,'a1').id;
const a1Btn = document.getElementById(a1);
eventListenerAdder(a1Btn,1);

