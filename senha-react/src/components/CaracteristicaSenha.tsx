export interface CaracteristicaSenhaProps {
    texto: string
    valor: boolean
    valorMudou: (valor: boolean) => void
}

export default function CaracteristicaSenha(props: CaracteristicaSenhaProps) {
    return (
        <div className="caracteristica">
            <input
                type="checkbox"
                checked={props.valor}
                className="checkbox"
                onChange={(e) => props.valorMudou(e.target.checked)}
            />
            <span>{props.texto}</span>
        </div>
    )
}
