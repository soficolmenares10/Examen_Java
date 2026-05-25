router.get('/reportes/ocupacion', async (req, res) => {

    const { year } = req.query;

    try {

        const [rows] = await pool.query(`
            SELECT 
                MONTH(fecha_ingreso) AS mes,

        `, [year]);

        res.render('reporte-ocupacion', {
            year,
            reporte: rows
        });

    } catch (error) {

        console.log(error);

        res.status(500).send('Error al generar reporte');
    }
});

