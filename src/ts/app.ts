(() => {
    'use strict'

    document.addEventListener('DOMContentLoaded', () => {
        topo()
    })


    const topo = () => {
        const $topoLugares:HTMLElement | null = document.querySelector('.js-topo-lugares')

        sombraAdicionar()


        // funcoes
        function sombraAdicionar() {
            addEventListener('scroll', () => {

                if (scrollY >= 10) {
                    $topoLugares?.classList.remove('md:shadow-none')
                    $topoLugares?.classList.add('shadow-md', 'transition-shadow')
                }
                else {
                    $topoLugares?.classList.add('md:shadow-none')
                    console.log('LUCAS BALBINO')
                }
            })
        }
    }
})()