<script setup lang="ts">
import { computed, ref } from "vue";
import { Senha } from "regras";
import CaracteristicaSenha from "@/components/CaracteristicaSenha.vue";
import ExibirSenha from "@/components/ExibirSenha.vue";
import ForcaSenha from "@/components/ForcaSenha.vue";
import TamanhoSenha from "@/components/TamanhoSenha.vue";

const tamanho = ref(8);
const minusculas = ref(true);
const maiusculas = ref(true);
const numeros = ref(true);
const simbolos = ref(true);

const senha = computed(() => {
	return Senha.gerar({
		tamanho: tamanho.value,
		minusculas: minusculas.value,
		maiusculas: maiusculas.value,
		numeros: numeros.value,
		simbolos: simbolos.value,
	});
});
</script>

<template>
	<main class="tela">
		<div className="conteudo">
			<h1 className="titulo">Gerador de Senha - Vue</h1>
			<ExibirSenha :senha="senha" />
			<div className="formulario">
				<TamanhoSenha :tamanho="tamanho" @tamanhoMudou="tamanho = $event" />
				<div className="caracteristicas-senha">
					<CaracteristicaSenha
						texto="Incluir Letras Minúsculas"
						:valor="minusculas"
						@valorMudou="(novoValor) => (minusculas = novoValor)"
					/>
					<CaracteristicaSenha
						texto="Incluir Letras Maiúsculas"
						:valor="maiusculas"
						@valorMudou="(novoValor) => (maiusculas = novoValor)"
					/>
					<CaracteristicaSenha
						texto="Incluir Números"
						:valor="numeros"
						@valorMudou="(novoValor) => (numeros = novoValor)"
					/>
					<CaracteristicaSenha
						texto="Incluir Símbolos"
						:valor="simbolos"
						@valorMudou="(novoValor) => (simbolos = novoValor)"
					/>
				</div>
				<ForcaSenha :nivel="Senha.nivel(senha)" />
			</div>
		</div>
	</main>
</template>
