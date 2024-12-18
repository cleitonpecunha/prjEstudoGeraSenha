export interface SenhaProps {
    tamanho?: number
    numeros?: boolean
    simbolos?: boolean
    minusculas?: boolean
    maiusculas?: boolean
}

export default class Senha {
    private static readonly NUMEROS = '0123456789'
    private static readonly SIMBOLOS = '!@#$%&*()_+-=[]{}|;:,.<>?'
    private static readonly MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz'
    private static readonly MAIUSCULAS = this.MINUSCULAS.toUpperCase()

    static gerar(props?: SenhaProps): string {
        const {
            tamanho = 8,
            numeros = false,
            simbolos = false,
            minusculas = false,
            maiusculas = false,
        } = props ?? {}

        if (tamanho < 4) throw new Error('Tamanho mínimo de 4 caracteres')
        if (![numeros, simbolos, minusculas, maiusculas].some(Boolean)) {
            return ''
        }

        const caracteres = [
            numeros ? this.NUMEROS : '',
            simbolos ? this.SIMBOLOS : '',
            minusculas ? this.MINUSCULAS : '',
            maiusculas ? this.MAIUSCULAS : '',
        ].join('')

        let senha = ''

        for (let i = 0; i < tamanho; i++) {
            senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }

        if (!this.validar(senha, props)) return this.gerar(props)

        return senha
    }

    static validar(senha: string, props?: SenhaProps): boolean {
        const {
            tamanho = 8,
            numeros = false,
            simbolos = false,
            minusculas = false,
            maiusculas = false,
        } = props ?? {}

        if (senha.length !== tamanho) {
            return false
        }

        if (numeros && !this.contemCaracteres(senha, this.NUMEROS)) {
            return false
        }

        if (simbolos && !this.contemCaracteres(senha, this.SIMBOLOS)) {
            return false
        }

        if (minusculas && !this.contemCaracteres(senha, this.MINUSCULAS)) {
            return false
        }

        if (maiusculas && !this.contemCaracteres(senha, this.MAIUSCULAS)) {
            return false
        }

        return true
    }

    static nivel(senha: string): 0 | 1 | 2 | 3 | 4 {
        if (!senha) return 0

        const pontos = [
            this.contemCaracteres(senha, this.NUMEROS),
            this.contemCaracteres(senha, this.SIMBOLOS),
            this.contemCaracteres(senha, this.MINUSCULAS),
            this.contemCaracteres(senha, this.MAIUSCULAS),
        ].filter(Boolean).length

        const nivel =
            [
                senha.length < 6 ? -1 : 0,
                senha.length >= 8 ? 1 : 0,
                senha.length >= 12 ? 1 : 0,
                senha.length >= 16 ? 2 : 0,
                senha.length >= 22 ? 4 : 0,
            ].reduce((a, b) => a + b, 0) + pontos

        if (nivel <= 3) return 1
        if (nivel <= 5) return 2
        if (nivel <= 7) return 3
        return 4
    }

    private static contemCaracteres(senha: string, caracteres: string): boolean {
        for (let i = 0; i < senha.length; i++) {
            if (caracteres.includes(senha.charAt(i))) {
                return true
            }
        }

        return false
    }
}

//console.log(senha.gerar({tamanho: 10, maiusculas: true, minusculas: true, simbolos: true, numeros: true}))