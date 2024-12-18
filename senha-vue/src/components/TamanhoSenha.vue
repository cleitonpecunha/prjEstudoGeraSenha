<template>
	<div class="tamanho-senha">
		<div class="info">
			<span>Qtde de Caracteres</span>
			<span>{{ tamanho }}</span>
		</div>
		<div class="slider">
			<input
				type="range"
				min="4"
				max="80"
				:value="tamanho ?? 12"
				@input="tamanhoMudou(+($event.target as HTMLInputElement).value)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	tamanho: {
		type: Number,
		required: true,
	},
});
const emit = defineEmits(["tamanhoMudou"]);

function tamanhoMudou(novoTamanho: Number) {
	emit("tamanhoMudou", novoTamanho);
}
</script>
