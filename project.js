let listaCarros = [
    {
        "nome": "BYD YUAN",
        "img": "img/BYD YUAN.jpeg",
        "descricao": "O Yuan Pro é o novo SUV compacto da BYD, elétrico, e chega em versão única com bateria de 45 kWh de capacidade. Seu motor elétrico fica no eixo dianteiro e gera 177 cv e 29,6 kgfm, e é alimentado por uma bateria de 45,1 kWh, que permite até 250 km de autonomia. Sua transmissão é automática de 1 velocidade. O Yuan Pro 2025 mede 4310 mm de comprimento, 1830 mm de largura, 1675 mm de altura e 2620 mm de entre-eixos, com porta-malas de 265 litros."
    },
    {
        "nome": "CHEVROLET TRACKER",
        "img": "img/CHEVROLET TRACKER.jpeg",
        "descricao": "Novo Tracker Premier 1.2 2025, Comprimento: 4.270 mm, Altura: 1.624 mm, Largura: 1.791 mm, Entre-eixos: 2.570 mm, Motorização: 1.2 Turbo, Potência (Gasolina): 116 cv, Torque (Gasolina): 16,3 kgf.m, Aceleração 0-100 km/h: 10,9 s, Consumo Cidade (Gasolina): 11,2 km/l"
    },
    {
        "nome": "JEEP COMPASS",
        "img": "img/JEEP COMPASS.jpeg",
        "descricao": "O motor T270 é 1.3 turbo flex de 185 cv e 27,5 kgfm com etanol e 180 cv e o mesmo torque com gasolina, e o TD350 é 2.0 turbo diesel de 170 cv e 38,7 kgfm e o novo Hurricane é 2.0 turbo de 272 cv e 40,8 kgfm. O T270 é acoplado a uma transmissão automática de 6 velocidades com tração dianteira e os 2.0 a uma de 9 com tração integral. O Compass 2025 mede 4404 mm de comprimento, 1819 mm de largura, 1632 mm de altura e 2636 mm de entre-eixos, com porta-malas de 410 litros."
    },
    {
        "nome": "JEEP RENEGADE",
        "img": "img/JEEP RENEGADE.jpeg",
        "descricao": "O Renegade chega ao ano-modelo 2025 com as novas versões Altitude, Night Eagle, Sahara e Willys, sem as versões Sport e S e com novos equipamentos. Seu motor é I4 1.3 turbo flex de 185 cv e 27,5 kgfm com etanol e 180 cv e o mesmo torque com gasolina, com transmissão automática de 6 velocidades ou 9 com tração integral. O Renegade 2025 mede 4268 mm de comprimento, 1805 mm de largura, 1696 mm de altura e 2570 mm de entre-eixos, com porta-malas de 320 litros."
    },
    {
        "nome": "TOYOTA SW4",
        "img": "img/TOYOTA SW4.jpeg",
        "descricao": "SRX Platinum 7 lugares, Motor:2.8L Diesel D-4D 16V Turbo, Potência:204/3.400 (cv/rpm), Torque:50,9 / 2.800 (kgf.n / rpm), Tração 4X4, Automática de 6 velocidades sequencial com paddle shift"
    },
    {
        "nome": "VOLVO XC40",
        "img": "img/VOLVO XC40.jpeg",
        "descricao": "Motor: Twin Engine, Aceleração 0 - 100 km/h: 4,8 s, Potência: 413 cv, Torque máximo: 670 Nm, Autonomia: 500 km - WLTP, Capacidade da bateria: 78 kWh, Velocidade máxima: 180 km/h, Tração: Integral, Direção: Elétrica, Pneus: 235/45 R20,Capacidade do Porta-malas: 452 litros."
    }
]

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards")
    cardCarro.innerHTML += `
                <div class="col-md-4">
                <div class="card m-3">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${carro.nome}</h5>
                      <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                </div>
    `
    console.log(posicao)
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();

}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema==="dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-sun-fill" >`
    }
}