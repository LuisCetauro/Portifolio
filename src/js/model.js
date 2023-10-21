//projects
var project_1 = [
    "src/img/project1/img1.png",
    "src/img/project1/img2.png",
    "src/img/project1/img3.png",
    "src/img/project1/img4.png",
    "src/img/project1/img5.png",  
];
var project_2 = [
    "src/img/project2/img1.png",
    "src/img/project2/img2.png",
    "src/img/project2/img3.png",
    "src/img/project2/img4.png",
    "src/img/project2/img5.png",
];
var project_3 = [
    "src/img/project3/img1.png",
    "src/img/project3/img2.png",
];
var project_4 = [
    "src/img/project4/img1.png",
    "src/img/project4/img2.png",
    "src/img/project4/img3.png",
];

var contacts = [
    "+556192575574", 
    "cetaurot@gmail.com" 
];

//variable start
var project1index = 0; 

var project2index = 0; 

var project3index = 0; 

var project4index = 0; 


//texts
var project1text = "Um site de streaming baseado no netflix.Feito com HTML, CSS, JavaScript, com ênfase no uso de jQuery, manipulação do DOM e eventos para criar uma interface interativa que permite aos usuários ter acesso ao conteudo geral e seu conteudo específico.";
var project2text = "Um quiz com diferentes dificuldades.";
var project3text = "Uma simples calculatora feita utilizando o flutter apenas com intuito de me familiarizar com a plataforma.";
var project4text = "Este projeto envolve a criação de um website para a fictícia Clínica Serenidade Mental, com o objetivo de oferecer uma presença online para a clínica e divulgar informações sobre seus serviços, equipe e abordagem terapêutica, proporcionando  uma pequena interação com o usuário.";



//p1
function showproject1() {
    var fristimage1 = $("#shown-image1");
    fristimage1.attr("src", project_1[project1index]);
    var text1 = document.getElementById("shown-text1");
    text1.textContent = project1text;   
}
function project1next() {
    if (project1index < project_1.length - 1) {
        project1index++;
    } else {
        project1index = 0;
    }
    showproject1();
}
function project1before() {
    if (project1index > 0) {
        project1index--;
    } else {
        project1index = project_1.length - 1;
    }
    showproject1();
}


//p2
function showproject2() {
    var fristimage1 = $("#shown-image2");
    fristimage1.attr("src", project_2[project2index]);
    var text1 = document.getElementById("shown-text2");
    text1.textContent = project2text;
}
function project2next() {
    if (project2index < project_2.length - 1) {
        project2index++;
    } else {
        project2index = 0;
    }
    showproject2();
}
function project2before() {
    if (project2index > 0) {
        project2index--;
    } else {
        project2index = project_2.length - 1;
    }
    showproject2();
}

//p3
function showproject3() {
    var fristimage1 = $("#shown-image3");
    fristimage1.attr("src", project_3[project3index]);
    var text1 = document.getElementById("shown-text3");
    text1.textContent = project3text;
}

function project3next() {
    if (project3index < project_3.length - 1) {
        project3index++;
    } else {
        project3index = 0;
    }
    showproject3();
}
function project3before() {
    if (project3index > 0) {
        project3index--;
    } else {
        project3index = project_3.length - 1;
    }
    showproject3();
}


//p4

function showproject4() {
    var fristimage1 = $("#shown-image4");
    fristimage1.attr("src", project_4[project4index]);
    var text1 = document.getElementById("shown-text4");
    text1.textContent = project4text;
}

function project4next() {
    if (project4index < project_4.length - 1) {
        project4index++;
    } else {
        project4index = 0;
    }
    showproject4();
}
function project4before() {
    if (project4index > 0) {
        project4index--;
    } else {
        project4index = project_4.length - 1;
    }
    showproject4();
}


//contact
function transfer(index) {
    const info = contacts[index];   
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = info;
  
    document.body.appendChild(input);
    
    input.select();
  
    document.execCommand('copy');

    const confirm = document.getElementById('confirm');
    confirm.style.display = 'block';

    setTimeout(function () {
        confirm.style.display = 'none';
    }, 1300);
    
}
