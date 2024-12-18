<template>
	<div class="caracteristica">
		<input
			type="checkbox"
			:checked="valor"
			class="checkbox"
			@change="
				valorMudou(($event?.target as HTMLInputElement).checked ?? false)
			"
		/>
		<span>{{ texto }}</span>
	</div>
</template>

<script setup lang="ts">
defineProps({
	texto: {
		type: String,
		required: true,
	},
	valor: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(["valorMudou"]);

function valorMudou(novoValor: Boolean) {
	emit("valorMudou", novoValor);
}
</script>
