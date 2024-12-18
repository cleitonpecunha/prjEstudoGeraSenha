'use client'
import { Senha } from 'regras'
import { useEffect, useState } from 'react'
import CaracteristicaSenha from '@/components/CaracteristicaSenha'
import ExibirSenha from '@/components/ExibirSenha'
import ForcaSenha from '@/components/ForcaSenha'
import TamanhoSenha from '@/components/TamanhoSenha'

export default function Home() {
    const [senha, setSenha] = useState('')
    const [minusculas, setMinusculas] = useState(true)
    const [maiusculas, setMaiusculas] = useState(true)
    const [numeros, setNumeros] = useState(true)
    const [simbolos, setSimbolos] = useState(true)
    const [tamanho, setTamanho] = useState(8)

    useEffect(() => {
        setSenha(Senha.gerar({ tamanho, minusculas, maiusculas, numeros, simbolos }))
    }, [tamanho, minusculas, maiusculas, numeros, simbolos])

    return (
        <main className="tela">
            <div className="conteudo">
                <h1 className="titulo">Gerador de Senha - React</h1>
                <ExibirSenha senha={senha} />
                <div className="formulario">
                    <TamanhoSenha tamanho={tamanho} tamanhoMudou={setTamanho} />

                    <div className="caracteristicas-senha">
                        <CaracteristicaSenha
                            texto="Incluir Letras Minúsculas"
                            valor={minusculas}
                            valorMudou={setMinusculas}
                        />
                        <CaracteristicaSenha
                            texto="Incluir Letras Maiúsculas"
                            valor={maiusculas}
                            valorMudou={setMaiusculas}
                        />
                        <CaracteristicaSenha
                            texto="Incluir Números"
                            valor={numeros}
                            valorMudou={setNumeros}
                        />
                        <CaracteristicaSenha
                            texto="Incluir Símbolos"
                            valor={simbolos}
                            valorMudou={setSimbolos}
                        />
                    </div>

                    <ForcaSenha nivel={Senha.nivel(senha)} />
                </div>
            </div>
        </main>
    )
}