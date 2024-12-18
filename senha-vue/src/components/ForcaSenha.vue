<template>
	<div class="forca-senha">
		<span>Força</span>
		<div class="niveis">
			<span class="texto">
				<span v-if="nivel === 1">Fraca</span>
				<span v-else-if="nivel === 2">Média</span>
				<span v-else-if="nivel === 3">Média</span>
				<span v-else-if="nivel === 4">Forte</span>
			</span>
			<div class="nivel" :class="classe"></div>
			<div class="nivel" :class="nivel! >= 2 ? classe : ''"></div>
			<div class="nivel" :class="nivel! >= 3 ? classe : ''"></div>
			<div class="nivel" :class="nivel! == 4 ? classe : ''"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
	nivel: {
		type: Number,
		required: true,
	},
});

const classe = computed(() =>
	[
		props.nivel == 1 ? "fraca" : "",
		props.nivel == 2 ? "media" : "",
		props.nivel == 3 ? "media" : "",
		props.nivel == 4 ? "forte" : "",
	].join("")
);
</script>
