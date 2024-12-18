'use client'

import { IconCopy } from '@tabler/icons-react'

export interface ExibirSenhaProps {
    senha: string
}

export default function ExibirSenha(props: ExibirSenhaProps) {
    function copiarParaAreaTransferencia() {
        navigator.clipboard.writeText(props.senha)
        alert('Senha copiada para a área de transferência')
    }

    return (
        <div className="exibir-senha">
            <p className="senha">{props.senha ? props.senha : 'Selecione as opções...'}</p>
            <div>
                <IconCopy size={24} className="icone" onClick={copiarParaAreaTransferencia} />
            </div>
        </div>
    )
}
