<template>
	<div class="exibir-senha">
		<p class="senha">
			<span v-if="senha">{{ senha }}</span>
			<span v-else>Selecione as opções...</span>
		</p>
		<IconCopy :size="24" class="icone" @click="copiarParaAreaTransferencia" />
	</div>
</template>

<script setup lang="ts">
import { IconCopy } from "@tabler/icons-vue";

const props = defineProps({
	senha: {
		type: String,
		required: true,
	},
});

function copiarParaAreaTransferencia() {
	navigator.clipboard.writeText(props.senha!);
	alert("Senha copiada para a área de transferência");
}
</script>
