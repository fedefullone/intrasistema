document.addEventListener('DOMContentLoaded', () => {
    const datos = JSON.parse(localStorage.getItem('datos'));

    // Mostrar los resultados en los cuadros
    document.getElementById('totalesTodosResult').innerText = datos.todos.totalesTodos;
    document.getElementById('ambaTodosResult').innerText = datos.todos.ambaTodos;
    document.getElementById('interiorTodosResult').innerText = datos.todos.interiorTodos;
    document.getElementById('demoradosTodosResult').innerText = datos.todos.demoradosTodos;
    document.getElementById('porcentajeDemoradosTodos').innerText = datos.todos.porcentajeDemoradosTodos;

    document.getElementById('totalesAmbaResult').innerText = datos.amba.totalesAmba;
    document.getElementById('demoradosAmbaResult').innerText = datos.amba.demoradosAmba;
    document.getElementById('aclaracionAmbaResult').innerText = datos.amba.aclaracionAmba;
    document.getElementById('porcentajeDemoradosAmba').innerText = datos.amba.porcentajeDemoradosAmba;

    document.getElementById('totalesInteriorResult').innerText = datos.interior.totalesInterior;
    document.getElementById('demoradosInteriorResult').innerText = datos.interior.demoradosInterior;
    document.getElementById('aclaracionInteriorResult').innerText = datos.interior.aclaracionInterior;
    document.getElementById('porcentajeDemoradosInterior').innerText = datos.interior.porcentajeDemoradosInterior;

    document.getElementById('totalesTransitoResult').innerText = datos.transito.totalesTransito;
    document.getElementById('ambaTransitoResult').innerText = datos.transito.ambaTransito;
    document.getElementById('interiorTransitoResult').innerText = datos.transito.interiorTransito;
    document.getElementById('demoradosTransitoResult').innerText = datos.transito.demoradosTransito;
    document.getElementById('aclaracionTransitoResult').innerText = datos.transito.aclaracionTransito;
    document.getElementById('porcentajeDemoradosTransito').innerText = datos.transito.porcentajeDemoradosTransito;



    // Inicialmente ocultar todos los gráficos
    document.querySelectorAll('.chart').forEach(chart => chart.style.display = 'none');

    // Función para mostrar un gráfico
    function mostrarGrafico(idGrafico) {
        const grafico = document.getElementById(idGrafico);
        grafico.style.display = (grafico.style.display === 'none') ? 'block' : 'none';
    }

    // Añadir evento a cada cuadro
    document.getElementById('resultadoTodos').addEventListener('click', () => mostrarGrafico('chartTodos'));
    document.getElementById('resultadoAmba').addEventListener('click', () => mostrarGrafico('chartAmba'));
    document.getElementById('resultadoInterior').addEventListener('click', () => mostrarGrafico('chartInterior'));
    document.getElementById('resultadoTransito').addEventListener('click', () => mostrarGrafico('chartTransito'));

    // Generar gráficos
    new Chart(document.getElementById('chartTodos'), {
        type: 'bar',
        data: {
            labels: ['Totales', 'AMBA', 'INTERIOR', 'Demorados'],
            datasets: [{
                label: 'Todos',
                data: [datos.todos.totalesTodos, datos.todos.ambaTodos, datos.todos.interiorTodos, datos.todos.demoradosTodos],
                backgroundColor: ['#36A2EB','#4BC0C0', '#FF6384', '#FFCE56']
            }]
        }
    });

    new Chart(document.getElementById('chartAmba'), {
        type: 'bar',
        data: {
            labels: ['Totales', 'Demorados'],
            datasets: [{
                label: 'Amba',
                data: [datos.amba.totalesAmba, datos.amba.demoradosAmba],
                backgroundColor: ['#36A2EB', '#FF6384']
            }]
        }
    });

    new Chart(document.getElementById('chartInterior'), {
        type: 'bar',
        data: {
            labels: ['Totales', 'Demorados'],
            datasets: [{
                label: 'Interior',
                data: [datos.interior.totalesInterior, datos.interior.demoradosInterior],
                backgroundColor: ['#FFCE56', '#FF6384']
            }]
        }
    });

    new Chart(document.getElementById('chartTransito'), {
        type: 'bar',
        data: {
            labels: ['Totales', 'AMBA', 'INTERIOR', 'Demorados'],
            datasets: [{
                label: 'En Deposito',
                data: [datos.transito.totalesTransito, datos.transito.ambaTransito, datos.transito.interiorTransito, datos.transito.demoradosTransito],
                backgroundColor: ['#36A2EB', '#FFCE56', '#4BC0C0', '#FF6384']
            }]
        }
    });
});
