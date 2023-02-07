/// <reference types="Cypress"/>

describe('Onde usar meu VR', function() {
    beforeEach(function() {
        //acessando o site do VR
        cy.visit('http://www.vr.com.br/')
        //aceitando os cookies
        cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click()
        
})
    it('Onde usar meu VR?', function() { 
        //click menu
        cy.get('.vr-menu-trigger--open > .vr-menu-trigger__icon > path').click()
        //seta expandir o menu
        cy.get(':nth-child(3) > .vr-main-navigation__submenu-trigger > .vr-main-navigation__trigger-arrow').click()
        //opcao onde usar meu VR
        cy.get(':nth-child(3) > .vr-main-navigation__submenu > :nth-child(2) > .vr-main-navigation__sublink').click()
        //localizar iframe, button para validação do mapa
        cy.get(':nth-child(3) > .vr-main-navigation__submenu-trigger > .vr-main-navigation__trigger-arrow').click({force: true})
        cy.get(':nth-child(3) > .vr-main-navigation__submenu > :nth-child(2) > .vr-main-navigation__sublink').click({force: true})
        cy.get('#buttonFiltrar')
        .should('to.exist')
        cy.get('iframe')
        .should('to.exist')

  })

})
