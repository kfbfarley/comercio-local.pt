export default function Home() {
    return (
        <body className='antialiased bg-body text-body font-body'>
            <div>
                <section className='relative py-24 h-screen flex flex-wrap content-center'>
                    <div className='container px-4 mx-auto p-10'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <span className='text-blue-400 font-semibold uppercase tracking-widest'>
                                COMÉRCIO-LOCAL.PT
                            </span>
                            <h2 className='mt-8 mb-6 text-4xl lg:text-5xl font-bold text-blue-800'>
                                O COMÉRCIO LOCAL AINDA ESTÁ EM BETA, MAS PODE
                                REGISTAR-SE
                            </h2>
                            <p className='max-w-3xl mx-auto mb-10 text-lg text-gray-500'>
                                COMERCIANTES QUE TENHAM INTERESSE EM REGISTAR NA
                                PLATAFORMA, PARA PODEREM FAZER PARTE DO PROJETO
                                PODEM FAZÊ-LO A PARTIR DO BOTÃO ABAIXO, OU LEIA
                                MAIS SOBRE O QUE SEREMOS PARA PORTUGAL.
                            </p>
                            <a
                                className='inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-blue-800 hover:bg-white hover:border-blue-700 hover:text-blue-800 text-white transition duration-200'
                                href='/registar'
                            >
                                QUERO SER BETA
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    )
}
