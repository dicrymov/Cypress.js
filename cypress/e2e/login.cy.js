describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пороль

        cy.get('#mail').type('german@dolnikov.ru'); // Нашли поле логин и ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon') // Есть крестик и он виден пользователю
    })
   it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пороль

        cy.get('#forgotEmailButton').click(); // Нажал забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю что после отправки вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon') // Есть крестик и он виден пользователю
    })
    it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пороль

        cy.get('#mail').type('german@dolnikov.ru'); // Нашли поле логин и ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon') // Есть крестик и он виден пользователю
    })
    it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пороль

        cy.get('#mail').type('germa@dolnikov.ru'); // Нашли поле логин и ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon') // Есть крестик и он виден пользователю
    })
    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пороль

        cy.get('#mail').type('germandolnikov.ru'); // Нашли поле логин и ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon') // Есть крестик и он виден пользователю
    })
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пороль

        cy.get('#mail').type('gerMan@dolnikov.ru'); // Нашли поле логин и ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon') // Есть крестик и он виден пользователю
    })
})