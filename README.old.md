# doctor-todos

# API

# @ GET https://us-central1-rehabilitation-project.cloudfunctions.net/patients

    - не принимает body,
    - возвращает список всех пациентов,
    - при ошибке возвращает статус 500 и пустой объект

# @ GET https://us-central1-rehabilitation-project.cloudfunctions.net/patients/:id

    - не принимает body,
    - возвращает объект одного пациента,
    - при ошибке возвращает статус 500 и пустой объект

# @ POST https://us-central1-rehabilitation-project.cloudfunctions.net/patients

    - принимает body,
    - возвращает объект созданого пациента,
    - при ошибке возвращает статус 500 и пустой объект

# @ DELETE https://us-central1-rehabilitation-project.cloudfunctions.net/patients/:id

    - не принимает body,
    - возвращает сообщение что объект удален,
    - при ошибке возвращает статус 500 и пустой объект

# @ PUT https://us-central1-rehabilitation-project.cloudfunctions.net/patients/:id

    - принимает body с измененными 1 иди больше полями,
    - возвращает объект обновленного пациента,
    - при ошибке возвращает статус 500 и пустой объект
