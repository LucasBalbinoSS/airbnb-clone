(() => {
    'use strict'

    document.addEventListener('DOMContentLoaded', () => {
        topo()
    })


    const topo = () => {
        const tablet:number = 768
        const $body:HTMLElement | null = document.querySelector('body')
        const $topoLugares:HTMLElement | null = document.querySelector('.js-topo-lugares')
        const $menuperfilOpcoes:HTMLElement | null = document.querySelector('.js-menu-pefil-opcoes')
        const $btnPerfilOpcoes:HTMLButtonElement | null = document.querySelector('.js-btn-perfil-opcoes')
        const $listaMenuOpcoes:HTMLElement | null = document.querySelector('.js-lista-menu-opcoes')
        const $setaVoltarTopo:HTMLElement | null = document.querySelector('.js-seta-voltar-topo')
        const $setaAvancarTopo:HTMLElement | null = document.querySelector('.js-seta-avancar-topo')


        sombraAdicionar()
        perfilOpcoes()
        lugaresPassar()


        // funcoes
        function sombraAdicionar() {
            addEventListener('scroll', () => {

                if (scrollY >= 10) {
                    $topoLugares?.classList.remove('md:shadow-none')
                    $topoLugares?.classList.add('shadow-md', 'transition-shadow')
                }
                else {
                    $topoLugares?.classList.add('md:shadow-none')
                }
            })
        }

        function perfilOpcoes() {
            addEventListener('resize', () => {

                if (innerWidth < tablet) {

                    if (! $menuperfilOpcoes?.classList.contains('hidden')) {
                        esconder($menuperfilOpcoes)
                        $btnPerfilOpcoes?.classList.remove('shadow-md')
                    }
                }
            })

            perfilOpcoesMostrar()
            perfilOpcoesEsconder()


            // funcoes internas
            function perfilOpcoesMostrar() {
                $btnPerfilOpcoes?.addEventListener('click', () => {
                    $menuperfilOpcoes?.classList.toggle('hidden')

                    if (! $menuperfilOpcoes?.classList.contains('hidden')) {
                        $btnPerfilOpcoes?.classList.add('shadow-md')
                    }
                    else {
                        $btnPerfilOpcoes?.classList.remove('shadow-md')
                    }
                })
            }

            function perfilOpcoesEsconder() {
                $body?.addEventListener('click', (evento:any) => {

                    if (evento.target.closest('.js-menu-pefil-opcoes') ||
                     evento.target.closest('.js-btn-perfil-opcoes')) {
                        return
                    }
    
                    esconder($menuperfilOpcoes)

                    if ($menuperfilOpcoes?.classList.contains('hidden')) {
                        $btnPerfilOpcoes?.classList.remove('shadow-md')
                    }
                })
            }
        }

        function lugaresPassar() {
            avancar()
            voltar()


            // funcoes internas
            function avancar() {
                $setaAvancarTopo?.addEventListener('click', () => {

                    if ($listaMenuOpcoes) {
                        $listaMenuOpcoes.scrollBy(600, 0)
                    }
                })
            }

            function voltar() {
                $setaVoltarTopo?.addEventListener('click', () => {

                    if ($listaMenuOpcoes) {
                        $listaMenuOpcoes.scrollBy(-600, 0)
                    }
                })
            }
        }
    }

    function mostrar($alvo:HTMLElement | null) {
        $alvo?.classList.remove('hidden')
    }

    function esconder($alvo:HTMLElement | null) {
        $alvo?.classList.add('hidden')
    }
})()