import { useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [nif, setNIF] = useState(0)
    const [email, setMail] = useState(null)
    const [social, setSocial] = useState(null)
    const [message, setMessage] = useState({ message: null, type: false })

    const getNIF = (e: string) => {
        if (e.length === 9) {
            axios.get(`/api/nif?value=${e}`).then((company) => {
                setNIF(Number(e))
                setSocial(company.data.name)
            })
        }
    }
    const Register = async (event) => {
        event.preventDefault()
        if (
            social &&
            nif &&
            email.length > 0 &&
            email.includes('@') &&
            email.includes('.') &&
            email.length > 5
        ) {
            axios
                .post('/api/register', { email, nif, social })
                .then((result) => {
                    if (result.data.exists) {
                        setMessage({
                            message: 'O comerciante já se encontra registado.',
                            type: false
                        })
                    } else if (result.data.result) {
                        setMessage({
                            message: 'O comerciante foi registado com sucesso.',
                            type: true
                        })
                    } else {
                        setMessage({
                            message: 'Não foi possível registar o comerciante.',
                            type: false
                        })
                    }
                })
        } else {
            setMessage({
                message: 'Por favor, preencha todos os campos.',
                type: false
            })
        }
    }
    return (
        <body className='antialiased bg-body text-body font-body'>
            <section className='relative py-24 h-screen flex flex-wrap content-center'>
                <img
                    className='hidden lg:block absolute top-0 right-0 w-2/5 h-full object-cover clip-path-left'
                    src='/local.jpg'
                />
                <div className='relative container px-4 mx-auto'>
                    <div className='flex flex-wrap items-center -mx-4'>
                        <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0'>
                            <div className='max-w-lg'>
                                <h2 className='mb-10 text-4xl font-bold font-heading text-blue-800'>
                                    O MOMENTO É AGORA DE FAZER PARTE DO COMÉRCIO
                                    LOCAL
                                </h2>
                                <p className='text-lg text-gray-500'>
                                    Pode fazer parte do comércio local
                                    preenchendo o formulário que se segue. Ajude
                                    a impulsionar a sua cidade.
                                </p>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 px-4'>
                            <div className='p-6 lg:p-16 bg-white'>
                                <form onSubmit={Register}>
                                    <span className='inline-block uppercase text-blue-400 font-semibold tracking-widest'>
                                        REGISTAR-SE
                                    </span>
                                    <h3 className='mb-4 text-2xl font-bold font-heading text-blue-800'>
                                        FAÇA PARTE DO PROJETO
                                    </h3>
                                    <input
                                        className='block w-full py-4 pl-6 mb-2 text-sm placeholder-blue-400 text-blue-400 bg-blue-50'
                                        type='email'
                                        name='email'
                                        placeholder='Endereço Email'
                                        onChange={(e) =>
                                            setMail(e.target.value)
                                        }
                                    />
                                    <input
                                        className='block w-full py-4 pl-6 mb-2 text-sm placeholder-blue-400 text-blue-400 bg-blue-50'
                                        type='text'
                                        name='nif'
                                        maxLength={9}
                                        size={9}
                                        onChange={(e) => {
                                            getNIF(e.currentTarget.value)
                                        }}
                                        placeholder='Número Identificação Fiscal'
                                    />
                                    <input
                                        className='block w-full py-4 pl-6 mb-2 text-sm placeholder-blue-400 text-blue-400 bg-gray-70'
                                        type='text'
                                        name='merchant-social-name'
                                        disabled
                                        value={social}
                                        placeholder='Denominação Social'
                                    />
                                    <label
                                        className={`${
                                            message.message ? 'block' : 'hidden'
                                        } line-flex mb-4 text-left`}
                                    >
                                        <i
                                            className={`${
                                                message.type
                                                    ? 'text-green-500'
                                                    : 'text-red-500'
                                            } mr-2 fas fa-times`}
                                        ></i>
                                        <span
                                            className={`${
                                                message.type
                                                    ? 'text-green-400'
                                                    : 'text-red-400'
                                            } -mt-1 inline-block text-sm`}
                                        >
                                            {message.message}
                                        </span>
                                    </label>
                                    <label className='inline-flex mb-4 text-left'>
                                        <input
                                            className='mr-2'
                                            type='checkbox'
                                            name='terms'
                                            value='1'
                                            required
                                        />
                                        <span className='-mt-1 inline-block text-sm text-gray-500'>
                                            Concordo com os{' '}
                                            <a
                                                className='text-blue-400 hover:underline'
                                                href='#'
                                            >
                                                Termos, Políticas de Privacidade
                                            </a>{' '}
                                            e{' '}
                                            <a
                                                className='text-blue-400 hover:underline'
                                                href='#'
                                            >
                                                Política de Cookies
                                            </a>
                                            .
                                        </span>
                                    </label>
                                    <button
                                        type='submit'
                                        className='w-full inline-block mb-4 py-5 text-sm text-blue-800 uppercase font-bold bg-white border-2 border-blue-700 hover:text-white hover:bg-blue-800 transition duration-200'
                                    >
                                        REGISTAR-SE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}
