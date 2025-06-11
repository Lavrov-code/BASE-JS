const sensors = {
    56: {
        sensor_id: 56,
        sensor_title: "Lamp-56",
        date_manufactured: "2020-04-10", // дата изготовления
        storage_period: "240", // 240 - месяцы хранения
        act: [
            {
                act_id: 567, //id акта
                date_planned: "2021-08-08", // на какую дату запланирована проверка
                date_created: "2021-06-10", // дата создания акта
                act_type_id: 17, // id актов
                act_type_title: "Метрология",
                date_start: "2021-08-08", // Дата фактического. Проведения метрологии
                date_end: "2022-08-08", // Дата окончания метрологии
                period_action: 12, // Период акта
            },
            {
                act_id: 222, //id акта
                date_planned: "2022-07-08", // на какую дату запланирована проверка
                date_created: "2020-06-10", // Дата создания акта
                act_type_id: 2, // id актов
                act_type_title: "акт вывода в эксплуатацию",
                date_start: "2022-07-08", // Дата фактического вывода в эксп
                date_end: "2023-07-08", // Дата окончания эксплуатации
                period_action: 12, // Период акта
            },
            {
                act_id: 2233, //id акта
                date_planned: "2022-06-08", // на какую дату запланирована проверка
                date_created: "2021-06-10", // Дата создания акта
                act_type_id: 1, // id актов
                act_type_title: "акт ввода в эксплуатацию",
                date_start: "2022-06-08", // Дата фактического ввода в эксп
                date_end: "2023-06-08", // Дата окончания эксплуатации
                period_action: 12, // Период акта
            },
            {
                act_id: 333, //id акта
                date_planned: "2021-08-08", // на какую дату запланирована проверка
                date_created: "2021-05-10", // Дата создания акта
                act_type_id: 8, // id актов
                act_type_title: "Акт проведения ТО",
                date_start: "2021-08-08", // Дата фактического. Проведения ТО
                date_next_maintenance: "2021-09-08", // Дата окончания ТО
                period_action: 1, // Период акта
            },
            {
                act_id: 555, //id акта
                date_planned: "2019-09-10", // на какую дату запланирована проверка
                date_created: "2019-06-10", // Дата создания акта
                act_type_id: 3, // id актов
                act_type_title: "Экспертиза промышленной безопасности",
                date_start: "2019-09-10", // Дата фактического. Проведения ЭПБ
                date_next_maintenance: "2024-09-10", // Дата окончания ЭПБ
                period_action: 60, // Период акта
            }
        ]
    },

}
function calcPlannedActs(){
    let acts = {};
    for (let sensorId in sensors){
        let sensor = sensors[sensorId];
        for (let actIdx in sensor.acts){
            let act = sensor.acts[actIdx];
            let dateStart = new Date(act.date_start);
            let period = act.period_action;

            console.log("Дата начала:", dateStart);


            let plannedActs = []; // Массив для хранения запланированных актов
            for (let i = 0; i < 4; i++) { // создал цикл for добавил в массив даты
                let newDate = new Date(dateStart);
                newDate.setDate(dateStart.getDate() + i * 1); // прибавляю 1 месяц на каждом шаге
                plannedActs.push(newDate); // использует метод push() для добавления элемента newDate в массив plannedActs
            }

            // Вывод дат
            plannedActs.forEach(date => {
                console.log("Запланированная дата:", date.toLocaleDateString()); // toLocaleDateString метод для преобразования объекта "Date" в строку вывод даты
            });

            console.log();
        }
    }
    console.log(acts);
}

calcPlannedActs();
