new Chart(document.getElementById("grafico 1"), {
                type: "pie",
                labels: ["Diseño","Visual y Medios","Industrial y Servicios"],
	            datasets: [{
					label: "MENCIONES DE TITULADOS 2023 - 2025",
					data: [43, 165, 126]
					backgroundColor: [
						'#ffcd56', // Amarillo
                        '#ff9f40', // Naranja
                        '#4bc0c0'  // Verde agua
						],
				    borderWidth: 2,
                    borderColor: '#ffffff' // Línea divisoria blanca entre porciones
                        }]
                        };
					
			
			const nombresUniversidades = {
    "PUC": "PONTIFICIA UNIVERSIDAD CATOLICA DE CHILE",
    "PUCV": "PONTIFICIA UNIVERSIDAD CATOLICA DE VALPARAISO",
    "UAI": "UNIVERSIDAD ADOLFO IBAÑEZ",
    "UNAB": "UNIVERSIDAD ANDRES BELLO",
    "UACh": "UNIVERSIDAD AUSTRAL DE CHILE",
    "UBO": "UNIVERSIDAD BERNARDO O'HIGGINS",
    "UCT": "UNIVERSIDAD CATOLICA DE TEMUCO",
    "UA": "UNIVERSIDAD DE ANTOFAGASTA",
    "UNIACC": "UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION - UNIACC",
    "UCH": "UNIVERSIDAD DE CHILE",
    "ULS": "UNIVERSIDAD DE LA SERENA",
    "UDLA": "UNIVERSIDAD DE LAS AMERICAS",
    "UPLA": "UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION",
    "USACH": "UNIVERSIDAD DE SANTIAGO DE CHILE",
    "UTALCA": "UNIVERSIDAD DE TALCA",
    "UTA": "UNIVERSIDAD DE TARAPACA",
    "UV": "UNIVERSIDAD DE VALPARAISO",
    "UVM": "UNIVERSIDAD DE VIÑA DEL MAR",
    "UBB": "UNIVERSIDAD DEL BIO-BIO",
    "UDD": "UNIVERSIDAD DEL DESARROLLO",
    "UDP": "UNIVERSIDAD DIEGO PORTALES",
    "UFT": "UNIVERSIDAD FINIS TERRAE",
    "UGM": "UNIVERSIDAD GABRIELA MISTRAL",
    "UMAYOR": "UNIVERSIDAD MAYOR",
    "USM": "UNIVERSIDAD TECNICA FEDERICO SANTA MARIA",
    "UTEM": "UNIVERSIDAD TECNOLOGICA METROPOLITANA"
};
			new Chart(document.getElementById("barras apiladas"), {
                type: "bar",
                data: {
                    labels: ["PUC", "PUCV", "UAI", "UNAB", "UNAB", "UNAB", "UNAB", "UACh", "UBO", "UCT", "UA", "UNIACC", "UNIACC", "UNIACC", "UNIACC", "UCH", "UCH", "ULS", "UDLA", "UPLA", "USACH", "USACH", "UTALCA", "UTA", "UV", "UVM", "UBB", "UBB", "UDD", "UDD", "UDD", "UDP", "UFT", "UFT", "UFT", "UGM", "UGM", "UGM", "UGM", "UGM", "UMAYOR", "USM", "USM", "USM", "UTEM", "UTEM"],
                    
                    datasets: [
              				   {
                                label: 'Costo Total por Arancel',
                                data: [40400000, 34575000, 29264076, 20276000, 28544000, 28592000, 28260000, 29435000, 29500000, 26380000, 25600000, 18320000, 16840000, 16120000, 16840000, 32433500, 27462000, 20355000, 23650000, 21525000, 32760000, 24945000, 29435000, 26220000, 28565000, 21385000, 21535000, 22170000, 10364360, 48773460, 30280190, 37985000, 36600000, 36600000, 14400000, 14442000, 24070000, 24070000, 24070000, 24070000, 36071090, 30000000, 30000000, 20720000, 23816500, 24455000],
                                backgroundColor: "rgba(241,142,45,.75)",
                                borderColor: "rgba(245,142,45, 1)",
                                borderWidth: 1
                               },
           				       {
                                label: 'Costo de Titulacion',
                                data: [0, 134700, 81289, 0, 0, 0, 0, 285000, 452023, 138753, 490000, 400000, 400000, 400000, 400000, 0, 0, 0, 384000, 218000, 416000, 416000, 258700, 205000, 184000, 88100, 80000, 80000, 0, 40645, 40645, 318000, 371289, 335289, 364000, 481000, 454000, 454000, 454000, 454000, 250000, 129000, 129000, 129000, 215500, 215500],
                                backgroundColor: "rgba(0,162,235,.75)",
                                borderColor: "rgba(0,162,235, 1)",
                                borderWidth: 1
                               },
							 ] 
					},
                        
           options: {
			  responsive: true,
			  maintainAspectRatio: false,
              scales: {
                   x: {
                       stacked: true,
					   ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                }
                      },
                   y: {
					   stacked: true,
					   ticks: {
                           beginAtZero: true,
						   font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
									}
                              }
					  }
                     },
                    
					
			plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
					title: function(context) {
                           const sigla = context[0].label;
                           return nombresUniversidades[sigla] || sigla;
                          },
                    label: function (context) {
                        let tipoCosto = context.dataset.label || ''; 
                        let valor = context.raw;
                        return tipoCosto + ": $ " + valor.toLocaleString("es-CL");
                    },
                }
            }
        }
      }
    });
