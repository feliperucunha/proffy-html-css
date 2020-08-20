const sql = require('./db')
const createProffy = require('./createProffy')

sql.then(async(db) => {

    proffyValue = {
        name: "Felipe Cunha",
        avatar: "https://avatars0.githubusercontent.com/u/51034888?s=460&u=d957f24c0607b08051d57bd562e17db9cf811421&v=4",
        whatsapp: "91981282907",
        bio: "Oi, vim te dar umas aulas"
    }

    classValue = {
        subject: "1",
        cost: "30"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0 ,
            time_from: 720,
            time_to: 1220
        }
    ]

    //cria as tabelas e armazea os proffys vigentes
    //await createProffy(db, {proffyValue, classScheduleValues, classValue})

    //armazena os itens do db nessa variável
    const selectedProffys = await db.all("SELECT * FROM proffys")

    //junta classe com dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //criando expediente viável (8~18h)
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule'
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "1300"
    `)
})