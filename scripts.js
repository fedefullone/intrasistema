function agregarDatos() {
    // Capturar valores del Formulario 1 (Todos)
    const totalesTodos = parseInt(document.getElementById('totalesTodos').value) || 0;
    const ambaTodos = parseInt(document.getElementById('ambaTodos').value) || 0;
    const interiorTodos = parseInt(document.getElementById('interiorTodos').value) || 0;
    const demoradosTodos = parseInt(document.getElementById('demoradosTodos').value) || 0;
    const porcentajeDemoradosTodos = (totalesTodos > 0) ? (demoradosTodos / totalesTodos * 100).toFixed(2) : 0;

    // Capturar valores del Formulario 2 (Amba)
    const totalesAmba = parseInt(document.getElementById('totalesAmba').value) || 0;
    const demoradosAmba = parseInt(document.getElementById('demoradosAmba').value) || 0;
    const aclaracionAmba = parseInt(document.getElementById('aclaracionAmba').value) || 0;
    const porcentajeDemoradosAmba = (totalesAmba > 0) ? (demoradosAmba / totalesAmba * 100).toFixed(2) : 0;

    // Capturar valores del Formulario 3 (Interior)
    const totalesInterior = parseInt(document.getElementById('totalesInterior').value) || 0;
    const demoradosInterior = parseInt(document.getElementById('demoradosInterior').value) || 0;
    const aclaracionInterior = parseInt(document.getElementById('aclaracionInterior').value) || 0;
    const porcentajeDemoradosInterior = (totalesInterior > 0) ? (demoradosInterior / totalesInterior * 100).toFixed(2) : 0;

    // Capturar valores del Formulario 4 (En Tránsito)
    const totalesTransito = parseInt(document.getElementById('totalesTransito').value) || 0;
    const ambaTransito = parseInt(document.getElementById('ambaTransito').value) || 0;
    const interiorTransito = parseInt(document.getElementById('interiorTransito').value) || 0;
    const demoradosTransito = parseInt(document.getElementById('demoradosTransito').value) || 0;
    const aclaracionTransito = parseInt(document.getElementById('aclaracionTransito').value) || 0;
    const porcentajeDemoradosTransito = (totalesTransito > 0) ? (demoradosTransito / totalesTransito * 100).toFixed(2) : 0;



    // Guardar los datos en localStorage para redirigir a la página de resultados
    const datos = {
        todos: { totalesTodos, ambaTodos, interiorTodos, demoradosTodos, porcentajeDemoradosTodos },
        amba: { totalesAmba, demoradosAmba, aclaracionAmba, porcentajeDemoradosAmba },
        interior: { totalesInterior, demoradosInterior, aclaracionInterior, porcentajeDemoradosInterior },
        transito: { totalesTransito, ambaTransito, interiorTransito, demoradosTransito, aclaracionTransito, porcentajeDemoradosTransito }
    };

    localStorage.setItem('datos', JSON.stringify(datos));
    window.location.href = 'resultados.html';
}
